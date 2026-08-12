import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      {/* Logo */}
      <div className="mb-10 -mt-5 flex items-center gap-2.5">
        {/* Replace with your actual logo */}
        <div className="flex size-14 items-center justify-center rounded-lg ">
          <Image src="/logo.png" alt="Hizina Logo" height={40} width={40} />
        </div>
      </div>

      {/* Error code */}
      <p className="text-8xl font-bold leading-none tracking-tighter text-primary ">
        404
      </p>

      {/* Heading */}
      <h1 className="mt-4 text-2xl font-semibold text-foreground">
        Page not found
      </h1>

      {/* Description */}
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/80 ">
        {` The page you're looking for doesn't exist or has been moved.`}
      </p>

      {/* CTA */}
      <Link href="/">
        <Button
          className="mt-7 rounded-full !px-6 !h-11 group transition-all"
          variant={"outline"}
        >
          <Home className="mr-1 h-4 w-4" />
          Go to home page
        </Button>
      </Link>
    </main>
  );
}
