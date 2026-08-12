import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const Container = ({ className, children }: Props) => {
  return (
    <div
      className={cn(className, "max-w-[80rem] w-[80%] mx-auto max-sm:w-[90%]")}
    >
      {children}
    </div>
  );
};

export default Container;
