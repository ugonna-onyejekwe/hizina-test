import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
import { MoreInfoData } from "./data";
import Link from "next/link";

const MoreInfoBoxes = () => {
  return (
    <section className="grid grid-cols-3 gap-4  max-md:flex  max-md:flex-col">
      {MoreInfoData.map((i) => (
        <div
          key={i.header}
          className="bg-card rounded-md p-6 flex flex-col justify-between items-start"
        >
          <div>
            <h1 className="font-bold  text-lg">{i.header}</h1>
            <div className="mt-3 mb-6 h-fit">
              <p className="txt">{i.description}</p>
            </div>
          </div>
          <Button variant={"link"} className={"p-0 h-0"}>
            <Link href={i.route}>Learn More</Link>
          </Button>
        </div>
      ))}
    </section>
  );
};

export default MoreInfoBoxes;
