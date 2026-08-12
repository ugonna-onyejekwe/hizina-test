import { getOrderStatus } from "@/actions/payment/get-order-status";
import { PaymentSuccess } from "../../notify/[id]/_components/successful-payment";
import { PaymentFailed } from "../../notify/[id]/_components/failed-payment";
import { PaymentLoading } from "../../notify/[id]/_components/loader";

type OrderStatusPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderStatusPage({
  params,
}: OrderStatusPageProps) {
  const { id: reference } = await params;

  const result = await getOrderStatus({
    reference,
  });

  return (
    <>
      <style>{`
        @keyframes pulseOut {
          0%   { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.35); }
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="w-full max-w-[440px] bg-card border border-border rounded-[20px] px-8 py-10 flex flex-col items-center text-center shadow-none">
          {!result.data && !result.error && <PaymentLoading />}

          {result.data && <PaymentSuccess data={result.data} />}

          {result.error && <PaymentFailed error={result.error} />}
        </div>
      </div>
    </>
  );
}
