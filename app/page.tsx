'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export default function MothersEndowment() {
  const [amount, setAmount] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [selected, setSelected] = useState<string>('');

  const router = useRouter();

  const handleDonate = () => {
    router.push('/payment');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <div className="flex space-x-2">
          <button className="text-purple-800 font-medium">En</button>
          <button className="text-purple-800 font-bold">Ar</button>
        </div>
        <div className="flex items-center space-x-4">
          <Image
            src="/vercel.svg"
            alt="Organization logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
          <Image
            src="/next.svg"
            alt="Mothers' Endowment logo"
            width={100}
            height={40}
            className="h-10 w-auto"
          />
        </div>
        <button className="text-purple-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </header>

      {/* Main Banner */}
      <div className="relative w-full h-[400px] bg-[#d1c9b1]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
          <div
            className="text-white text-4xl font-bold mb-2 text-right w-full"
            dir="rtl"
          >
            <Image
              src="/nav-logo.svg"
              alt="Mothers' Endowment logo"
              width={200}
              height={140}
              className="h-16 w-auto"
            />
          </div>

          <div
            className="text-white mt-6 text-xl font-bold text-right w-full"
            dir="rtl"
          >
            صدقــة جاريــة
          </div>
          <div
            className="text-white text-xl font-medium text-right w-full"
            dir="rtl"
          >
            عن جميع الأمهات
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#d1c9b1]/50"></div>
        <Image
          src="/hero-bg-ar.webp"
          alt="Mother and child"
          fill
          className="object-cover object-center-top  "
        />
      </div>

      {/* Donation Buttons */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <button
          className="bg-[#7a6b9d] text-white p-2 rounded-md text-right font-medium"
          dir="rtl"
        >
          للمساهمة عبر الاتصال
        </button>
        <button
          className="bg-[#5e2a8a] text-white p-2 rounded-md text-right font-medium"
          dir="rtl"
        >
          تصدّق عن أمـك
        </button>
      </div>

      <div className="px-4 pb-4">
        <button
          className="bg-[#b08bc4] text-white p-2 rounded-md w-full text-right font-medium"
          dir="rtl"
        >
          تصدّق عبـر منصة جود
        </button>
      </div>

      {/* Donation Form */}
      <div className="bg-[#f2f2f2] p-4 flex-1">
        <div className="text-right mb-6 text-xl font-medium" dir="rtl">
          تصدّق بمبلغ:
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            onClick={() => setSelected('100')}
            className={`${
              selected === '100' ? ' border border-18 ' : ''
            } bg-white border-gray-500 p-4 rounded-md text-center`}
          >
            <span className="text-[#5e2a8a] font-bold">AED</span>{' '}
            <span className="text-[#5e2a8a] font-bold">100</span>
          </button>
          <button
            onClick={() => setSelected('10')}
            className={`${
              selected === '10'
                ? 'text-[#5e2a8a] font-bold border border-18 '
                : ''
            } bg-white border-gray-500 p-4 text-[#5e2a8a]  rounded-md text-center`}
          >
            <span className="text-[#5e2a8a] font-bold">AED</span>{' '}
            <span className="text-[#5e2a8a] font-bold">10</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            onClick={() => setSelected('1000')}
            className={`${
              selected === '1000' ? ' border border-18 ' : ''
            } bg-white border-gray-500 p-4 rounded-md text-center`}
          >
            <span className="text-[#5e2a8a] font-bold">AED</span>{' '}
            <span className="text-[#5e2a8a] font-bold">1000</span>
          </button>
          <button
            onClick={() => setSelected('500')}
            className={`${
              selected === '500' ? ' border border-18 ' : ''
            } bg-white border-gray-500 p-4 rounded-md text-center`}
          >
            <span className="text-[#5e2a8a] font-bold">AED</span>{' '}
            <span className="text-[#5e2a8a] font-bold ">500</span>
          </button>
        </div>

        <div className="mb-4">
          <Input
            className="bg-white p-4 h-14 text-right"
            placeholder="(AED) مبلغ آخر"
            dir="rtl"
          />
        </div>

        <div className="mb-4">
          <Input className="bg-white p-4 h-14" placeholder="Email address" />
        </div>

        <div className="mb-8 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center">
            <div className="flex items-center border-r pr-2">
              <Image
                src="/flag.webp"
                alt="UAE flag"
                width={30}
                height={20}
                className="h-5 w-7"
              />
              <span className="ml-1">▼</span>
            </div>
          </div>
          <Input
            className="bg-white p-4 h-14 pl-24"
            placeholder="050 123 4567"
          />
        </div>

        <button
          onClick={handleDonate}
          className="bg-[#d1d7dc] text-[#5e5e5e] p-4 rounded-md w-full text-center mb-8 font-medium"
          dir="rtl"
        >
          تصدّق عبر بطاقة الإئتمان
        </button>

        <div className="flex justify-center items-center mb-4">
          <div className="text-sm text-gray-600 text-right" dir="rtl">
            رقم التصريح: PRHCE-002618583
          </div>
          <img
            src="/IACAD.png"
            alt="Certification logo"
            width={100}
            height={40}
            className="h-10 w-auto ml-2"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#5e2a8a] h-8"></footer>
    </div>
  );
}
