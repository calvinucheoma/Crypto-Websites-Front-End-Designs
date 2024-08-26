'use client';

import { useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@nextui-org/react';
import { z } from 'zod';
import useCurrentUser from '../hooks/useCurrentUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { FaEnvelopeCircleCheck } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';

const FormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

const ForgotPasswordPage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const [inputSize, setInputSize] = useState('lg');

  const router = useRouter();

  const { currentUser } = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      router.push('/dashboard');
    }
  }, [currentUser, router]);

  useEffect(() => {
    setInputSize(isSmallScreen ? 'sm' : 'lg');
  }, [isSmallScreen]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(FormSchema) });

  // Handle form submission
  const sendPasswordVerificationLink = async (data) => {
    const { email } = data;

    try {
      toast.success('Password reset link has been sent to your email!');
      router.push('/login');
      reset();
    } catch (error) {
      toast.error('Something went wrong...');
      console.error(error);
    }
  };

  return (
    <main className="w-full min-h-[100vh] bg-[#36454F] py-8 max-md:px-4 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(sendPasswordVerificationLink)}
        className="bg-gray-100 py-8 w-[50%] max-lg:w-[70%] max-md:w-[90%] max-sm:w-full mx-auto px-12 max-md:px-6 flex flex-col gap-4 rounded-xl"
      >
        <h1 className="font-bold text-3xl max-md:text-xl text-center mb-8">
          Forgot Password
        </h1>

        <div className="flex flex-col gap-6">
          <Input
            type="email"
            {...register('email')}
            errorMessage={errors.email?.message}
            isInvalid={!!errors.email}
            placeholder="Enter your email address"
            startContent={<FaEnvelopeCircleCheck size={16} />}
            size={inputSize}
            variant="bordered"
          />

          <Button
            type="submit"
            color="warning"
            variant="shadow"
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
            size={inputSize}
            className="px-6 py-3 rounded-xl text-white mt-4 max-md:py-2 max-md:text-sm"
          >
            {isSubmitting ? 'Please wait...' : 'Reset Password'}
          </Button>
        </div>
      </form>
    </main>
  );
};

export default ForgotPasswordPage;
