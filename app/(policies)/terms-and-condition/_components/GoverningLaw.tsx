import { terms_section_routes } from "./terms-nav-content";

const GoverningLaw = () => {
  return (
    <section className="mt-15" id={terms_section_routes.section19}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        19. GOVERNING LAW
      </h2>

      <section className="mt-2 txt space-y-2 ">
        <p>
          These Legal Terms are governed by and interpreted following the laws
          of the United Kingdom, and the use of the United Nations Convention of
          Contracts for the International Sales of Goods is expressly excluded.
          If your habitual residence is in the EU, and you are a consumer, you
          additionally possess the protection provided to you by obligatory
          provisions of the law in your country to residence. Hizina and
          yourself both agree to submit to the non-exclusive jurisdiction of the
          courts of london, which means that you may make a claim to defend your
          consumer protection rights in regards to these Legal Terms in the
          United Kingdom, or in the EU country in which you reside.
        </p>
      </section>
    </section>
  );
};

export default GoverningLaw;
