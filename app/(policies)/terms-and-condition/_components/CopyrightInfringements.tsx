import { terms_section_routes } from "./terms-nav-content";

const CopyrightInfringements = () => {
  return (
    <section className="mt-15" id={terms_section_routes.section16}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        16. COPYRIGHT INFRINGEMENTS
      </h2>

      <section className="mt-2 txt space-y-2">
        <p>
          {` We respect the intellectual property rights of others. If you believe
          that any material available on or through the Services infringes upon
          any copyright you own or control, please immediately notify us using
          the contact information provided below (a 'Notification'). A copy of
          your Notification will be sent to the person who posted or stored the
          material addressed in the Notification. Please be advised that
          pursuant to applicable law you may be held liable for damages if you
          make material misrepresentations in a Notification. Thus, if you are
          not sure that material located on or linked to by the Services
          infringes your copyright, you should consider first contacting an
          attorney.`}
        </p>
      </section>
    </section>
  );
};

export default CopyrightInfringements;
