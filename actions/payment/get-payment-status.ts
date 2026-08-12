import "server-only";

import type {
  ResolveNotifyApiResponse,
  ResolveNotifyReturn,
} from "@/types/get-payment-status";

const BASE_URL = process.env.UPLOAD_BASE_URL;

type GetPaymentStatusParams = {
  reference: string;
};

export async function getPaymentStatus({
  reference,
}: GetPaymentStatusParams): Promise<ResolveNotifyReturn> {
  if (!BASE_URL) {
    return {
      data: null,
      error: "Payment service configuration is missing.",
    };
  }

  if (!reference) {
    return {
      data: null,
      error: "No reference ID.",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/api/resolve/notify`, {
      method: "GET",
      headers: {
        reference,
      },
      cache: "no-store",
    });

    const result: ResolveNotifyApiResponse = await response.json();

    if (!response.ok || !result.success) {
      return {
        data: null,
        error: result.success
          ? result.message
          : result.data.error || result.message,
      };
    }

    return {
      data: result.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error:
        error instanceof Error ? error.message : "An unknown error occurred.",
    };
  }
}
