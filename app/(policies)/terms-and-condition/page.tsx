import type { Metadata } from "next";
import Container from "@/components/ui/container";
import AgreementToOurLegalTerms from "./_components/AgreementToOurLegalTerms";
import TermsNavbar from "./_components/terms-navbar";
import TermsAndconditionLayout from "./_components/terms-and-condition-layout";
import OurSerices from "./_components/OurSerices";
import IntellectualPropertyRights from "./_components/IntellectualPropertyRights";
import UserRepresentations from "./_components/UserRepresentations";
import UserRegistrations from "./_components/UserRegistrations";
import Software from "./_components/Software";
import ProhibitedActivities from "./_components/ProhibitedActivities";
import UserGeneratedContributions from "./_components/UserGeneratedContributions";
import ContributionLicence from "./_components/ContributionLicence";
import GuidelinesForReviews from "./_components/GuidelinesForReviews";
import MobileApplicationLicence from "./_components/MobileApplicationLicence";
import SocialMedia from "./_components/SocialMedia";
import ThirdPartyWebsiteAndContent from "./_components/ThirdPartyWebsiteAndContent";
import Advertisters from "./_components/Advertisters";
import ServicesManagement from "./_components/ServicesManagement";
import CopyrightInfringements from "./_components/CopyrightInfringements";
import TermAndTermination from "./_components/TermAndTermination";
import ModificationsAndInterruptions from "./_components/ModificationsAndInterruptions";
import GoverningLaw from "./_components/GoverningLaw";
import DisputeResolution from "./_components/DisputeResolution";
import Corrections from "./_components/Corrections";
import Disclaimer from "./_components/Disclaimer";
import LimitationsOfLiability from "./_components/LimitationsOfLiability";
import Indemnification from "./_components/Indemnification";
import UserData from "./_components/UserData";
import ElectronicCommunications from "./_components/ElectronicCommunications";
import Miscellaneous from "./_components/Miscellaneous";
import ContactUs from "./_components/ContactUs";
import PrivacyPolicySection from "./_components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the terms and conditions that govern your use of Hizina and its social, community, and commerce services.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <TermsNavbar />
      <Container className="pt-20">
        <h1 className="font-extrabold uppercase  text-3xl md:text-4xl  lg:text-7xl  text_gradient  pt-5   w-fit">
          TERMS AND CONDITIONS
        </h1>

        <p className="bg-card italic semibold mt-4 text-base md:text-lg text-foreground capitalize w-fit px-4 py-1">
          Last updated December 14, 2025
        </p>

        <AgreementToOurLegalTerms />

        <TermsAndconditionLayout>
          <OurSerices />

          <IntellectualPropertyRights />

          <UserRepresentations />

          <UserRegistrations />

          <Software />

          <ProhibitedActivities />

          <UserGeneratedContributions />

          <ContributionLicence />

          <GuidelinesForReviews />

          <MobileApplicationLicence />

          <SocialMedia />

          <ThirdPartyWebsiteAndContent />

          <Advertisters />

          <ServicesManagement />

          <PrivacyPolicySection />

          <CopyrightInfringements />

          <TermAndTermination />

          <ModificationsAndInterruptions />

          <GoverningLaw />

          <DisputeResolution />

          <Corrections />

          <Disclaimer />

          <LimitationsOfLiability />

          <Indemnification />

          <UserData />

          <ElectronicCommunications />

          <Miscellaneous />

          <ContactUs />
        </TermsAndconditionLayout>
      </Container>
    </>
  );
}
