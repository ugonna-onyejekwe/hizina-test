import Link from "next/link";
import { section_routes } from "./sidebar-content";

const Summary = () => {
  return (
    <>
      <section className="mt-15 space-y-4">
        <p className="txt">
          {`This Privacy Notice for Hizina Limited (doing business as Hizina)
          ('we', 'us', or 'our'), describes how and why we might access,
          collect, store, use, and/or share ('process') your personal
          information when you use our services ('Services'), including when
          you:`}
        </p>

        <ul className=" space-y-3 list-disc txt ml-5">
          <li>
            Visit our website at{" "}
            <Link
              target="_blank"
              href={"https://hizina.com"}
              className="text-primary"
            >
              https://hizina.com{" "}
            </Link>{" "}
            or any website of ours that links to this Privacy Notice
          </li>

          <li>
            Download and use our mobile application (Hizina), or any other
            application of ours that links to this Privacy Notice
          </li>

          <li>
            Engage with us in other related ways, including any marketing or
            events
          </li>
        </ul>

        <p className="txt ">
          <b className="text-foreground"> Questions or concerns? </b> Reading
          this Privacy Notice will help you understand your privacy rights and
          choices. We are responsible for making decisions about how your
          personal information is processed. If you do not agree with our
          policies and practices, please do not use our Services.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <div>
          <h2 className="text-lg md:text-xl text-foreground   font-semibold">
            Summary of Key points
          </h2>

          <p className="txt italic mt-2 bg-card border-l-4 pl-3 py-1 pr-1">
            This summary provides key points from our Privacy Notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{" "}
            <a className="text-primary" href={`#${section_routes.section1}`}>
              table of contents
            </a>{" "}
            below to find the section you are looking for.
          </p>
        </div>

        <p className="txt">
          <b className="text-foreground">
            {" "}
            What personal information do we process?
          </b>{" "}
          When you visit, use, or navigate our Services, we may process personal
          information depending on how you interact with us and the Services,
          the choices you make, and the products and features you use.{" "}
          <Link
            href={
              "https://app.termly.io/policy-viewer/policy.html?policyUUID=cf7502bb-dc4c-439d-9bbb-3c8acdafca61"
            }
            target="_blank"
            className="text-primary"
          >
            Learn more about personal information you disclose to us.
          </Link>
        </p>

        <p className="txt">
          {` ${(
            <b className="text-foreground">
              {" "}
              Do we process any sensitive personal information?
            </b>
          )}
          Some of the information may be considered 'special' or 'sensitive' in
          certain jurisdictions, for example your racial or ethnic origins,
          sexual orientation, and religious beliefs. We do not process sensitive
          personal information.`}
        </p>

        <p className="txt">
          <b className="text-foreground">
            Do we collect any information from third parties?
          </b>{" "}
          We do not collect any information from third parties.
        </p>

        <p className="txt">
          <b className="text-foreground">
            {" "}
            How do we process your information?
          </b>{" "}
          We process your information to provide, improve, and administer our
          Services, communicate with you, for security and fraud prevention, and
          to comply with law. We may also process your information for other
          purposes with your consent. We process your information only when we
          have a valid legal reason to do so.{" "}
          <Link
            href={
              "https://app.termly.io/policy-viewer/policy.html?policyUUID=cf7502bb-dc4c-439d-9bbb-3c8acdafca61"
            }
            className="text-primary"
          >
            Learn more about how we process your information.
          </Link>
        </p>

        <p className="txt">
          <b className="text-foreground">
            In what situations and with which parties do we share personal
            information?{" "}
          </b>
          We may share information in specific situations and with specific
          third parties.{" "}
          <Link
            href="https://app.termly.io/policy-viewer/policy.html?policyUUID=cf7502bb-dc4c-439d-9bbb-3c8acdafca61"
            className="text-primary"
          >
            Learn more about when and with whom we share your personal
            information.
          </Link>
        </p>

        <p className="txt">
          <b className="text-foreground">
            {" "}
            How do we keep your information safe?{" "}
          </b>
          We have adequate organisational and technical processes and procedures
          in place to protect your personal information. However, no electronic
          transmission over the internet or information storage technology can
          be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals, or other unauthorised third parties will
          not be able to defeat our security and improperly collect, access,
          steal, or modify your information.{" "}
          <Link
            href={
              "https://app.termly.io/policy-viewer/policy.html?policyUUID=cf7502bb-dc4c-439d-9bbb-3c8acdafca61"
            }
            target="_blank"
          >
            Learn more about how we keep your information safe.
          </Link>
        </p>

        <p className="txt">
          <b className="text-foreground"> What are your rights? </b> Depending
          on where you are located geographically, the applicable privacy law
          may mean you have certain rights regarding your personal information.{" "}
          <Link
            href={
              "https://app.termly.io/policy-viewer/policy.html?policyUUID=cf7502bb-dc4c-439d-9bbb-3c8acdafca61"
            }
            target="_blank"
            className="text-primary"
          >
            Learn more about your privacy rights.
          </Link>
        </p>

        <p className="txt">
          <b className="text-foreground"> How do you exercise your rights? </b>{" "}
          The easiest way to exercise your rights is by submitting a{" "}
          <Link
            href="https://app.termly.io/dsar/cf7502bb-dc4c-439d-9bbb-3c8acdafca61"
            target="_blank"
            className="text-primary"
          >
            data subject access request
          </Link>
          , or by contacting us. We will consider and act upon any request in
          accordance with applicable data protection laws.
        </p>

        <p className="txt">
          <b className="text-foreground">
            Want to learn more about what we do with any information we
            collect?{" "}
          </b>
          <a href={`#${section_routes.section1}`} className="text-primary">
            {" "}
            Review the Privacy Notice in full.
          </a>
        </p>
      </section>
    </>
  );
};

export default Summary;
