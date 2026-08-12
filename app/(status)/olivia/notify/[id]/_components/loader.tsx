export function PaymentLoading() {
  return (
    <div className="flex flex-col items-center gap-6 py-4">
      {/* Spinner */}
      <div
        className="w-10 h-10 rounded-full border-2 border-border border-t-foreground animate-spin"
        style={{ animationDuration: "0.8s" }}
      />

      {/* Text */}
      <div className="text-center">
        <p className="text-[15px] font-medium text-foreground mb-1">
          Verifying payment…
        </p>
        <p className="text-[13px] text-muted-foreground mb-4">
          Fetching your transaction details
        </p>
      </div>
    </div>
  );
}
