import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/olivia/notify/", "/olivia/order/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
