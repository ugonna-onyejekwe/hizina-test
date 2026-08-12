import Link from "next/link";
import { section_routes } from "./sidebar-content";

const WhatInfoDoWeCollect = () => {
  return (
    <section id={section_routes.section1}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        1. WHAT INFORMATION DO WE COLLECT?
      </h2>

      <section className="mt-5">
        <h3 className="font-semibold text-base md:text-lg text-foreground ">
          Personal information you disclose to us
        </h3>

        <p className="txt italic border-l-4 bg-card mt-2 px-2 py-1">
          <b>In Short: </b>
          We collect personal information that you provide to us.
        </p>
      </section>

      <section className="txt space-y-2 mt-5 ">
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you
          contact us.
        </p>

        <p>
          <b>Personal Information Provided by You.</b> The personal information
          that we collect depends on the context of your interactions with us
          and the Services, the choices you make, and the products and features
          you use. The personal information we collect may include the
          following:
        </p>

        <ul className=" space-y-2 list-disc ml-5">
          <li>names</li>

          <li>phone numbers</li>

          <li>email addresses</li>

          <li>usernames</li>

          <li>passwords</li>

          <li>contact preferences</li>

          <li>contact or authentication data</li>

          <li>billing addresses</li>

          <li>debit/credit card numbers</li>

          <li>mailing addresses</li>
        </ul>

        <p>
          <b>Sensitive Information. </b> We do not process sensitive
          information.
        </p>
      </section>

      <section className="txt space-y-2 mt-5">
        <p>
          <b> Social Media Login Data. </b>
          We may provide you with the option to register with us using your
          existing social media account details, like your Facebook, X, or other
          social media account. If you choose to register in this way, we will
          collect certain profile information about you from the social media
          provider, as described in the section called{" "}
          <a
            href={`#${section_routes.section7}`}
            className="text-primary font-medium"
          >
            {" "}
            {`    'HOW DO WE HANDLE YOUR SOCIAL LOGINS?'`}
          </a>{" "}
          below.
        </p>

        <p>
          <b>Application Data.</b> If you use our application(s), we also may
          collect the following information if you choose to provide us with
          access or permission:
        </p>

        <ul className=" space-y-2 list-disc ml-5">
          <li>
            {`  Geolocation Information. We may request access or permission to
            track location-based information from your mobile device, either
            continuously or while you are using our mobile application(s), to
            provide certain location-based services. If you wish to change our
            access or permissions, you may do so in your device's settings.`}
          </li>

          <li>
            {`     Mobile Device Access. We may request access or permission to certain
            features from your mobile device, including your mobile device's
            social media accounts, and other features. If you wish to change our
            access or permissions, you may do so in your device's settings.`}
          </li>

          <li>
            Mobile Device Data. We automatically collect device information
            (such as your mobile device ID, model, and manufacturer), operating
            system, version information and system configuration information,
            device and application identification numbers, browser type and
            version, hardware model Internet service provider and/or mobile
            carrier, and Internet Protocol (IP) address (or proxy server). If
            you are using our application(s), we may also collect information
            about the phone network associated with your mobile device, your
            mobile device’s operating system or platform, the type of mobile
            device you use, your mobile device’s unique device ID, and
            information about the features of our application(s) you accessed.
          </li>

          <li>
            {` Push Notifications. We may request to send you push notifications
            regarding your account or certain features of the application(s). If
            you wish to opt out from receiving these types of communications,
            you may turn them off in your device's settings. This information is
            primarily needed to maintain the security and operation of our
            application(s), for troubleshooting, and for our internal analytics
            and reporting purposes.`}
          </li>
        </ul>
        <p>
          All personal information that you provide to us must be true,
          complete, and accurate, and you must notify us of any changes to such
          personal information.
        </p>
      </section>

      <section className="mt-5">
        <h3 className="font-semibold text-base md:text-lg text-foreground ">
          Information automatically collected
        </h3>

        <p className="txt italic bg-card mt-2 px-2 border-l-4 py-1">
          <b>In Short: </b> Some information — such as your Internet Protocol
          (IP) address and/or browser and device characteristics — is collected
          automatically when you visit our Services.
        </p>

        <section className="txt space-y-2 mt-5">
          <p>
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity (like your name or contact information) but may
            include device and usage information, such as your IP address,
            browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location,
            information about how and when you use our Services, and other
            technical information. This information is primarily needed to
            maintain the security and operation of our Services, and for our
            internal analytics and reporting purposes.
          </p>

          <p>
            Like many businesses, we also collect information through cookies
            and similar technologies.
          </p>

          <p>The information we collect includes:</p>

          <ul className=" space-y-2 list-disc ml-5">
            <li>
              {`      Log and Usage Data. Log and usage data is service-related,
              diagnostic, usage, and performance information our servers
              automatically collect when you access or use our Services and
              which we record in log files. Depending on how you interact with
              us, this log data may include your IP address, device information,
              browser type, and settings and information about your activity in
              the Services (such as the date/time stamps associated with your
              usage, pages and files viewed, searches, and other actions you
              take such as which features you use), device event information
              (such as system activity, error reports (sometimes called 'crash
              dumps'), and hardware settings).`}
            </li>

            <li>
              Device Data. We collect device data such as information about your
              computer, phone, tablet, or other device you use to access the
              Services. Depending on the device used, this device data may
              include information such as your IP address (or proxy server),
              device and application identification numbers, location, browser
              type, hardware model, Internet service provider and/or mobile
              carrier, operating system, and system configuration information.
            </li>

            <li>
              {`      Location Data. We collect location data such as information about
              your device's location, which can be either precise or imprecise.
              How much information we collect depends on the type and settings
              of the device you use to access the Services. For example, we may
              use GPS and other technologies to collect geolocation data that
              tells us your current location (based on your IP address). You can
              opt out of allowing us to collect this information either by
              refusing access to the information or by disabling your Location
              setting on your device. However, if you choose to opt out, you may
              not be able to use certain aspects of the Services.`}
            </li>
          </ul>
        </section>
      </section>

      <section className="mt-5">
        <h3 className="font-semibold text-base md:text-lg text-foreground ">
          Google API
        </h3>
        <p className="txt pt-2">
          Our use of information received from Google APIs will adhere to{" "}
          <Link
            href={
              "https://developers.google.com/terms/api-services-user-data-policy"
            }
            target="_blank"
            className="text-primary"
          >
            {" "}
            Google API Services User Data Policy
          </Link>
          , including the{" "}
          <Link
            href={
              "https://developers.google.com/terms/api-services-user-data-policy"
            }
            target="_blank"
            className="text-primary"
          >
            Limited Use requirements.
          </Link>
        </p>
      </section>
    </section>
  );
};

export default WhatInfoDoWeCollect;
