import Link from "next/link";
import { section_routes } from "./sidebar-content";

const HowCanYouReview = () => {
  return (
    <section className="mt-15" id={section_routes.section15}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </h2>

      <section className="mt-3 space-y-2 txt">
        <p>
          Based on the applicable laws of your country, you may have the right
          to request access to the personal information we collect from you,
          details about how we have processed it, correct inaccuracies, or
          delete your personal information. You may also have the right to
          withdraw your consent to our processing of your personal information.
          These rights may be limited in some circumstances by applicable law.
          To request to review, update, or delete your personal information,
          please fill out and submit a{" "}
          <Link
            href={
              "https://app.termly.io/dsar/cf7502bb-dc4c-439d-9bbb-3c8acdafca61"
            }
            target="_blank"
            className="text-primary"
          >
            data subject access request.
          </Link>
        </p>
      </section>
    </section>
  );
};

export default HowCanYouReview;
