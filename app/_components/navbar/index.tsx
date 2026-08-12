"use client";

import Container from "@/components/ui/container";
import { useState } from "react";
import MobileMenu from "./_components/MobileMenu";
import { navlist } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 bg-background shadow z-50 ">
      <Container className="py-4 flex items-center justify-between gap-4 ">
        <Link href={"/"} className="size-12">
          <Image
            src="/logo.png"
            alt="logo"
            className="size-12"
            height={48}
            width={48}
          />
        </Link>

        <section className="flex items-center gap-4 max-md:hidden">
          {navlist.map((nav) => (
            <Link
              href={nav.path}
              key={nav.name}
              className={cn(
                "text-sm  text-muted-foreground hover:text-primary transition-all cursor-pointer",
                pathname === nav.path && "text-primary",
              )}
            >
              {nav.name}
            </Link>
          ))}
        </section>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </div>
  );
};

export default Navbar;
