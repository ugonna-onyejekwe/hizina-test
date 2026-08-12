"use client";

import { useEffect, useState } from "react";
import { privacy_policy_content } from "./sidebar-content";
import { cn } from "@/lib/utils";

const SideNav = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <aside className="sticky top-[90px] h-screen w-[350px] min-w-[350px] overflow-y-auto bg-card/60 px-4 pt-5 custom_scrollbar max-lg:hidden">
      <h2 className="text-base font-semibold uppercase text-foreground">
        TABLE OF CONTENTS
      </h2>

      <section className="mt-5 flex flex-col gap-4 pb-20">
        {privacy_policy_content.map((nav, index) => (
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

export default SideNav;
