import { terms_section_routes } from "./terms-nav-content";

const UserRepresentations = () => {
  return (
    <section className="mt-15" id={terms_section_routes.section3}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        3. USER REPRESENTATIONS
      </h2>

      <section className="mt-2 txt space-y-2">
        <p>
          By using the Services, you represent and warrant that: (1) all
          registration information you submit will be true, accurate, current,
          and complete; (2) you will maintain the accuracy of such information
          and promptly update such registration information as necessary; (3)
          you have the legal capacity and you agree to comply with these Legal
          Terms; (4) you are not a minor in the jurisdiction in which you
          reside; (5) you will not access the Services through automated or
          non-human means, whether through a bot, script or otherwise; (6) you
          will not use the Services for any illegal or unauthorised purpose; and
          (7) your use of the Services will not violate any applicable law or
          regulation.
        </p>

        <p>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </p>
      </section>
    </section>
  );
};

export default UserRepresentations;
