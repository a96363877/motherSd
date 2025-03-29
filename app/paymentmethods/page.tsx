'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function PaymentMethods() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    router.push('/payment');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <button onClick={handleBack} className="text-purple-800">
          <ArrowLeft size={24} />
        </button>
        <div className="text-center font-medium text-lg">
          <span className="text-[#5e2a8a]">Payment Methods</span>
        </div>
        <div className="w-6"></div> {/* Empty div for spacing */}
      </header>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Select Payment Method
        </h2>

        <div className="space-y-4 mb-8">
          <div
            onClick={handleContinue}
            className="flex items-center justify-between p-4 border rounded-lg bg-white cursor-pointer hover:bg-gray-50"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Credit Card"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="font-medium">Credit Card</h3>
                <p className="text-sm text-gray-500">Visa, Mastercard, AMEX</p>
              </div>
            </div>
            <div className="w-6 h-6 border-2 border-[#5e2a8a] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-[#5e2a8a] rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg bg-white cursor-pointer hover:bg-gray-50">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Apple Pay"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="font-medium">Apple Pay</h3>
                <p className="text-sm text-gray-500">Pay with Apple Pay</p>
              </div>
            </div>
            <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg bg-white cursor-pointer hover:bg-gray-50">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Bank Transfer"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="font-medium">Bank Transfer</h3>
                <p className="text-sm text-gray-500">Direct bank transfer</p>
              </div>
            </div>
            <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="bg-[#f8f8f8] p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-2">Donation Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Amount:</span>
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

        <button
          onClick={handleContinue}
          className="bg-[#5e2a8a] text-white p-4 rounded-md w-full text-center font-medium"
        >
          Continue
        </button>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Your donation will support the Mothers&apos; Endowment educational
            fund
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#5e2a8a] h-8 mt-auto"></footer>
    </div>
  );
}
