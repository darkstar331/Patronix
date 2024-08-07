import { Inter } from "next/font/google"
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SessionWrapper from "../components/SessionWrapper";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Patronix",
  description: "Fund Your Dreams on Patronix!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative h-full w-full bg-slate-950 overflow-x-hidden">
          <div className="absolute bottom-0 left-[-11%] right-0 top-[-10%] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 left-[95%] transform -translate-x-1/2 top-[-10%] md:h-[500px] md:w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))] "></div>
          <SessionWrapper>
            <Navbar />
            <Toaster position="top-center" reverseOrder={false} />
            <div className="min-h-screen">
              {children}
            </div>
            <Footer />
          </SessionWrapper>

        </div>


      </body>
    </html>
  );
}
