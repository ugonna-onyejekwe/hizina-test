import { terms_section_routes } from "./terms-nav-content";

const Software = () => {
  return (
    <section className="mt-15" id={terms_section_routes.section5}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        5. SOFTWARE
      </h2>

      <section className="mt-2 txt space-y-2">
        <p>
          {`We may include software for use in connection with our Services. If
          such software is accompanied by an end user licence agreement
          ('EULA'), the terms of the EULA will govern your use of the software.
          If such software is not accompanied by a EULA, then we grant to you a
          non-exclusive, revocable, personal, and non-transferable licence to
          use such software solely in connection with our services and in
          accordance with these Legal Terms. Any software and any related
          documentation is provided 'AS IS' without warranty of any kind, either
          express or implied, including, without limitation, the implied
          warranties of merchantability, fitness for a particular purpose, or
          non-infringement. You accept any and all risk arising out of use or
          performance of any software. You may not reproduce or redistribute any
          software except in accordance with the EULA or these Legal Terms.`}
        </p>
      </section>
    </section>
  );
};

export default Software;
