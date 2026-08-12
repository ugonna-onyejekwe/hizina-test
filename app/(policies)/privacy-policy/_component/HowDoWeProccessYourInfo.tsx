import { section_routes } from "./sidebar-content";

const HowDoWeProccessYourInfo = () => {
  return (
    <section className="mt-15" id={section_routes.section2}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        2. HOW DO WE PROCESS YOUR INFORMATION?
      </h2>

      <p className="txt border-l-4 italic bg-card mt-2 px-2 py-1">
        <b>In Short: </b>
        We process your information to provide, improve, and administer our
        Services, communicate with you, for security and fraud prevention, and
        to comply with law. We may also process your information for other
        purposes with your consent.
      </p>

      <section className="mt-5 txt space-y-2">
        <p>
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </p>

        <ul className=" space-y-2 list-disc ml-5">
          <li>
            <b>
              To facilitate account creation and authentication and otherwise
              manage user accounts.
            </b>{" "}
            We may process your information so you can create and log in to your
            account, as well as keep your account in working order.
          </li>

          <li>
            <b>To deliver and facilitate delivery of services to the user.</b>{" "}
            We may process your information to provide you with the requested
            service.
          </li>

          <li>
            <b>To respond to user inquiries/offer support to users.</b> We may
            process your information to respond to your inquiries and solve any
            potential issues you might have with the requested service.
          </li>

          <li>
            <b>To send administrative information to you. </b> We may process
            your information to send you details about our products and
            services, changes to our terms and policies, and other similar
            information.
          </li>

          <li>
            <b>To fulfil and manage your orders. </b> We may process your
            information to fulfil and manage your orders, payments, returns, and
            exchanges made through the Services.
          </li>

          <li>
            <b>To enable user-to-user communications. </b> We may process your
            information if you choose to use any of our offerings that allow for
            communication with another user.
          </li>

          <li>
            <b>To request feedback. </b> We may process your information when
            necessary to request feedback and to contact you about your use of
            our Services.
          </li>

          <li>
            <b>To send you marketing and promotional communications.</b> We may
            process the personal information you send to us for our marketing
            purposes, if this is in accordance with your marketing preferences.
            You can opt out of our marketing emails at any time. For more
            information, see{" "}
            <a href={`#${section_routes.section11}`} className="text-primary">
              {`'WHAT ARE YOUR PRIVACY RIGHTS?'`}
            </a>{" "}
            below.
          </li>

          <li>
            <b>To deliver targeted advertising to you.</b> We may process your
            information to develop and display personalised content and
            advertising tailored to your interests, location, and more.
          </li>

          <li>
            <b>To protect our Services.</b> We may process your information as
            part of our efforts to keep our Services safe and secure, including
            fraud monitoring and prevention.
          </li>

          <li>
            <b>To identify usage trends.</b> We may process information about
            how you use our Services to better understand how they are being
            used so we can improve them.
          </li>

          <li>
            <b>
              To determine the effectiveness of our marketing and promotional
              campaigns.{" "}
            </b>{" "}
            We may process your information to better understand how to provide
            marketing and promotional campaigns that are most relevant to you.
          </li>

          <li>
            {`${(<b>To save or protect an individual's vital interest. </b>)}We may
            process your information when necessary to save or protect an
            individual’s vital interest, such as to prevent harm.`}
          </li>
        </ul>
      </section>
    </section>
  );
};

export default HowDoWeProccessYourInfo;
