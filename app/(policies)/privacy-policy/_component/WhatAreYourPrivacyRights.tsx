import Link from "next/link";
import { section_routes } from "./sidebar-content";

const WhatAreYourPrivacyRights = () => {
  return (
    <section className="mt-15" id={section_routes.section11}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        11. WHAT ARE YOUR PRIVACY RIGHTS?
      </h2>

      <p className="txt border-l-4 italic bg-card mt-2 px-2 py-1">
        <b>In Short: </b>
        In some regions, such as the European Economic Area (EEA), United
        Kingdom (UK), and Switzerland, you have rights that allow you greater
        access to and control over your personal information. You may review,
        change, or terminate your account at any time, depending on your
        country, province, or state of residence.
      </p>

      <section className="txt space-y-2 mt-5">
        <p>
          In some regions (like the EEA, UK, and Switzerland), you have certain
          rights under applicable data protection laws. These may include the
          right (i) to request access and obtain a copy of your personal
          information, (ii) to request rectification or erasure; (iii) to
          restrict the processing of your personal information; (iv) if
          applicable, to data portability; and (v) not to be subject to
          automated decision-making. In certain circumstances, you may also have
          the right to object to the processing of your personal information.
          You can make such a request by contacting us by using the contact
          details provided in the section{" "}
          <a className="text-primary " href={`#${section_routes.section14}`}>
            {`'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'`}
          </a>{" "}
          below.
        </p>

        <p>
          We will consider and act upon any request in accordance with
          applicable data protection laws.
        </p>

        <p>
          If you are located in the EEA or UK and you believe we are unlawfully
          processing your personal information, you also have the right to
          complain to your{" "}
          <Link
            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
            target="_blank"
            className="text-primary"
          >
            Member State data protection authority
          </Link>{" "}
          or{" "}
          <Link
            href={
              "https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
            }
            target="_blank"
            className="text-primary"
          >
            UK data protection authority
          </Link>
          .
        </p>

        <p>
          If you are located in Switzerland, you may contact the{" "}
          <Link
            className="text-primary"
            href={"https://www.edoeb.admin.ch/edoeb/en/home.html"}
            target="_blank"
          >
            Federal Data Protection and Information Commissioner.
          </Link>
        </p>

        <p>
          <b> Withdrawing your consent: </b> If we are relying on your consent
          to process your personal information, you have the right to withdraw
          your consent at any time. You can withdraw your consent at any time by
          contacting us by using the contact details provided in the section{" "}
          <a href={`#${section_routes.section14}`} className="text-primary">
            {`'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'`}
          </a>{" "}
          below or updating your preferences.
        </p>

        <p>
          However, please note that this will not affect the lawfulness of the
          processing before its withdrawal nor, will it affect the processing of
          your personal information conducted in reliance on lawful processing
          grounds other than consent.
        </p>

        <p>
          <b> Opting out of marketing and promotional communications: </b> You
          can unsubscribe from our marketing and promotional communications at
          any time by clicking on the unsubscribe link in the emails that we
          send, or by contacting us using the details provided in the section{" "}
          <Link href={"#"} className="text-primary">
            {`  'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'`}
          </Link>{" "}
          below. You will then be removed from the marketing lists. However, we
          may still communicate with you — for example, to send you
          service-related messages that are necessary for the administration and
          use of your account, to respond to service requests, or for other
          non-marketing purposes.
        </p>
      </section>

      <section className="space-y-2 mt-5">
        <h3 className="font-semibold text-base md:text-lg text-foreground ">
          Account Information
        </h3>

        <section className="txt space-y-2">
          <p>
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </p>

          <ul className=" space-y-2 list-disc  ml-5">
            <li>
              Log in to your account settings and update your user account. Upon
              your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our legal terms and/or comply with applicable legal
              requirements.
            </li>
          </ul>

          <p>
            <b>Cookies and similar technologies:</b> Most Web browsers are set
            to accept cookies by default. If you prefer, you can usually choose
            to set your browser to remove cookies and to reject cookies. If you
            choose to remove cookies or reject cookies, this could affect
            certain features or services of our Services. You may also{" "}
            <Link
              href={"http://www.aboutads.info/choices/"}
              target="_blnak"
              className="text-primary"
            >
              opt out of interest-based advertising by advertisers
            </Link>{" "}
            on our Services.
          </p>
        </section>
      </section>
    </section>
  );
};

export default WhatAreYourPrivacyRights;
