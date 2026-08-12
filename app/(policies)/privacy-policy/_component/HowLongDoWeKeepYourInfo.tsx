import { section_routes } from "./sidebar-content";

const HowLongDoWeKeepYourInfo = () => {
  return (
    <section className="mt-15" id={section_routes.section8}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        8. HOW LONG DO WE KEEP YOUR INFORMATION?
      </h2>

      <p className="txt border-l-4 italic bg-card mt-2 px-2 py-1">
        <b>In Short: </b>
        We keep your information for as long as necessary to fulfil the purposes
        outlined in this Privacy Notice unless otherwise required by law.
      </p>

      <section className="mt-5 txt space-y-2">
        <p>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this Privacy Notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than the
          period of time in which users have an account with us.
        </p>

        <p>
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymisesuch
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>
      </section>
    </section>
  );
};

export default HowLongDoWeKeepYourInfo;
