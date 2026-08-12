import type { Metadata } from "next";
import GetAppPageRedirect from "./_components/getAppRedirect";

export const metadata: Metadata = {
  title: "Get the Hizina App",
  description:
    "Download Hizina and connect with friends, explore trending conversations, discover new interests, and grow your e-commerce business.",
};

export default function GetAppPage() {
  return <GetAppPageRedirect />;
}
