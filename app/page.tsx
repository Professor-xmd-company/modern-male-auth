import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#121416] text-[#E2E4E7]">
      <div className="max-w-[420px] w-full text-center space-y-8">
        <BrandMark />
        <div className="space-y-2">
          <h1 className="text-xl font-medium tracking-wide">AUTHENTICATION SYSTEM</h1>
          <p className="text-xs text-[#E2E4E7]/60">Engineered Calm Design Language</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/login"
            className="flex-1 bg-[#B87333] text-[#121416] hover:bg-[#C9854A] active:translate-y-[1px] active:transition-none py-2.5 px-4 font-semibold text-sm tracking-wide text-center"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="flex-1 border border-[#2A2E33] hover:border-[#B87333] hover:text-[#B87333] active:translate-y-[1px] active:transition-none py-2.5 px-4 font-semibold text-sm tracking-wide text-center"
          >
            Create Account
          </Link>
        </div>
      </div>
    </main>
  );
}
