"use client";

import { signIn } from "next-auth/react";
import { z } from "zod";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import AlertBox from "@/components/ui/display/AlertBox";
import InputField from "@/components/form/input/InputField";
import Button from "@/components/buttons/Button";

// zod schema for validating form input
const userLoginDataSchema = z.object({
  email: z.string().email("Please provide a valid email like hello@mail.com"),
  password: z
    .string()
    .min(
      8,
      "Your passwords has to be at least 8 characters long. Please try again."
    ),
});

type userLoginDataType = z.infer<typeof userLoginDataSchema>;

export default function LoginForm() {
  const [inputErrors, setInputErrors] =
    useState<z.ZodFormattedError<{ email: string; password: string }>>();

  // Get URL params to display login error and redirect user after login
  const searchParams = useSearchParams();
  const callbackUrlParam = searchParams.get("callbackUrl");
  const errorCodeParam = searchParams.get("error");

  // Validate input from user with zod
  async function validateUserLoginInput(inputData: userLoginDataType) {
    const parsedUserLoginData = userLoginDataSchema.safeParse({
      email: inputData.email,
      password: inputData.password,
    });

    // Store errors into state to show above according input field
    if (parsedUserLoginData.success === false) {
      setInputErrors(parsedUserLoginData.error.format());
      return false;
    }

    return parsedUserLoginData.data;
  }

  async function handleUserSignIn(userLoginInput: userLoginDataType) {
    const validatedUserInput = await validateUserLoginInput(userLoginInput);

    // Send login request if inputs are valid
    if (validatedUserInput !== false) {
      signIn("credentials", {
        email: validatedUserInput.email,
        password: validatedUserInput.password,
        callbackUrl: callbackUrlParam || "/",
        redirect: true,
      });
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleUserSignIn({
          email: String(formData.get("email")) || "",
          password: String(formData.get("password")) || "",
        });
      }}
      className="grid gap-5 bg-background-100 rounded-xl p-5"
    >
      {errorCodeParam === "CredentialsSignin" && (
        <AlertBox
          status="error"
          title="Wrong credentials"
          message="Please check your email and password and try again."
        ></AlertBox>
      )}
      <InputField
        name="email"
        id="email"
        label="Your Email"
        color="base"
        errorMessage={inputErrors?.email?._errors[0]}
      ></InputField>
      <InputField
        name="password"
        id="password"
        type="password"
        label="Your Password"
        errorMessage={inputErrors?.password?._errors[0]}
        color="base"
      ></InputField>
      <div className="grid mt-3 w-full">
        <Button showIcon text="Login"></Button>
      </div>
    </form>
  );
}
