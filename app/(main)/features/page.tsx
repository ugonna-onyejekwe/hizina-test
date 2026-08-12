import Container from "@/components/ui/container";
import type { Metadata } from "next";
import { FeatureList } from "./components/features-list";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore Hizina's AI-powered social, community, and commerce features designed to help you connect, discover, and grow your business.",
};

export default function FeaturesPage() {
  return (
    <div>
      <Container className="space-y-10">
        {FeatureList.map((feature, index) => (
          <div
            key={feature.header}
            className={cn(
              "flex items-center gap-10  max-md:gap-0 even:flex-row-reverse max-md:flex-col-reverse max-md:even:flex-col-reverse ",
            )}
          >
            <div
              className="flex-1"
              // type={index % 2 === 0 ? "left" : "right"}
            >
              {feature.subHeader && (
                <span className="font-bold text-sm md:text-lg ">
                  {feature.subHeader}
                </span>
              )}
              <h2
                className="text_gradient font-extrabold text-xl md:text-2xl lg:text-4xl "
                dangerouslySetInnerHTML={{ __html: feature.header }}
              />
              <p className="txt mt-2">{feature.description}</p>
            </div>

            <div
              // type={index % 2 === 0 ? "right" : "left"}
              className="flex-1"
            >
              <img src={feature.image} alt={feature.image} />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
