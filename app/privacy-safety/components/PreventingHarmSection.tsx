import { Button } from "@/components/ui/button";
import { PreventingHarmData_1, PreventingHarmData_2 } from "./data";
import Link from "next/link";
import Image from "next/image";

const PreventingHarmSection = () => {
  return (
    <div className="mt-15">
      <div
      // type="bottom"
      >
        <h2 className="text-center font-extrabold text-2xl md:text-4xl lg:text-4xl  text_gradient">
          Preventing harm before it happens
        </h2>
      </div>

      <div
      // type="bottom" delay={0.3}
      >
        <p className="txt text-center pt-3">
          {`  Whether you're messaging a friend, business or someone in a community
          chat, Messenger helps keep you safe online. We work to stop malicious
          activity before it reaches you.`}
        </p>
      </div>

      <section className="mt-7 space-y-8">
        {PreventingHarmData_1.map((data, index) => (
          <div
            key={data.header}
            className="flex items-center gap-10 max-md:flex-col-reverse max-md:gap-0 even:flex-row-reverse max-md:even:flex-col-reverse"
          >
            <div
              // type={index % 2 === 0 ? "left" : "right"}
              className="flex-1"
            >
              <h3 className="font-bold  text-lg  md:text-2xl lg:text-3xl  text_gradient">
                {data.header}
              </h3>
              <p className="txt mt-3">{data.description}</p>

              <Button variant={"link"}>
                <Link href={data.route}>Learn more</Link>
              </Button>
            </div>

            <div
              // type={index % 2 === 0 ? "right" : "left"}
              className="flex-1"
            >
              <Image src={data.image} alt="image" height={300} width={300} />
            </div>
          </div>
        ))}
      </section>

      <section className="flex gap-10 max-md:flex-col mt-10">
        {PreventingHarmData_2.map((data) => (
          <div key={data.header} className="flex flex-col-reverse gap-0">
            <section className="flex-1">
              <div
              //  type="bottom" delay={0.3}
              >
                <h3 className="font-bold  text-lg  md:text-2xl lg:text-3xl  text_gradient">
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
                <Button variant={"link"}>
                  <Link href={data.route}>Learn more</Link>
                </Button>
              </div>
            </section>

            <div
            //  type="bottom" className="flex-1"
            >
              <Image src={data.image} alt="image" height={300} width={300} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PreventingHarmSection;
