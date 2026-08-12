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
    <div>
      <Container>
        <div
        //  type="bottom"
        >
          <h1 className="text-center font-extrabold text-2xl md:text-4xl lg:text-4xl  text_gradient">
            Message with peace of mind
          </h1>
        </div>

        <div
        // type="bottom"
        //  delay={0.3}
        >
          <section className="mt-4 rounded-lg overflow-hidden size-fit">
            <Image
              src="/assets/privacy-hero.jpg"
              alt="privacy-hero"
              className="size-full"
              fill
            />
          </section>
        </div>

        <div
        // type="bottom" delay={0.3}
        >
          <h1 className="text-center font-extrabold text-2xl md:text-4xl lg:text-4xl  text_gradient mt-5">
            Safely and securely connect with your friends, family and the
            communities that matter to you
          </h1>
        </div>

        <div
        //  type="bottom"
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
