"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import cover1 from '/public/cover.png';
import logo from "/public/logo.jpeg";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const paymentLink = process.env.NEXT_PUBLIC_PAYMENT_LINK;

const Username = ({ params }) => {
    const { data: session } = useSession();
    const userName = session ? session.user.name : '';
    const image = session ? session.user.profilepic : '';
    const router = useRouter();


    useEffect(() => {
        if (!session) {
            router.push('/login');
        }
    }, [router, session]);

    return (
        <>
            <div className='cover -mt-8 mx-auto p-3 relative'>
                <Image className='h-80 rounded-md' src={cover1} alt="Cover Image" />
                <div className='absolute -bottom-14 right-[46%] border border-white rounded-full'>
                    <Image className=' rounded-full' src={image} width={80} height={80} alt="Logo Image" />
                </div>
            </div>
            <div className='info flex flex-col justify-center items-center mt-24 text-white text-center'>
                <div className='font-bold text-lg'>
                    @{process.env.NEXT_PUBLIC_CREATOR_NAME}
                </div>
                <div className='text-slate-400'>
                    Bringing unique content to life with your support
                </div>
                <div className='text-slate-400'>
                    Support our Patronix
                </div>
            </div>

            <div className="payment flex p-3 gap-5 justify-center w-[80vw] mx-auto">
                <div className="supporter w-2/3 p-3 rounded-md overflow-y-scroll max-h-[26rem]">
                    <ul className='text-white p-2 space-y-4'>
                        <li className="flex justify-start">
                            <div className="bg-green-500 p-3 rounded-lg max-w-xs">
                                <strong>{userName}:</strong> "Hey, I just donated $10! Hope it helps!"
                            </div>
                        </li>
                        <li className="flex justify-end">
                            <div className="bg-blue-500 p-3 rounded-lg max-w-xs">
                                <strong>@{process.env.NEXT_PUBLIC_CREATOR_NAME}:</strong> "You're a legend! Thanks for the support! I’ll use it to buy more coffee to fuel my art sessions."
                            </div>
                        </li>
                        <li className="flex justify-start">
                            <div className="bg-green-500 p-3 rounded-lg max-w-xs">
                                <strong>{userName}:</strong> "Glad to hear it! How much coffee do you need to create a masterpiece?"
                            </div>
                        </li>
                        <li className="flex justify-end">
                            <div className="bg-blue-500 p-3 rounded-lg max-w-xs">
                                <strong>@{process.env.NEXT_PUBLIC_CREATOR_NAME}:</strong> "Depends. Are we talking Picasso level or Van Gogh? 😂"
                            </div>
                        </li>
                        <li className="flex justify-start">
                            <div className="bg-green-500 p-3 rounded-lg max-w-xs">
                                <strong>{userName}:</strong> "Let's aim for Van Gogh, minus the ear incident!"
                            </div>
                        </li>
                        <li className="flex justify-end">
                            <div className="bg-blue-500 p-3 rounded-lg max-w-xs">
                                <strong>@{process.env.NEXT_PUBLIC_CREATOR_NAME}:</strong> "Deal! If I paint with my ear, I'll let you know. 😂"
                            </div>
                        </li>
                        <li className="flex justify-start">
                            <div className="bg-green-500 p-3 rounded-lg max-w-xs">
                                <strong>{userName}:</strong> "Fair enough. By the way, what’s the inspiration behind your latest piece?"
                            </div>
                        </li>
                        <li className="flex justify-end">
                            <div className="bg-blue-500 p-3 rounded-lg max-w-xs">
                                <strong>@{process.env.NEXT_PUBLIC_CREATOR_NAME}:</strong> "Honestly? My cat knocked over a paint can, and the rest is history!"
                            </div>
                        </li>
                        <li className="flex justify-start">
                            <div className="bg-green-500 p-3 rounded-lg max-w-xs">
                                <strong>{userName}:</strong> "Artistic genius! Tell your cat they're a co-creator now."
                            </div>
                        </li>
                        <li className="flex justify-end">
                            <div className="bg-blue-500 p-3 rounded-lg max-w-xs">
                                <strong>@{process.env.NEXT_PUBLIC_CREATOR_NAME}:</strong> "Will do! And thank you again, {userName}. You're the cat's meow!"
                            </div>
                        </li>
                        <li className="flex justify-start">
                            <div className="bg-green-500 p-3 rounded-lg max-w-xs">
                                <strong>{userName}:</strong> "Happy to help! Can’t wait to see the next masterpiece."
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="makepayment p-3 flex justify-center w-1/3 border border-slate-500 text-white rounded-md ">
                    <script async
                        src="https://js.stripe.com/v3/buy-button.js">
                    </script>

                    <stripe-buy-button
                        buy-button-id="buy_btn_1PlAscRtawS6TEJQmDy5woXy"
                        publishable-key="pk_test_51Pl4C0RtawS6TEJQZrzy2vG2hygfxe7jqgrrA1paKsme5G1reoMOU4yoixyhTLFk2XlNZcbuW1u5aAOcRqW1i3Y500QPP95rhn"
                    >
                    </stripe-buy-button>
                </div>
            </div>
        </>
    );
};

export default Username;
