'use client';

import type React from 'react';

import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState, useRef, useEffect } from 'react';

export default function OtpVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleBack = () => {
    router.back();
  };

  const handleComplete = () => {
    router.push('/');
  };

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if current input is filled
      if (value !== '' && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      // Check if all inputs are filled
      if (newOtp.every((digit) => digit !== '') && index === 5) {
        // Simulate verification
        setTimeout(() => {
          setIsVerified(true);
        }, 1500);
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    // Focus the first input on component mount
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <button onClick={handleBack} className="text-purple-800">
          <ArrowLeft size={24} />
        </button>
        <div className="text-center font-medium text-lg">
          <span className="text-[#5e2a8a]">OTP Verification</span>
        </div>
        <div className="w-6"></div> {/* Empty div for spacing */}
      </header>

      <div className="p-4 flex flex-col items-center">
        {!isVerified ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold mb-2">
                Enter Verification Code
              </h2>
              <p className="text-gray-600">
                We&apos;ve sent a 6-digit code to your mobile number
              </p>
              <p className="text-gray-600 font-medium">+971 50 *** 4567</p>
            </div>

            <div className="flex justify-center space-x-2 mb-8 w-full">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 text-center text-xl font-bold"
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  maxLength={1}
                  inputMode="numeric"
                  pattern="[0-9]*"
                />
              ))}
            </div>

            <div className="text-center mb-8">
              <p className="text-gray-600 mb-2">
                Didn&apos;t receive the code?
              </p>
              <button className="text-[#5e2a8a] font-medium">
                Resend Code
              </button>
            </div>

            <button
              className={`w-full p-4 rounded-md text-center font-medium ${
                otp.every((digit) => digit !== '')
                  ? 'bg-[#5e2a8a] text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
              disabled={!otp.every((digit) => digit !== '')}
            >
              Verify
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <CheckCircle size={40} className="text-green-600" />
            </div>

            <h2 className="text-2xl font-semibold mb-2">Payment Successful</h2>
            <p className="text-gray-600 mb-8 text-center">
              Thank you for your donation to the Mothers&apos; Endowment fund
            </p>

            <div className="bg-[#f8f8f8] p-4 rounded-lg mb-8 w-full max-w-md">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Transaction ID:</span>
                <span className="font-medium">MOT12345678</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Amount:</span>
                <span className="font-bold text-[#5e2a8a]">AED 100.00</span>
              </div>
            </div>

            <button
              onClick={handleComplete}
              className="bg-[#5e2a8a] text-white p-4 rounded-md w-full text-center font-medium max-w-md"
            >
              Done
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#5e2a8a] h-8 mt-auto"></footer>
    </div>
  );
}
