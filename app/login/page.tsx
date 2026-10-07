"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<{ email?: boolean; password?: boolean }>({});
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string || "").trim();
    const password = (formData.get("password") as string || "").trim();

    const errors: { email?: boolean; password?: boolean } = {};
    let errorSummary = "";

    if (!email) {
      errors.email = true;
      errorSummary = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = true;
      errorSummary = "Please enter a valid email address.";
    }

    if (!password) {
      errors.password = true;
      errorSummary = errorSummary ? `${errorSummary} Password is required.` : "Password is required.";
    } else if (password.length < 6) {
      errors.password = true;
      errorSummary = errorSummary ? `${errorSummary} Password must be at least 6 characters.` : "Password must be at least 6 characters.";
    }

    if (errors.email || errors.password) {
      setFieldErrors(errors);
      setErrorMessage(errorSummary);
      setSubmittedSuccess(false);
      return;
    }

    // Success state - return inputs to rest state
    setFieldErrors({});
    setErrorMessage("");
    setSubmittedSuccess(true);
  };

  return (
    <main className="flex min-h-screen flex-col md:flex-row bg-[#121416] text-[#E2E4E7]">
      {/* 60% Left Void with Brand Mark */}
      <section
        aria-label="Brand Mark"
        className="hidden md:flex w-3/5 bg-[#121416] items-center justify-center border-r border-[#2A2E33] p-12"
      >
        <BrandMark />
      </section>

      {/* 40% Right Form Column */}
      <section
        aria-label="Authentication"
        className="flex w-full md:w-2/5 min-h-screen items-center justify-center p-6 sm:p-8 bg-[#121416]"
      >
        <div className="max-w-[380px] w-full">
          {/* Mobile Brand Mark */}
          <div className="md:hidden flex justify-center mb-8">
            <BrandMark className="scale-75" />
          </div>

          {/* Form Header */}
          <div className="mb-6">
            <h1 className="text-xl font-medium tracking-tight text-[#E2E4E7]">
              Sign in to console
            </h1>
            <p className="text-xs text-[#E2E4E7]/60 mt-1">
              Engineered access with calm precision
            </p>
          </div>

          {/* Login Form */}
          <form noValidate onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="login-email-input"
                className="block text-xs uppercase tracking-wider text-[#E2E4E7]/80 mb-1.5 font-medium"
              >
                Email address
              </label>
              <input
                id="login-email-input"
                type="email"
                name="email"
                autoComplete="email"
                data-testid="login-email"
                className={`w-full bg-transparent border rounded-none text-[16px] text-[#E2E4E7] px-3 py-2.5 transition-none focus:outline-none focus:border-[#B87333] focus:shadow-[0_0_0_2px_rgba(184,115,51,0.2)] ${
                  fieldErrors.email ? "border-[#9E4739]" : "border-[#2A2E33]"
                }`}
                placeholder="name@domain.com"
              />
            </div>

            <div>
              <label
                htmlFor="login-password-input"
                className="block text-xs uppercase tracking-wider text-[#E2E4E7]/80 mb-1.5 font-medium"
              >
                Password
              </label>
              <input
                id="login-password-input"
                type="password"
                name="password"
                autoComplete="current-password"
                data-testid="login-password"
                className={`w-full bg-transparent border rounded-none text-[16px] text-[#E2E4E7] px-3 py-2.5 transition-none focus:outline-none focus:border-[#B87333] focus:shadow-[0_0_0_2px_rgba(184,115,51,0.2)] ${
                  fieldErrors.password ? "border-[#9E4739]" : "border-[#2A2E33]"
                }`}
                placeholder="••••••••"
              />
            </div>

            {/* Error Summary Container with aria-live */}
            <div
              aria-live="polite"
              className={`min-h-[18px] text-[13px] text-[#9E4739] leading-tight ${
                errorMessage ? "block" : "hidden"
              }`}
            >
              {errorMessage}
            </div>

            {submittedSuccess && !errorMessage && (
              <div
                role="status"
                className="text-[13px] text-[#E2E4E7] border border-[#2A2E33] p-2 bg-[#121416]"
              >
                Authenticated successfully. Redirecting...
              </div>
            )}

            <button
              type="submit"
              data-testid="login-submit"
              className="w-full bg-[#B87333] text-[#121416] hover:bg-[#C9854A] active:translate-y-[1px] active:transition-none rounded-none py-2.5 px-4 font-semibold text-sm tracking-wide overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer transition-none"
            >
              Sign in
            </button>
          </form>

          {/* Navigation link to Signup */}
          <div className="mt-8 pt-4 border-t border-[#2A2E33]/40 flex items-center justify-between text-xs text-[#E2E4E7]/60">
            <span>Don&apos;t have an account?</span>
            <Link
              href="/signup"
              className="text-[#B87333] hover:text-[#C9854A] transition-none underline underline-offset-4"
            >
              Create account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
