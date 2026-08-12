import { section_routes } from "./sidebar-content";

const HowDoWeCollectInfo = () => {
  return (
    <section className="mt-15" id={section_routes.section10}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        10. DO WE COLLECT INFORMATION FROM MINORS?
      </h2>

      <p className="txt border-l-4 italic bg-card mt-2 px-2 py-1">
        <b>In Short: </b>
        We do not knowingly collect data from or market to children under 18
        years of age.
      </p>

      <section className="mt-5 space-y-2 txt">
        <p>
          We do not knowingly collect, solicit data from, or market to children
          under 18 years of age, nor do we knowingly sell such personal
          information. By using the Services, you represent that you are at
          least 18 or that you are the parent or guardian of such a minor and
          consent to such minor dependent’s use of the Services. If we learn
          that personal information from users less than 18 years of age has
          been collected, we will deactivate the account and take reasonable
          measures to promptly delete such data from our records. If you become
          aware of any data we may have collected from children under age 18,
          please contact us at __________.
        </p>
      </section>
    </section>
  );
};

export default HowDoWeCollectInfo;
