import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { page_routes } from "../routes";
import { APP_STORE_URLS } from "@/lib/constants";

export default function HomePage() {
  return (
    <Container className="flex items-center justify-between gap-12 max-md:flex-col-reverse max-md:gap-0 h-fit min-h-[90dvh] mt-[0px]">
      <div className="flex-1">
        <section className="flex items-center mt-6">
          <a href={APP_STORE_URLS.apple} target="_blank">
            <Image
              src="/assets/download-on-apple.png"
              alt="Apple store download"
              className="w-[150px] h-10"
              width={150}
              height={150}
            />
          </a>

          <a href={APP_STORE_URLS.android} target="_blank">
            <Image
              src="/assets/download-on-google.png"
              alt="Play store download"
              className="w-[150px] h-10"
              width={150}
              height={150}
            />
          </a>
        </section>

        <h1
          className={cn(
            "font-extrabold text-2xl md:text-4xl lg:text-4xl text_gradient mt-2",
          )}
        >
          AI powered Social Media designed for everything commerce, trending
          conversations and connections
        </h1>

        <p className="txt mt-5">
          Hizina helps you stay close to family and friends, build meaningful
          communities, grow your e-commerce business, and explore your
          interests—all powered by AI.
        </p>

        <Link href={page_routes.features}>
          <Button className="mt-5 rounded-full !px-10 !h-11 group transition-all">
            Explore <ArrowRight className="group-hover:ml-2 transition-all" />
          </Button>
        </Link>
      </div>

      <div className="flex-1 h-fit  md:flex md:justify-end items-center">
        <div className={cn(" overflow-hidden ", "max-md:h-[300px]")}>
          <Image
            alt="Landing page image"
            src="/assets/landing-page.png"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
}
