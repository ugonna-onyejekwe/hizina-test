import Link from "next/link";
import { reportData } from "./data";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ReportingSection = () => {
  return (
    <div className="mt-20">
      <div
        //  type="bottom"
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-center font-extrabold text-2xl md:text-4xl lg:text-4xl  text_gradient">
          Making reporting simple
        </h2>
      </div>

      <div
        // type="bottom" delay={0.3}
        className="max-w-4xl mx-auto"
      >
        <p className="txt text-center pt-3">
          {`If you see something, say something. If we detect a violation to our
          Community Standards, we'll review and take appropriate action, which
          could include disabling an account or limiting a user's ability to
          send messages.`}
        </p>
      </div>

      <section className="flex gap-10 max-md:flex-col mt-10">
        {reportData.map((data) => (
          <div key={data.header} className="flex-1 flex flex-col-reverse gap-0">
            <section className="flex-1">
              <div
              //  delay={0.3} type="bottom"
              >
                <h3 className="font-bold  text-xl  md:text-2xl lg:text-3xl  text_gradient">
                  {data.header}
                </h3>
              </div>
              <div
              // type="bottom" delay={0.3}
              >
                <p className="txt mt-3">{data.description}</p>
              </div>

              <div
              //  type="bottom" delay={0.3}
              >
                <Button variant={"link"} className={"px-0"}>
                  <Link href={data.route}>Learn more</Link>
                </Button>
              </div>
            </section>

            <div
              //  type="bottom" delay={0.3}
              className="flex-1 flex items-center justify-center"
            >
              <Image src={data.image} alt="image" height={500} width={500} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ReportingSection;
