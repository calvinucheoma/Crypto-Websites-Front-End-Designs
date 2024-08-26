"use client";

import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordStrength } from "check-password-strength";
import { toast } from "react-toastify";
import { Button, Checkbox, Input } from "@nextui-org/react";
import {
  FaEnvelopeCircleCheck,
  FaEye,
  FaEyeSlash,
  FaKey,
  FaUserCheck,
} from "react-icons/fa6";
import PasswordStrength from "../components/PasswordStrength";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@react-hook/media-query";
import { useGlobalState } from "../context/globalProvider";
import useCurrentUser from "../hooks/useCurrentUser";

const FormSchema = z
  .object({
    fullName: z
      .string()
      .min(4, "Full name must be at least 4 characters")
      .max(45, "Full name should not be more than 45 characters"),
    // .regex(new RegExp("^[a-zA-Z]+$"), "No special characters allowed"),
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be less than 50 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password must be less than 50 characters"),
    accepted: z.literal(true, {
      errorMap: () => ({
        message: "Please accept all terms",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }); // 'path' specifies the element in which we put the error;

const RegisterPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const [inputSize, setInputSize] = useState("lg");

  const router = useRouter();

  useEffect(() => {
    setInputSize(isSmallScreen ? "sm" : "lg");
  }, [isSmallScreen]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(FormSchema) });

  const { currentUser, setCurrentUser } = useCurrentUser();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const [passStrength, setPassStrength] = useState(0);

  const password = watch().password;

  const passwordValue = useMemo(() => password, [password]);

  useEffect(() => {
    if (currentUser) {
      router.push("/dashboard");
    }
  }, [currentUser, router]);

  useEffect(() => {
    setPassStrength(passwordStrength(passwordValue).id);
  }, [passwordValue]);

  const toggleVisiblePassword = () => setIsVisiblePassword((prev) => !prev);

  // REGISTER USER FUNCTION
  const registerUser = async (data) => {
    const { accepted, fullName, confirmPassword, email } = data;

    // console.log({ accepted, fullName, confirmPassword, email });

    const user = { fullName, email };

    try {
      // register user functionality
      setCurrentUser(user);
      toast.success("User registered successfully!");
      router.push("/dashboard");
      reset();
    } catch (error) {
      toast.error("Something went wrong...");
      console.error(error);
    }
  };

  // if (currentUser) {
  //   return router.push("/dashboard");
  // }

  return (
    <main className="w-full min-h-[100vh] max-md:px-4 bg-[#36454F] py-8 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(registerUser)}
        className="bg-gray-100 py-8 w-[50%] max-lg:w-[70%] max-md:w-[90%] max-sm:w-full mx-auto px-12 max-md:px-6 flex flex-col gap-4 rounded-xl"
      >
        <h1 className="font-bold text-3xl max-md:text-xl text-center">
          Join Cryptomus
        </h1>

        <div className="flex flex-col gap-6">
          <Input
            {...register("fullName")}
            errorMessage={errors.fullName?.message}
            isInvalid={!!errors.fullName}
            label="First Name"
            labelPlacement="outside"
            startContent={<FaUserCheck size={16} />}
            size={inputSize}
            variant="bordered"
          />

          <Input
            type="email"
            {...register("email")}
            errorMessage={errors.email?.message}
            isInvalid={!!errors.email}
            label="Email"
            labelPlacement="outside"
            startContent={<FaEnvelopeCircleCheck size={16} />}
            size={inputSize}
            variant="bordered"
          />

          <Input
            type={isVisiblePassword ? "text" : "password"}
            {...register("password")}
            errorMessage={errors.password?.message}
            isInvalid={!!errors.password}
            label="Password"
            labelPlacement="outside"
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

          <Input
            {...register("confirmPassword")}
            errorMessage={errors.confirmPassword?.message}
            isInvalid={!!errors.confirmPassword}
            label="Confirm Password"
            labelPlacement="outside"
            type={isVisiblePassword ? "text" : "password"}
            startContent={<FaKey size={16} />}
            size={inputSize}
            variant="bordered"
          />

          <div>
            <PasswordStrength passStrength={passStrength} />
          </div>

          <div>
            <p className="text-sm max-sm:text-xs text-gray-500">
              Use at least 1 Upper case, 1 Number, and 1 Special character (#,
              *, etc.)
            </p>
          </div>

          <Controller
            control={control}
            name="accepted"
            render={({ field }) => (
              <Checkbox
                onChange={field.onChange}
                onBlur={field.onBlur}
                size={inputSize}
                color="primary"
                className="flex max-sm:items-start"
              >
                <span className="text-sm max-sm:text-xs">
                  I agree with the{" "}
                </span>
                <Link
                  href="/terms"
                  className="underline text-sm max-sm:text-xs"
                >
                  Terms of Use, AML policy and Privacy policy
                </Link>
              </Checkbox>
            )}
          />

          {!!errors.accepted && (
            <p className="text-red-500 text-xs">{errors.accepted.message}</p>
          )}

          <Button
            type="submit"
            color="warning"
            variant="shadow"
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
            size={inputSize}
            className="px-6 py-3 rounded-xl text-white max-md:py-2 max-md:text-sm"
          >
            {isSubmitting ? "Please wait..." : "Create an account"}
          </Button>

          {/* Login Button */}
          <div className="ml-auto">
            <p className="flex gap-1">
              <span className="text-sm font-medium max-sm:text-xs">
                Already have an account?
              </span>
              <span
                onClick={() => router.push("/login")}
                className="text-blue-400 text-sm max-sm:text-xs font-semibold cursor-pointer hover:text-blue-300"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </form>
    </main>
  );
};

export default RegisterPage;

// Styles
/*
            // style={{
            //   outline: "none",
            //   border: "none",
            //   padding: "12px",
            //   fontWeight: "normal",
            //   fontSize: "16px",
            //   borderRadius: "8px",
            //   backgroundColor: "#e5e7eb",
            // }}
*/
