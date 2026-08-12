import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
import { MoreInfoData } from "./data";
import Link from "next/link";

const MoreInfoBoxes = () => {
  return (
    <section className="grid grid-cols-3 gap-4 mt-10 max-md:flex  max-md:flex-col">
      {MoreInfoData.map((i) => (
        <div key={i.header} className="bg-card rounded-md p-4">
          <h1 className="font-bold  text-lg">{i.header}</h1>
          <p className="txt my-3 line-clamp-3">{i.description}</p>
          <Button variant={"link"}>
            <Link href={i.route}>Learn More</Link>
          </Button>
        </div>
      ))}
    </section>
  );
};

export default MoreInfoBoxes;
