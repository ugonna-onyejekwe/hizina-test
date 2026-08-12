import type { Metadata } from "next";
import Container from "@/components/ui/container";
import MoreInfoBoxes from "./components/more-info-box";
import PreventingHarmSection from "./components/PreventingHarmSection";
import AppControlSection from "./components/AppControlSection";
import ReportingSection from "./components/ReportingSection";
import PersonalMessageSection from "./components/PersonalMessageSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy and Safety",
  description:
    "Learn how Hizina protects your privacy, keeps your information secure, and helps create a safe environment for everyone.",
};

export default function PrivacySafetyPage() {
  return (
    <div className="mt-10">
      <Container>
        <div
        //  type="bottom"
        >
          <h1 className="text-center font-extrabold text-2xl md:text-4xl lg:text-4xl  text_gradient">
            Message with peace of mind
          </h1>
        </div>

        <section className="relative mt-5 w-full mx-auto max-w-[80rem] overflow-hidden rounded-lg aspect-[16/6]">
          <Image
            src="/assets/privacy-hero.jpg"
            alt="Privacy"
            fill
            className="object-cover object-top"
          />
        </section>

        <div
          // type="bottom" delay={0.3}
          className="max-w-4xl mx-auto mt-15 lg:mt-20 "
        >
          <h1 className="text-center font-extrabold text-2xl md:text-4xl lg:text-4xl  text_gradient mt-5">
            Safely and securely connect with your friends, family and the
            communities that matter to you
          </h1>
        </div>

        <div
          //  type="bottom"
          className="mt-10 lg:mt-15"
        >
          <MoreInfoBoxes />
        </div>

        <PreventingHarmSection />

        <AppControlSection />

        <ReportingSection />

        <PersonalMessageSection />
      </Container>
    </div>
  );
}
