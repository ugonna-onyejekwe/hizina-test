import { terms_section_routes } from "./terms-nav-content";

const ContactUs = () => {
  return (
    <section className="mt-15" id={terms_section_routes.section28}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        28. CONTACT US
      </h2>

      <section className="mt-2 space-y-2 txt">
        <p>
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact us
          at:
        </p>

        <p>
          Hizina Limited <br />
          ____________________
        </p>
      </section>
    </section>
  );
};

export default ContactUs;
