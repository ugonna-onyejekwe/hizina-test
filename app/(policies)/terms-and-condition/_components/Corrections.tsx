import { terms_section_routes } from "./terms-nav-content";

const Corrections = () => {
  return (
    <section className="mt-15" id={terms_section_routes.section21}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        21. CORRECTIONS
      </h2>

      <section className="mt-2 txt space-y-2">
        <p>
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </p>
      </section>
    </section>
  );
};

export default Corrections;
