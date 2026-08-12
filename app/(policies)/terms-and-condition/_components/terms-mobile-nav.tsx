"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { terms_content } from "./terms-nav-content";

type Props = {
  open: boolean;
  setIsOpen: (value: boolean) => void;
};

const TermsMobileNav = ({ open, setIsOpen }: Props) => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return (
    <Sheet open={open} onOpenChange={setIsOpen}>
      <SheetContent className="overflow-y-auto px-4 pt-10">
        <h2 className="border-b pb-2 text-base font-semibold uppercase text-foreground">
          TABLE OF CONTENTS
        </h2>

        <section className="mt-2 flex flex-col pb-20">
          {terms_content.map((nav, index) => (
            <a
              key={nav.url}
              href={nav.url}
              className={cn(
                "flex gap-x-2 border-b py-4 text-sm font-normal text-foreground transition-all last:border-0 hover:text-primary",
                hash === nav.url && "text-primary",
              )}
              onClick={() => setIsOpen(false)}
            >
              <span>{index + 1}.</span>
              {nav.name}
            </a>
          ))}
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default TermsMobileNav;
