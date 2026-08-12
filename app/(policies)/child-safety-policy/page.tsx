import type { Metadata } from "next";
import Container from "@/components/ui/container";
import ProhibitedContentAndBehavior from "./_components/prohibition-content-behaviour";
import ModerationAndEnforcement from "./_components/moderation-and-enforcement";
import InAppReportingAndFeedback from "./_components/in-appreprorting-and-feedback";
import LegalCompliance from "./_components/legal-compliance";
import PolicyUpdates from "./_components/policy-updates";

export const metadata: Metadata = {
  title: "Child Safety Policy",
  description:
    "Learn about Hizina's commitment to protecting children and maintaining a safe environment across our platform.",
};

export default function ChildSafetyPolicyPage() {
  return (
    <>
      <Container className="pt-20">
        <h1 className="font-extrabold text-3xl md:text-4xl lg:text-7xl text_gradient capitalize pt-5 w-fit">
          CHILD SAFETY STANDARDS POLICY
        </h1>

        <p className="bg-card italic semibold mt-4 text-base md:text-lg text-foreground capitalize w-fit px-4 py-1">
          Effective Date: May 2026
        </p>

        <section className="txt mt-10 space-y-2">
          <p>
            At Hizina, we are committed to maintaining a safe and respectful
            platform for all users. We have a strict zero-tolerance policy
            against Child Sexual Abuse and Exploitation (CSAE) and Child Sexual
            Abuse Material (CSAM). These standards apply to all users, content,
            communications, and interactions across the Hizina platform.
          </p>
        </section>

        <ProhibitedContentAndBehavior />
        <ModerationAndEnforcement />
        <InAppReportingAndFeedback />
        <LegalCompliance />
        <PolicyUpdates />
      </Container>
    </>
  );
}
