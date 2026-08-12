"use client";

import Container from "@/components/ui/container";
import { footerNav } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="py-10">
      <Container className="flex gap-4">
        <Link href="/">
          <Image src="/logo.png" alt="Hizina logo" height={48} width={48} />
        </Link>

        <section className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {footerNav.map((nav) => (
            <Link
              href={nav.path}
              key={nav.name}
              className={cn(
                "cursor-pointer text-sm text-muted-foreground transition-all hover:text-primary",
                pathname === nav.path && "text-primary",
              )}
            >
              {nav.name}
            </Link>
          ))}
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
