import { section_routes } from "./sidebar-content";

const ControlsForDoNotTrackFeatures = () => {
  return (
    <section className="mt-15" id={section_routes.section12}>
      <h2 className="text-lg md:text-xl text-foreground  uppercase  font-semibold">
        12. CONTROLS FOR DO-NOT-TRACK FEATURES
      </h2>

      <section className="mt-3 space-y-2 txt">
        <p>
          {`Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track ('DNT') feature or setting you can
          activate to signal your privacy preference not to have data about your
          online browsing activities monitored and collected. At this stage, no
          uniform technology standard for recognising and implementing DNT
          signals has been finalised. As such, we do not currently respond to
          DNT browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If a standard for
          online tracking is adopted that we must follow in the future, we will
          inform you about that practice in a revised version of this Privacy
          Notice.`}
        </p>
      </section>
    </section>
  );
};

export default ControlsForDoNotTrackFeatures;
