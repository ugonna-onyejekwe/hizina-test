import "server-only";

import type {
  ResolveNotifyApiResponse,
  ResolveNotifyReturn,
} from "@/types/get-payment-status";

const BASE_URL = process.env.UPLOAD_BASE_URL;

type GetOrderStatusParams = {
  reference: string;
};

export async function getOrderStatus({
  reference,
}: GetOrderStatusParams): Promise<ResolveNotifyReturn> {
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
    const response = await fetch(`${BASE_URL}/api/resolve/order`, {
      method: "GET",
      headers: {
        reference,
      },
      cache: "no-store",
    });

    const result: ResolveNotifyApiResponse = await response.json();

    if (!result.success) {
      return {
        data: null,
        error: result.data.error || result.message,
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
