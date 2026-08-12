import type { Metadata } from "next";
import Container from "@/components/ui/container";
import WhatAreCookies from "./_components/WhatAreCookies";
import WhyDoWeUseCookies from "./_components/WhyDoWeUseCookies";
import HowCanIControlCookies from "./_components/HowCanIControlCookies";
import HowCanIControlCookiesOnMyBrowser from "./_components/HowCanIControlCookiesOnMyBrowser";
import WhatAboutOtherTrackingTech from "./_components/WhatAboutOtherTrackingTech";
import DoYouUseFlashCookies from "./_components/DoYouUseFlashCookies";
import DoYouServeTargetedAdvertising from "./_components/DoYouServeTargetedAdvertising";
import HowOftenWillYouUpdateThisCookiesPolicy from "./_components/HowOftenWillYouUpdateThisCookiesPolicy";
import WhereCaniGetFurtherInfo from "./_components/WhereCaniGetFurtherInfo";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import CookiePolicyNavbar from "./_components/cookie-policy-nav";
import Footer from "@/app/_components/footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Learn how Hizina uses cookies and similar technologies to provide, improve, and personalize your experience on our platform.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <CookiePolicyNavbar />

      <Container className="pt-20">
        <h1 className="font-extrabold  text-3xl md:text-4xl  lg:text-7xl  text_gradient capitalize pt-5   w-fit">
          COOKIE POLICY
        </h1>

        <p className="bg-card italic semibold mt-4 text-base md:text-lg text-foreground capitalize w-fit px-4 py-1">
          Last updated December 14, 2025
        </p>

        <section className="txt mt-10 space-y-2">
          <p>
            {`  This Cookie Policy explains how Hizina Limited ("Company," "we,"
            "us," and "our") uses cookies and similar technologies to recognize
            you when you visit our website at
     ${(
       <Link href={SITE_URL} className="text-primary" target="_blank">
         https://hizina.com
       </Link>
     )}
            ("Website"). It explains what these technologies are and why we use
            them, as well as your rights to control our use of them.`}
          </p>

          <p>
            In some cases we may use cookies to collect personal information, or
            that becomes personal information if we combine it with other
            information.
          </p>
        </section>

        <WhatAreCookies />
        <WhyDoWeUseCookies />
        <HowCanIControlCookies />
        <HowCanIControlCookiesOnMyBrowser />
        <WhatAboutOtherTrackingTech />
        <DoYouUseFlashCookies />
        <DoYouServeTargetedAdvertising />
        <HowOftenWillYouUpdateThisCookiesPolicy />
        <WhereCaniGetFurtherInfo />
      </Container>

      <Footer />
    </>
  );
}
