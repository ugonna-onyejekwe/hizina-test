import Link from "next/link";

const AgreementToOurLegalTerms = () => {
  return (
    <section className="mt-15">
      <h2 className="text-lg md:text-xl text-foreground    font-semibold">
        AGREEMENT TO OUR LEGAL TERMS
      </h2>

      <section className="mt-5 txt space-y-4">
        <p>
          {`We are Hizina Limited, doing business as ‘Hizina’ ('Company', 'we',
          'us', or 'our').`}
        </p>

        <p>
          {`   We operate the website 
         ${(
           <Link href={"https://hizina.com/"} className="text-primary">
             https://hizina.com
           </Link>
         )}
          (the 'Site'), the mobile application Hizina (the 'App'), as well as
          any other related products and services that refer or link to these
          legal terms (the 'Legal Terms') (collectively, the 'Services').`}
        </p>

        <p>
          You can contact us by email at{" "}
          <a href="malto:noreply@hizina.com" className="text-primary">
            noreply@hizina.com
          </a>
        </p>

        <p>
          {`   These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity ('you'), and Hizina,
          concerning your access to and use of the Services. You agree that by
          accessing the Services, you have read, understood, and agreed to be
          bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF
          THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
          SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.`}
        </p>

        <p>
          {` We will provide you with prior notice of any scheduled changes to the
          Services you are using. Changes to these Legal Terms will become
          effective seven (7) days after the notice is given, except if the
          changes apply to new functionality, and security updates, in which
          case the changes will be effective immediately. By continuing to use
          the Services after the effective date of any changes, you agree to be
          bound by the modified terms. If you disagree with such changes, you
          may terminate Services as per the section '
         ${(
           <Link
             href={
               "https://app.termly.io/policy-viewer/policy.html?policyUUID=259dc410-00a9-4cf6-9c6e-c130b506117e"
             }
             target="_blank"
           >
             TERM AND TERMINATION
           </Link>
         )}
          '.`}
        </p>

        <p>
          The Services are intended for users who are at least 18 years old and
          above. Persons under the age of 18 are not permitted to use or
          register for the Services.
        </p>

        <p>
          We recommend that you print a copy of these Legal Terms for your
          records.
        </p>
      </section>
    </section>
  );
};

export default AgreementToOurLegalTerms;
