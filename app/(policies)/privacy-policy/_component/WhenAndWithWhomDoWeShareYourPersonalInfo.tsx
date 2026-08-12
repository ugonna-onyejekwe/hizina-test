import { section_routes } from "./sidebar-content";

const WhenAndWithWhomDoWeShareYourPersonalInfo = () => {
  return (
    <section className="mt-15" id={section_routes.section4}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
      </h2>

      <p className="txt italic border-l-4 bg-card mt-2 px-2 py-1">
        <b>In Short: </b>
        We may share information in specific situations described in this
        section and/or with the following third parties.
      </p>

      <section className="space-y-2 mt-5 txt">
        <p>
          We may need to share your personal information in the following
          situations:
        </p>

        <ul className=" space-y-2 list-disc ml-5">
          <li>
            <b>Business Transfers.</b> We may share or transfer your information
            in connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </li>

          <li>
            {` ${(<b>When we use Google Maps Platform APIs.</b>)} We may share your
            information with certain Google Maps Platform APIs (e.g. Google Maps
            API, Places API). Google Maps uses GPS, Wi-Fi, and cell towers to
            estimate your location. GPS is accurate to about 20 meters, while
            Wi-Fi and cell towers help improve accuracy when GPS signals are
            weak, like indoors. This data helps Google Maps provide directions,
            but it is not always perfectly precise. We obtain and store on your
            device ('cache') your location. You may revoke your consent anytime
            by contacting us at the contact details provided at the end of this
            document.`}
          </li>

          <li>
            <b>Affiliates.</b> We may share your information with our
            affiliates, in which case we will require those affiliates to honour
            this Privacy Notice. Affiliates include our parent company and any
            subsidiaries, joint venture partners, or other companies that we
            control or that are under common control with us.
          </li>

          <li>
            <b>Business Partners.</b> We may share your information with our
            business partners to offer you certain products, services, or
            promotions.
          </li>

          <li>
            <b>Other Users.</b> When you share personal information (for
            example, by posting comments, contributions, or other content to the
            Services) or otherwise interact with public areas of the Services,
            such personal information may be viewed by all users and may be
            publicly made available outside the Services in perpetuity. If you
            interact with other users of our Services and register for our
            Services through a social network (such as Facebook), your contacts
            on the social network will see your name, profile photo, and
            descriptions of your activity. Similarly, other users will be able
            to view descriptions of your activity, communicate with you within
            our Services, and view your profile.
          </li>

          <li>
            {`${(<b>Offer Wall.</b>)} Our application(s) may display a third-party
            hosted 'offer wall'. Such an offer wall allows third-party
            advertisers to offer virtual currency, gifts, or other items to
            users in return for the acceptance and completion of an
            advertisement offer. Such an offer wall may appear in our
            application(s) and be displayed to you based on certain data, such
            as your geographic area or demographic information. When you click
            on an offer wall, you will be brought to an external website
            belonging to other persons and will leave our application(s). A
            unique identifier, such as your user ID, will be shared with the
            offer wall provider in order to prevent fraud and properly credit
            your account with the relevant reward.`}
          </li>
        </ul>
      </section>
    </section>
  );
};

export default WhenAndWithWhomDoWeShareYourPersonalInfo;
