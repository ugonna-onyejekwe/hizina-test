import type { Metadata } from "next";
import { SITE_URL } from "./constants";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Hizina",
    template: "%s | Hizina",
  },

  description:
    "Hizina is an AI-powered social media platform for commerce, trending conversations, and connections.",

  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Hizina",
    description:
      "Hizina is an AI-powered social media platform for commerce, trending conversations, and connections.",
    images: [
      {
        url: "/logo.png",
        alt: "Hizina",
      },
    ],
  },
};
