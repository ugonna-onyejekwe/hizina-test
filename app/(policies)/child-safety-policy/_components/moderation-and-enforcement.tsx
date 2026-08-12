const ModerationAndEnforcement = () => {
  return (
    <section className="mt-10">
      <h2 className="text-lg md:text-xl text-foreground font-semibold">
        2. Moderation and Enforcement
      </h2>

      <section className="txt mt-2 space-y-2">
        <p>
          We use a combination of automated tools and trained human moderators
          to detect and review content. High risk content is detected within 1
          hour. Suspicious accounts or repeat offenders are disabled
          immediately.
        </p>

        <p>Our safety measures may include:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>User reporting tools</li>
          <li>Content moderation and review</li>
          <li>Investigation of suspicious activity</li>
          <li>Account restriction, suspension, or permanent bans</li>
          <li>
            Cooperation with child safety organizations and legal authorities
            where required
          </li>
        </ul>

        <p>
          We reserve the right to remove any content or account that violates
          these standards or poses a risk to child safety.
        </p>
      </section>
    </section>
  );
};

export default ModerationAndEnforcement;
