import { section_routes } from "./sidebar-content";

const DoWeMakeUpdatesToThisNotice = () => {
  return (
    <section className="mt-15" id={section_routes.section13}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        13. DO WE MAKE UPDATES TO THIS NOTICE?
      </h2>

      <p className="txt border-l-4 italic bg-card mt-2 px-2 py-1">
        <b>In Short: </b>
        Yes, we will update this notice as necessary to stay compliant with
        relevant laws
      </p>

      <section className="mt-5 space-y-2 txt">
        <p>
          {`We may update this Privacy Notice from time to time. The updated
          version will be indicated by an updated 'Revised' date at the top of
          this Privacy Notice. If we make material changes to this Privacy
          Notice, we may notify you either by prominently posting a notice of
          such changes or by directly sending you a notification. We encourage
          you to review this Privacy Notice frequently to be informed of how we
          are protecting your information.`}
        </p>
      </section>
    </section>
  );
};

export default DoWeMakeUpdatesToThisNotice;
