'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, CreditCard, Calendar, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function ProfessionalPayment() {
  const router = useRouter();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handlePay = () => {
    router.push('/otp');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <button onClick={handleBack} className="text-purple-800">
          <ArrowLeft size={24} />
        </button>
        <div className="text-center font-medium text-lg">
          <span className="text-[#5e2a8a]">Payment Details</span>
        </div>
        <div className="w-6"></div> {/* Empty div for spacing */}
      </header>

      <div className="p-4">
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            <Image
              src="/placeholder.svg?height=30&width=40"
              alt="Visa"
              width={40}
              height={30}
              className="h-8 w-auto"
            />
            <Image
              src="/placeholder.svg?height=30&width=40"
              alt="Mastercard"
              width={40}
              height={30}
              className="h-8 w-auto"
            />
            <Image
              src="/placeholder.svg?height=30&width=40"
              alt="AMEX"
              width={40}
              height={30}
              className="h-8 w-auto"
            />
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <CreditCard size={20} />
            </div>
            <Input
              className="bg-white p-4 h-14 pl-12"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <Calendar size={20} />
              </div>
              <Input
                className="bg-white p-4 h-14 pl-12"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                <Lock size={20} />
              </div>
              <Input
                className="bg-white p-4 h-14 pl-12"
                placeholder="CVV"
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>

          <Input
            className="bg-white p-4 h-14"
            placeholder="Cardholder Name"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
        </div>

        <div className="bg-[#f8f8f8] p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-2">Payment Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Donation Amount:</span>
            <span className="font-medium">AED 100.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Processing Fee:</span>
            <span className="font-medium">AED 0.00</span>
          </div>
          <div className="border-t mt-2 pt-2 flex justify-between">
            <span className="font-medium">Total:</span>
            <span className="font-bold text-[#5e2a8a]">AED 100.00</span>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            <Lock size={20} className="text-[#5e2a8a]" />
          </div>
          <div className="text-sm text-gray-600">
            Your payment information is secure and encrypted
          </div>
        </div>

        <button
          onClick={handlePay}
          className="bg-[#5e2a8a] text-white p-4 rounded-md w-full text-center font-medium"
        >
          Pay AED 100.00
        </button>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            By proceeding, you agree to the terms and conditions
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#5e2a8a] h-8 mt-auto"></footer>
    </div>
  );
}
