import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import User from '../../../../models/User';
import connectDb from '../../../../db/connectDb';
import stripe from 'stripe';

const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);

const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            await connectDb();

            const currentUser = await User.findOne({ email: email });
            if (!currentUser) {
                // Create Stripe customer if the user is new
                const stripeCustomer = await stripeClient.customers.create({
                    email: user.email,
                });

                const newUser = await User.create({
                    name: user.name,
                    email: user.email,
                    username: user.email.split('@')[0],
                    profilepic: user.image,
                    stripeCustomerId: stripeCustomer.id,    // Save Stripe customer ID
                });
                await newUser.save();
            }
            return true;
        },
        async session({ session, token, user }) {
            await connectDb();

            const dbUser = await User.findOne({ email: session.user.email });
            if (dbUser) {
                session.user.name = dbUser.name;
                session.user.stripeCustomerId = dbUser.stripeCustomerId;
                session.user.profilepic = dbUser.profilepic; // Include profilepic in session
            }
            return session;
        },
    },
};

const handler = (req, res) => NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };
