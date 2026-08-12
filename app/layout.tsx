import "./globals.css";
import { cn } from "@/lib/utils";
import { siteMetadata } from "@/lib/seo";
import { nimbusSans } from "./fonts";

export const metadata = siteMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", nimbusSans.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
