import type { ReactNode } from "react";
import SideNav from "./SideNav";

type Props = {
  children: ReactNode;
};

const PrivacyPolicyLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex items-start  gap-10 mt-15 ">
        {/* Sidebar */}
        <SideNav />

        {/* Main content */}
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
};

export default PrivacyPolicyLayout;
