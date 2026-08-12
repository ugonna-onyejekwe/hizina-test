import { section_routes } from "./sidebar-content";

const HowDOWeKeepYourInfo = () => {
  return (
    <section className="mt-15" id={section_routes.section9}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        9. HOW DO WE KEEP YOUR INFORMATION SAFE?
      </h2>

      <p className="txt border-l-4 italic bg-card mt-2 px-2 py-1">
        <b>In Short: </b> We aim to protect your personal information through a
        system of organisational and technical security measures.
      </p>

      <section className="mt-5 space-y-2 txt">
        <p>
          We have implemented appropriate and reasonable technical and
          organisational security measures designed to protect the security of
          any personal information we process. However, despite our safeguards
          and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorised third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information. Although we will do our best to protect your
          personal information, transmission of personal information to and from
          our Services is at your own risk. You should only access the Services
          within a secure environment.
        </p>
      </section>
    </section>
  );
};

export default HowDOWeKeepYourInfo;
