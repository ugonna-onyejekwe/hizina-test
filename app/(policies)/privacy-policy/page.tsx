import PrivacyPolicyLayout from "./_component/PrivacyPolicyLayout";
import WhatInfoDoWeCollect from "./_component/WhatInfoDoWeCollect";
import HowDoWeProccessYourInfo from "./_component/HowDoWeProccessYourInfo";
import WhatLegalBasesDoWeRelyOn from "./_component/WhatLegalBasesDoWeRelyOn";
import WhenAndWithWhomDoWeShareYourPersonalInfo from "./_component/WhenAndWithWhomDoWeShareYourPersonalInfo";
import WhatIsOurStance from "./_component/WhatIsOurStance";
import DoWeUseCookies from "./_component/DoWeUseCookies";
import HowDoWeHandleYourSocialLogin from "./_component/HowDoWeHandleYourSocialLogin";
import HowLongDoWeKeepYourInfo from "./_component/HowLongDoWeKeepYourInfo";
import HowDOWeKeepYourInfo from "./_component/HowDOWeKeepYourInfo";
import HowDoWeCollectInfo from "./_component/HowDoWeCollectInfo";
import WhatAreYourPrivacyRights from "./_component/WhatAreYourPrivacyRights";
import ControlsForDoNotTrackFeatures from "./_component/ControlsForDoNotTrackFeatures";
import DoWeMakeUpdatesToThisNotice from "./_component/DoWeMakeUpdatesToThisNotice";
import HowCanYouContactUsAboutThisNotice from "./_component/HowCanYouContactUsAboutThisNotice";
import HowCanYouReview from "./_component/HowCanYouReview";
import Summary from "./_component/summary";
import Container from "@/components/ui/container";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Hizina collects, uses, protects, and manages your personal information when you use our platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Container>
        <h1 className="font-extrabold uppercase  text-3xl md:text-4xl  lg:text-7xl  text_gradient  pt-5   w-fit">
          Privacy policy
        </h1>

        <p className="bg-card italic semibold mt-4 text-base md:text-lg text-foreground capitalize w-fit px-4 py-1">
          Last updated December 14, 2025
        </p>
        <Summary />

        <PrivacyPolicyLayout>
          <WhatInfoDoWeCollect />

          <HowDoWeProccessYourInfo />

          <WhatLegalBasesDoWeRelyOn />

          <WhenAndWithWhomDoWeShareYourPersonalInfo />

          <WhatIsOurStance />

          <DoWeUseCookies />

          <HowDoWeHandleYourSocialLogin />

          <HowLongDoWeKeepYourInfo />

          <HowDOWeKeepYourInfo />

          <HowDoWeCollectInfo />

          <WhatAreYourPrivacyRights />

          <ControlsForDoNotTrackFeatures />

          <DoWeMakeUpdatesToThisNotice />

          <HowCanYouContactUsAboutThisNotice />

          <HowCanYouReview />
        </PrivacyPolicyLayout>
      </Container>
    </>
  );
}
