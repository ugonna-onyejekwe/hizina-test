import "./globals.css";
import { cn } from "@/lib/utils";
import { siteMetadata } from "@/lib/seo";
import { helvetica, nimbusSans } from "./fonts";
import NextTopLoader from "nextjs-toploader";

export const metadata = siteMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full antialiased",
        nimbusSans.variable,
        helvetica.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <NextTopLoader color="var(--primary)" height={3} showSpinner={false} />

        {children}
      </body>
    </html>
  );
}
