import { terms_section_routes } from "./terms-nav-content";

const PrivacyPolicySection = () => {
  return (
    <section className="mt-15" id={terms_section_routes.section15}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        15. PRIVACY POLICY
      </h2>

      <section className="mt-2 txt space-y-2">
        <p>
          We care about data privacy and security. By using the Services, you
          agree to be bound by our Privacy Policy posted on the Services, which
          is incorporated into these Legal Terms. Please be advised the Services
          are hosted in the United Kingdom and Nigeria. If you access the
          Services from any other region of the world with laws or other
          requirements governing personal data collection, use, or disclosure
          that differ from applicable laws in the United Kingdom and Nigeria,
          then through your continued use of the Services, you are transferring
          your data to the United Kingdom and Nigeria, and you expressly consent
          to have your data transferred to and processed in the United Kingdom
          and Nigeria.
        </p>
      </section>
    </section>
  );
};

export default PrivacyPolicySection;
