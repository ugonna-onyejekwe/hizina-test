import { section_routes } from "./sidebar-content";

const WhatIsOurStance = () => {
  return (
    <section className="mt-15" id={section_routes.section5}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
      </h2>

      <p className="txt italic  border-l-4 bg-card mt-2 px-2 py-1">
        <b>In Short: </b>
        We are not responsible for the safety of any information that you share
        with third parties that we may link to or who advertise on our Services,
        but are not affiliated with, our Services.
      </p>

      <section className="mt-5 txt space-y-2">
        <p>
          The Services, including our offer wall, may link to third-party
          websites, online services, or mobile applications and/or contain
          advertisements from third parties that are not affiliated with us and
          which may link to other websites, services, or applications.
          Accordingly, we do not make any guarantee regarding any such third
          parties, and we will not be liable for any loss or damage caused by
          the use of such third-party websites, services, or applications. The
          inclusion of a link towards a third-party website, service, or
          application does not imply an endorsement by us. We cannot guarantee
          the safety and privacy of data you provide to any third-party
          websites. Any data collected by third parties is not covered by this
          Privacy Notice. We are not responsible for the content or privacy and
          security practices and policies of any third parties, including other
          websites, services, or applications that may be linked to or from the
          Services. You should review the policies of such third parties and
          contact them directly to respond to your questions.
        </p>
      </section>
    </section>
  );
};

export default WhatIsOurStance;
