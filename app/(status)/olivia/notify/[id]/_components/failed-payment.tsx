"use client";

import { useRouter } from "next/navigation";

type Props = {
  error: string;
};

export function PaymentFailed({ error }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full">
      {/* Icon */}
      <div className="relative w-[72px] h-[72px] flex items-center justify-center rounded-full bg-red-500/10 mb-6">
        <div
          className="absolute inset-[-8px] rounded-full border border-red-500/30"
          style={{ animation: "pulseOut 2s ease-out infinite" }}
        />
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <line
            x1="10"
            y1="10"
            x2="22"
            y2="22"
            stroke="rgb(239 68 68)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="22"
            y1="10"
            x2="10"
            y2="22"
            stroke="rgb(239 68 68)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Badge */}
      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 mb-4 tracking-wide uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
        failed
      </span>

      <h1 className="text-[22px] font-medium text-foreground mb-1.5 leading-tight">
        Transaction failed
      </h1>
      <p className="text-[14px] text-muted-foreground leading-relaxed mb-7 max-w-[300px]">
        {error}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-border mb-6" />

      {/* Actions */}
      <button
        onClick={() => router.back()}
        className="w-full mt-6 py-3 rounded-md bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity cursor-pointer"
      >
        Go Back
      </button>
    </div>
  );
}
