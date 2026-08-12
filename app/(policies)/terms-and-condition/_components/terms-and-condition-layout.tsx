import type { ReactNode } from "react";
import TermsSideNav from "./side-nav";
import Footer from "@/app/_components/footer";

type Props = {
  children: ReactNode;
};

const TermsAndconditionLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex gap-10 mt-15 ">
        {/* Sidebar */}
        <TermsSideNav />

        {/* Main content */}
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndconditionLayout;
