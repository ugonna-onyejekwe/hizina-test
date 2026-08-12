"use client";

import type { ResolveNotifySuccessData } from "@/types/get-payment-status";
import { useRouter } from "next/navigation";

type Props = {
  data: ResolveNotifySuccessData;
};

export function PaymentSuccess({ data }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full">
      {/* Icon */}
      <div className="relative w-[72px] h-[72px] flex items-center justify-center rounded-full bg-green-500/10 mb-6">
        <div
          className="absolute inset-[-8px] rounded-full border border-green-500/30"
          style={{ animation: "pulseOut 2s ease-out infinite" }}
        />
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <polyline
            points="7,16 13,22 25,10"
            stroke="rgb(34 197 94)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Badge */}
      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 mb-4 tracking-wide uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
        Payment confirmed
      </span>

      <h1 className="text-[22px] font-medium text-foreground mb-1.5 leading-tight ">
        Transaction successful
      </h1>
      <p className="text-[14px] text-muted-foreground leading-relaxed mb-7 max-w-[300px]">
        Your transaction was processed successfully.
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-border mb-6" />

      {/* Details */}
      <div className="w-full space-y-2 mb-0">
        {[
          {
            label: "Payment method",
            value: data.paymentmode,
          },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center py-1.5">
            <span className="text-[13px] text-muted-foreground">{label}</span>
            <span
              className={`text-[13px] font-medium tabular-nums  text-foreground`}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <button
        onClick={() => router.back()}
        className="w-full mt-6 py-3 rounded-md bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity cursor-pointer"
      >
        Go to dashboard
      </button>
    </div>
  );
}
