import Link from "next/link";
import { section_routes } from "./sidebar-content";

const DoWeUseCookies = () => {
  return (
    <section className="mt-15" id={section_routes.section6}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
      </h2>

      <p className="txt border-l-4  italic bg-card mt-2 px-2 py-1">
        <b>In Short: </b>
        We may use cookies and other tracking technologies to collect and store
        your information.
      </p>

      <section className="mt-5 space-y-2 txt">
        <p>
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to gather information when you interact with our Services.
          Some online tracking technologies help us maintain the security of our
          Services and your account, prevent crashes, fix bugs, save your
          preferences, and assist with basic site functions.
        </p>

        <p>
          We also permit third parties and service providers to use online
          tracking technologies on our Services for analytics and advertising,
          including to help manage and display advertisements, to tailor
          advertisements to your interests, or to send abandoned shopping cart
          reminders (depending on your communication preferences). The third
          parties and service providers use their technology to provide
          advertising about products and services tailored to your interests
          which may appear either on our Services or on other websites.
        </p>

        <p>
          Specific information about how we use such technologies and how you
          can refuse certain cookies is set out in our Cookie Notice.
        </p>
      </section>

      <section className="space-y-2 mt-5">
        <h3 className="font-semibold text-base md:text-lg text-foreground ">
          Google Analytics
        </h3>

        <p className="txt">
          We may share your information with Google Analytics to track and
          analyse the use of the Services. The Google Analytics Advertising
          Features that we may use include: Remarketing with Google Analytics.
          To opt out of being tracked by Google Analytics across the Services,
          visit{" "}
          <Link
            href={"https://tools.google.com/dlpage/gaoptout"}
            target="_blank"
            className="text-primary"
          >
            https://tools.google.com/dlpage/gaoptout
          </Link>
          . You can opt out of Google Analytics Advertising Features through Ads
          Settings and{" "}
          <Link href={"https://adssettings.google.com/"} target="_blank">
            Ad Settings
          </Link>{" "}
          for mobile apps. Other opt out means include{" "}
          <Link
            href={"httpshttp://optout.networkadvertising.org"}
            target="_blank"
            className="text-primary"
          >
            httpshttp://optout.networkadvertising.org/
          </Link>{" "}
          and{" "}
          <Link
            href={"http://www.networkadvertising.org/mobile-choice"}
            target="_blank"
            className="text-primary"
          >
            http://www.networkadvertising.org/mobile-choice.
          </Link>{" "}
          For more information on the privacy practices of Google, please visit
          the{" "}
          <Link
            href={"https://policies.google.com/privacy"}
            target="_blank"
            className="text-primary"
          >
            Google Privacy & Terms page.{" "}
          </Link>
        </p>
      </section>
    </section>
  );
};

export default DoWeUseCookies;
