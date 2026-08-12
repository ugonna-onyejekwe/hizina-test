"use client";

import { APP_STORE_URLS } from "@/lib/constants";
import { useEffect } from "react";

export default function GetAppPageRedirect() {
  const fallbackUrl = "https://www.hizina.com";

  const getUserAgent = (): string => {
    const ua = navigator.userAgent || "";
    const vendor = (navigator as Navigator & { vendor?: string }).vendor || "";

    // Opera detection (legacy)
    const opera = (window as Window & { opera?: unknown }).opera;

    return `${ua} ${vendor} ${opera || ""}`.toLowerCase();
  };

  useEffect(() => {
    const userAgent = getUserAgent();

    if (/android/i.test(userAgent)) {
      window.location.replace(APP_STORE_URLS.android);
    } else if (
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !("MSStream" in window)
    ) {
      window.location.replace(APP_STORE_URLS.apple);
    } else {
      window.location.replace(fallbackUrl);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center  bg-background">
      <div className="text-center p-8">
        <p className="text-lg text-foreground font-medium">Redirecting...</p>
      </div>
    </div>
  );
}
