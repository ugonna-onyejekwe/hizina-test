const InAppReportingAndFeedback = () => {
  return (
    <section className="mt-10">
      <h2 className="text-lg md:text-xl text-foreground font-semibold">
        3. In-App Reporting &amp; Feedback
      </h2>

      <section className="txt mt-2 space-y-2">
        <p>Users can:</p>

        <ul className="list-disc pl-6 space-y-1">
          <li>
            Tap <strong>Report this post</strong> on any post
          </li>
          <li>
            Or by contacting us directly at{" "}
            <a href="mailto:noreply@hizina.com" className="text-primary">
              noreply@hizina.com
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default InAppReportingAndFeedback;
