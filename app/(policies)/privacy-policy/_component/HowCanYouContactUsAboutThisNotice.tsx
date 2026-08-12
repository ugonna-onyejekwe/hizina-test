import { section_routes } from "./sidebar-content";

const HowCanYouContactUsAboutThisNotice = () => {
  return (
    <section className="mt-15" id={section_routes.section14}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
      </h2>

      <section className="mt-3 space-y-2 txt">
        <p>
          If you have questions or comments about this notice, you may contact
          us by post at:
        </p>

        <p>
          Hizina Limited
          <br /> __________
          <br /> __________
          <br /> United Kingdom
        </p>
      </section>
    </section>
  );
};

export default HowCanYouContactUsAboutThisNotice;
