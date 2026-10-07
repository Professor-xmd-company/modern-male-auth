"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
}

export default function SignupPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string || "").trim();
    const email = (formData.get("email") as string || "").trim();
    const password = (formData.get("password") as string || "").trim();
    const confirm = (formData.get("confirm") as string || "").trim();

    const newErrors: Errors = {};

    if (!name) {
      newErrors.name = "Full name is required.";
    }

    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!confirm) {
      newErrors.confirm = "Please confirm your password.";
    } else if (password && password !== confirm) {
      newErrors.confirm = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success state - return to Rest state without green checkmarks
    setErrors({});
    setSuccess(true);
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
        aria-label="Account Creation"
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
              Create account
            </h1>
            <p className="text-xs text-[#E2E4E7]/60 mt-1">
              Engineered access with calm precision
            </p>
          </div>

          {/* Uncontrolled Form with Native Bubble Suppression */}
          <form noValidate onSubmit={handleSubmit}>
            <div className="space-y-[16px]">
              {/* Field 1: Full Name */}
              <div>
                <label
                  htmlFor="signup-name-input"
                  className="block text-xs uppercase tracking-wider text-[#E2E4E7]/80 mb-1.5 font-medium"
                >
                  Full name
                </label>
                <input
                  id="signup-name-input"
                  type="text"
                  name="name"
                  autoComplete="name"
                  data-testid="signup-name"
                  className={`w-full bg-transparent border rounded-none text-[16px] text-[#E2E4E7] px-3 py-2.5 transition-none focus:outline-none focus:border-[#B87333] focus:shadow-[0_0_0_2px_rgba(184,115,51,0.2)] ${
                    errors.name ? "border-[#9E4739]" : "border-[#2A2E33]"
                  }`}
                  placeholder="Alexander Vance"
                />
                {errors.name && (
                  <div
                    aria-live="polite"
                    className="mt-1 text-[13px] text-[#9E4739] leading-tight"
                  >
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Field 2: Email */}
              <div>
                <label
                  htmlFor="signup-email-input"
                  className="block text-xs uppercase tracking-wider text-[#E2E4E7]/80 mb-1.5 font-medium"
                >
                  Email address
                </label>
                <input
                  id="signup-email-input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  data-testid="signup-email"
                  className={`w-full bg-transparent border rounded-none text-[16px] text-[#E2E4E7] px-3 py-2.5 transition-none focus:outline-none focus:border-[#B87333] focus:shadow-[0_0_0_2px_rgba(184,115,51,0.2)] ${
                    errors.email ? "border-[#9E4739]" : "border-[#2A2E33]"
                  }`}
                  placeholder="vance@domain.com"
                />
                {errors.email && (
                  <div
                    aria-live="polite"
                    className="mt-1 text-[13px] text-[#9E4739] leading-tight"
                  >
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Field 3: Password */}
              <div>
                <label
                  htmlFor="signup-password-input"
                  className="block text-xs uppercase tracking-wider text-[#E2E4E7]/80 mb-1.5 font-medium"
                >
                  Password
                </label>
                <input
                  id="signup-password-input"
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  data-testid="signup-password"
                  className={`w-full bg-transparent border rounded-none text-[16px] text-[#E2E4E7] px-3 py-2.5 transition-none focus:outline-none focus:border-[#B87333] focus:shadow-[0_0_0_2px_rgba(184,115,51,0.2)] ${
                    errors.password ? "border-[#9E4739]" : "border-[#2A2E33]"
                  }`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <div
                    aria-live="polite"
                    className="mt-1 text-[13px] text-[#9E4739] leading-tight"
                  >
                    {errors.password}
                  </div>
                )}
              </div>

              {/* Field 4: Confirm Password */}
              <div>
                <label
                  htmlFor="signup-confirm-input"
                  className="block text-xs uppercase tracking-wider text-[#E2E4E7]/80 mb-1.5 font-medium"
                >
                  Confirm password
                </label>
                <input
                  id="signup-confirm-input"
                  type="password"
                  name="confirm"
                  autoComplete="new-password"
                  data-testid="signup-confirm"
                  className={`w-full bg-transparent border rounded-none text-[16px] text-[#E2E4E7] px-3 py-2.5 transition-none focus:outline-none focus:border-[#B87333] focus:shadow-[0_0_0_2px_rgba(184,115,51,0.2)] ${
                    errors.confirm ? "border-[#9E4739]" : "border-[#2A2E33]"
                  }`}
                  placeholder="••••••••"
                />
                {errors.confirm && (
                  <div
                    aria-live="polite"
                    className="mt-1 text-[13px] text-[#9E4739] leading-tight"
                  >
                    {errors.confirm}
                  </div>
                )}
              </div>
            </div>

            {/* Success Feedback without green checkmarks */}
            {success && (
              <div
                role="status"
                className="mt-4 text-[13px] text-[#E2E4E7] border border-[#2A2E33] p-2 bg-[#121416]"
              >
                Account created successfully. Console credentials issued.
              </div>
            )}

            {/* Submit Button placed strictly 24px below last field */}
            <button
              type="submit"
              data-testid="signup-submit"
              className="mt-[24px] w-full bg-[#B87333] text-[#121416] hover:bg-[#C9854A] active:translate-y-[1px] active:transition-none rounded-none py-2.5 px-4 font-semibold text-sm tracking-wide overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer transition-none"
            >
              Create account
            </button>
          </form>

          {/* Navigation link to Login */}
          <div className="mt-8 pt-4 border-t border-[#2A2E33]/40 flex items-center justify-between text-xs text-[#E2E4E7]/60">
            <span>Already registered?</span>
            <Link
              href="/login"
              className="text-[#B87333] hover:text-[#C9854A] transition-none underline underline-offset-4"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
