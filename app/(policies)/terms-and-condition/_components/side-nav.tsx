"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { terms_content } from "./terms-nav-content";

const TermsSideNav = () => {
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
    <aside className="bg-card/60 custom_scrollbar sticky top-[90px] h-screen w-[350px] min-w-[350px] overflow-y-auto px-4 pt-5 max-lg:hidden">
      <h2 className="text-foreground text-base font-semibold uppercase">
        TABLE OF CONTENTS
      </h2>

      <section className="mt-5 flex flex-col gap-4 pb-20">
        {terms_content.map((nav, index) => (
          <a
            key={nav.url}
            href={nav.url}
            className={cn(
              "flex gap-x-2 text-sm font-normal text-foreground transition-all hover:text-primary",
              hash === nav.url && "text-primary",
            )}
          >
            <span>{index + 1}.</span>
            {nav.name}
          </a>
        ))}
      </section>
    </aside>
  );
};

export default TermsSideNav;
