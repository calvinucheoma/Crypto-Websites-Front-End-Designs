"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Button, Input } from "@nextui-org/react";
import {
  FaEnvelopeCircleCheck,
  FaEthereum,
  FaEye,
  FaEyeSlash,
  FaKey,
  FaTelegram,
} from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import useCurrentUser from "../hooks/useCurrentUser";

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password must be less than 50 characters"),
});

const LoginPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const [inputSize, setInputSize] = useState("lg");

  const router = useRouter();

  const { currentUser, setCurrentUser } = useCurrentUser();

  useEffect(() => {
    if (currentUser) {
      router.push("/dashboard");
    }
  }, [currentUser, router]);

  useEffect(() => {
    setInputSize(isSmallScreen ? "sm" : "lg");
  }, [isSmallScreen]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(FormSchema) });

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const toggleVisiblePassword = () => setIsVisiblePassword((prev) => !prev);

  // LOG IN USER FUNCTION
  const loginUser = async (data) => {
    const { email, password } = data;

    const user = { email };

    // console.log({ email, password });

    try {
      // register user functionality
      setCurrentUser(user);
      toast.success("Logged in successfully!");
      router.push("/dashboard");
      reset();
    } catch (error) {
      toast.error("Something went wrong...");
      console.error(error);
    }
  };

  // LOG IN WITH TELEGRAM FUNCTION
  const loginWithTelegram = () => {};

  // LOG IN WITH ETHEREUM FUNCTION
  const loginWithEthereum = () => {};

  // if (currentUser) {
  //   return router.push("/dashboard");
  // }

  return (
    <main className="w-full min-h-[100vh] bg-[#36454F] py-8 max-md:px-4 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(loginUser)}
        className="bg-gray-100 py-8 w-[50%] max-lg:w-[70%] max-md:w-[90%] max-sm:w-full mx-auto px-12 max-md:px-6 flex flex-col gap-4 rounded-xl"
      >
        <h1 className="font-bold text-3xl max-md:text-xl text-center mb-8">
          Log in to Cryptomus
        </h1>

        <div className="flex flex-col gap-6">
          <Input
            type="email"
            {...register("email")}
            errorMessage={errors.email?.message}
            isInvalid={!!errors.email}
            placeholder="Enter your email address"
            startContent={<FaEnvelopeCircleCheck size={16} />}
            size={inputSize}
            variant="bordered"
          />

          <Input
            type={isVisiblePassword ? "text" : "password"}
            {...register("password")}
            errorMessage={errors.password?.message}
            isInvalid={!!errors.password}
            placeholder="Enter your password"
            size={inputSize}
            variant="bordered"
            startContent={<FaKey size={16} />}
            endContent={
              isVisiblePassword ? (
                <FaEyeSlash
                  size={16}
                  onClick={toggleVisiblePassword}
                  className="cursor-pointer"
                />
              ) : (
                <FaEye
                  size={16}
                  onClick={toggleVisiblePassword}
                  className="cursor-pointer"
                />
              )
            }
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
            {isSubmitting ? "Please wait..." : "Log In"}
          </Button>

          {/* Forgot Password Section */}
          <div className="mx-auto">
            <p
              className="text-base max-sm:text-xs cursor-pointer font-semibold"
              onClick={() => router.push("/forgot-password")}
            >
              Forgot your password?
            </p>
          </div>

          {/* Register Button */}
          <div className="ml-auto max-sm:mx-auto">
            <p className="flex gap-1">
              <span className="text-sm font-medium max-sm:text-xs">
                Don&apos;t have an account?
              </span>
              <span
                onClick={() => router.push("/register")}
                className="text-blue-400 text-sm max-sm:text-xs font-semibold cursor-pointer hover:text-blue-300"
              >
                Register
              </span>
            </p>
          </div>

          {/* Other Sign-in Methods */}
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex gap-2 max-sm:gap-0 items-center justify-center">
              <div className="w-[40%] h-[3px] bg-gray-300" />
              <p className="max-md:w-[20%] max-sm:w-[30%] text-center font-semibold text-sm max-sm:text-xs text-gray-600">
                Log in with
              </p>
              <div className="w-[40%] h-[3px] bg-gray-300" />
            </div>

            <div className="flex items-center justify-evenly gap-3">
              <div
                className="border-2 border-gray-400 rounded-full cursor-pointer p-1"
                onClick={() => signIn("google")}
              >
                <FcGoogle className="text-[28px] max-md:text-[20px]" />
              </div>

              <div
                className="border-2 border-gray-400 rounded-full cursor-pointer p-1"
                // onClick={() => router.push("/auth/telegram")}
                onClick={loginWithTelegram}
              >
                <FaTelegram className="text-[28px] max-md:text-[20px]" />
              </div>

              <div
                className="border-2 border-gray-400 rounded-full cursor-pointer p-1"
                onClick={loginWithEthereum}
              >
                <FaEthereum className="text-[28px] max-md:text-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
