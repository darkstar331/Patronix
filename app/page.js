"use client"
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="text-white mx-auto">
      <div className="flex flex-col p-3 gap-3 mt-20 justify-center items-center">
        <div className="font-bold gap-3 flex text-center text-3xl md:text-3xl">
          <span>Where Creators and Fans Unite: Fund Your Dreams on Patronix!</span>
          <CurrencyExchangeIcon style={{ fontSize: '2rem' }} />
        </div>
        {session && (
          <Link href={`/${session.user.name}`} passHref>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Start
              </span>
            </button>
          </Link>
        )}
      </div>

      <div className="p-5 bg-transparent mt-10 border border-gray-700 rounded-lg mx-auto w-[80%] content-center">
        <div className="p-4 text-2xl font-bold text-center text-[#FFD700]">Designed for creators, not for businesses.</div>
        <div className="mt-3 p-3">
          <ul className="grid grid-cols-2 gap-8 p-3">
            <li className="text-bold text-[#e5e4e2]"><CheckCircleIcon /> We don&apos;t call them &quot;customers&quot; or transactions. They are your supporters.</li>
            <li className="text-bold text-[#e5e4e2]"><CheckCircleIcon /> You get to talk to a human for help, or if you just like some advice to hit the ground running.</li>
            <li className="text-bold text-[#e5e4e2]"><CheckCircleIcon /> You have 100% ownership of your supporters. We never email them, and you can export the list any time you like.</li>
            <li className="text-bold text-[#e5e4e2]"><CheckCircleIcon /> You get paid instantly to your bank account. No more 30-day delays.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col mt-10 p-2 md:flex-row items-center gap-5 justify-around">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-transparent dark:border-gray-700">
          <AccountBalanceWalletIcon style={{ fontSize: '2rem' }} />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Earnings &uarr;</h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Over 80% of Creators See Increased Earnings with Direct Fan Support!</p>
        </div>

        <div className="max-w-sm flex flex-col gap-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-transparent dark:border-gray-700">
          <PaymentIcon style={{ fontSize: '2rem' }} />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Payment Methods &darr;</h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Flexible Payout Options: Choose How and When You Get Paid!</p>
        </div>

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-transparent dark:border-gray-700">
          <SupportAgentIcon style={{ fontSize: '2rem' }} />
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Support &rarr;</h5>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">24/7 Support: We are Here to Help Whenever You Need Us!</p>
        </div>
      </div>
    </div>
  );
}

