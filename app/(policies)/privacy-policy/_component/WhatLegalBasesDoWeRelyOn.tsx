import Link from "next/link";
import { section_routes } from "./sidebar-content";

const WhatLegalBasesDoWeRelyOn = () => {
  return (
    <section className="mt-15" id={section_routes.section3}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
      </h2>

      <p className="txt italic border-l-4 bg-card mt-2 px-2 py-1">
        <b>In Short: </b>
        We only process your personal information when we believe it is
        necessary and we have a valid legal reason (i.e. legal basis) to do so
        under applicable law, like with your consent, to comply with laws, to
        provide you with services to enter into or fulfilour contractual
        obligations, to protect your rights, or to fulfil our legitimate
        business interests.
      </p>

      <section className="txt mt-5 space-y-2">
        <p>
          The General Data Protection Regulation (GDPR) and UK GDPR require us
          to explain the valid legal bases we rely on in order to process your
          personal information. As such, we may rely on the following legal
          bases to process your personal information:
        </p>

        <ul className=" space-y-2 list-disc ml-5">
          <li>
            <b>Consent. </b> We may process your information if you have given
            us permission (i.e. consent) to use your personal information for a
            specific purpose. You can withdraw your consent at any time.{" "}
            <Link
              href={
                "https://app.termly.io/policy-viewer/policy.html?policyUUID=cf7502bb-dc4c-439d-9bbb-3c8acdafca61"
              }
              target="_blank"
              className="text-primary"
            >
              Learn more about withdrawing your consent.
            </Link>
          </li>

          <li>
            <b>Performance of a Contract.</b> We may process your personal
            information when we believe it is necessary to fulfil our
            contractual obligations to you, including providing our Services or
            at your request prior to entering into a contract with you.
          </li>

          <li>
            <b>Legitimate Interests. </b> We may process your information when
            we believe it is reasonably necessary to achieve our legitimate
            business interests and those interests do not outweigh your
            interests and fundamental rights and freedoms. For example, we may
            process your personal information for some of the purposes described
            in order to:
          </li>

          <ul className=" space-y-2 list-disc ml-5">
            <li>
              Send users information about special offers and discounts on our
              products and services
            </li>

            <li>
              Develop and display personalised and relevant advertising content
              for our users
            </li>

            <li>
              Analyse how our Services are used so we can improve them to engage
              and retain users
            </li>

            <li>Support our marketing activities</li>

            <li>Diagnose problems and/or prevent fraudulent activities</li>

            <li>
              Understand how our users use our products and services so we can
              improve user experience
            </li>
          </ul>

          <li>
            <b>Legal Obligations. </b> We may process your information where we
            believe it is necessary for compliance with our legal obligations,
            such as to cooperate with a law enforcement body or regulatory
            agency, exercise or defend our legal rights, or disclose your
            information as evidence in litigation in which we are involved.
          </li>

          <li>
            <b>Vital Interests.</b> We may process your information where we
            believe it is necessary to protect your vital interests or the vital
            interests of a third party, such as situations involving potential
            threats to the safety of any person.
          </li>
        </ul>
      </section>
    </section>
  );
};

export default WhatLegalBasesDoWeRelyOn;
