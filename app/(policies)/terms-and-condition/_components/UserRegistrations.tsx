import { terms_section_routes } from "./terms-nav-content";

const UserRegistrations = () => {
  return (
    <section className="mt-15" id={terms_section_routes.section4}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        4. USER REGISTRATION
      </h2>

      <section className="mt-2 txt space-y-2">
        <p>
          You may be required to register to use the Services. You agree to keep
          your password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
        </p>
      </section>
    </section>
  );
};

export default UserRegistrations;
