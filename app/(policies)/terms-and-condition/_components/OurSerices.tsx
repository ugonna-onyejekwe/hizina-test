import { terms_section_routes } from "./terms-nav-content";

const OurSerices = () => {
  return (
    <section id={terms_section_routes.section1}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        1. OUR SERVICES
      </h2>

      <section className="mt-2 txt space-y-2 ">
        <p>
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject us to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.
        </p>
      </section>
    </section>
  );
};

export default OurSerices;
