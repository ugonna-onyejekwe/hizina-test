"use client";

import Container from "@/components/ui/container";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TermsMobileNav from "./terms-mobile-nav";
import Link from "next/link";
import Image from "next/image";

const TermsNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" fixed top-0 left-0 right-0 border-b z-50">
        <Container className="flex items-center justify-between gap-4 py-4 bg-background">
          <Image
            src="/logo.png"
            className="h-10 w-10 "
            height={40}
            width={40}
            alt="logo"
          />

          <section className="flex items-center gap-2">
            <Link
              href={"/"}
              className="text-foreground hover:text-primary text-sm cursor-pointer "
            >
              Home
            </Link>
            <Button
              size={"sm"}
              variant={"outline"}
              onClick={() => setIsOpen(true)}
              className="bg-card cursor-pointer hidden max-lg:block"
            >
              <MenuIcon size={20} className="cursor-pointer" />
            </Button>{" "}
          </section>
        </Container>
      </div>

      <TermsMobileNav open={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default TermsNavbar;
