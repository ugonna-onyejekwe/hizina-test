import { section_routes } from "./sidebar-content";

const HowDoWeHandleYourSocialLogin = () => {
  return (
    <section className="mt-15" id={section_routes.section7}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
      </h2>

      <p className="txt border-l-4 italic bg-card mt-2 px-2 py-1">
        <b>In Short: </b>
        If you choose to register or log in to our Services using a social media
        account, we may have access to certain information about you.
      </p>

      <section className="space-y-2 txt mt-5">
        <p>
          Our Services offer you the ability to register and log in using your
          third-party social media account details (like your Facebook or X
          logins). Where you choose to do this, we will receive certain profile
          information about you from your social media provider. The profile
          information we receive may vary depending on the social media provider
          concerned, but will often include your name, email address, friends
          list, and profile picture, as well as other information you choose to
          make public on such a social media platform.
        </p>

        <p>
          We will use the information we receive only for the purposes that are
          described in this Privacy Notice or that are otherwise made clear to
          you on the relevant Services. Please note that we do not control, and
          are not responsible for, other uses of your personal information by
          your third-party social media provider. We recommend that you review
          their privacy notice to understand how they collect, use, and share
          your personal information, and how you can set your privacy
          preferences on their sites and apps.
        </p>
      </section>
    </section>
  );
};

export default HowDoWeHandleYourSocialLogin;
