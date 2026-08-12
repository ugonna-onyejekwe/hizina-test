import { terms_section_routes } from "./terms-nav-content";

const DisputeResolution = () => {
  return (
    <section className="mt-15" id={terms_section_routes.section20}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        20. DISPUTE RESOLUTION
      </h2>

      <section className="mt-5">
        <h3 className="font-semibold text-base md:text-lg text-foreground ">
          Binding Arbitration
        </h3>

        <section className="txt space-y-2 mt-2">
          <p>
            Any dispute arising from the relationships between the Parties to
            these Legal Terms shall be determined by one arbitrator who will be
            chosen in accordance with the Arbitration and Internal Rules of the
            European Court of Arbitration being part of the European Centre of
            Arbitration having its seat in Strasbourg, and which are in force at
            the time the application for arbitration is filed, and of which
            adoption of this clause constitutes acceptance. The seat of
            arbitration shall be london, United Kingdom. The language of the
            proceedings shall be english. Applicable rules of substantive law
            shall be the law of the United Kingdom.
          </p>
        </section>
      </section>

      <section className="mt-5">
        <h3 className="font-semibold text-base md:text-lg text-foreground ">
          Restrictions
        </h3>

        <section className="txt space-y-2 mt-2">
          <p>
            The Parties agree that any arbitration shall be limited to the
            Dispute between the Parties individually. To the full extent
            permitted by law, (a) no arbitration shall be joined with any other
            proceeding; (b) there is no right or authority for any Dispute to be
            arbitrated on a class-action basis or to utilise class action
            procedures; and (c) there is no right or authority for any Dispute
            to be brought in a purported representative capacity on behalf of
            the general public or any other persons.
          </p>
        </section>
      </section>

      <section className="mt-5">
        <h3 className="font-semibold text-base md:text-lg text-foreground ">
          Exceptions to Arbitration
        </h3>

        <section className="txt space-y-2 mt-2">
          <p>
            The Parties agree that the following Disputes are not subject to the
            above provisions concerning binding arbitration: (a) any Disputes
            seeking to enforce or protect, or concerning the validity of, any of
            the intellectual property rights of a Party; (b) any Dispute related
            to, or arising from, allegations of theft, piracy, invasion of
            privacy, or unauthorised use; and (c) any claim for injunctive
            relief. If this provision is found to be illegal or unenforceable,
            then neither Party will elect to arbitrate any Dispute falling
            within that portion of this provision found to be illegal or
            unenforceable and such Dispute shall be decided by a court of
            competent jurisdiction within the courts listed for jurisdiction
            above, and the Parties agree to submit to the personal jurisdiction
            of that court.
          </p>
        </section>
      </section>
    </section>
  );
};

export default DisputeResolution;
