"use client";

type Props = {
  setCurrentDisplay: (value: number) => void;
  currentDisplay: number;
};

import { A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { swiperData } from "./data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const SwiperCon = ({ setCurrentDisplay, currentDisplay }: Props) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  useEffect(() => {
    if (swiper) swiper.slideTo(currentDisplay);
  }, [currentDisplay, swiper]);

  return (
    <div className="flex-1 w-[calc(100%-190px)] max-lg:w-full">
      <Swiper
        modules={[A11y, Autoplay]}
        slidesPerView={1}
        onSwiper={setSwiper}
        autoplay={{
          delay: 7000,
        }}
        speed={700}
        onActiveIndexChange={(s) => setCurrentDisplay(s.activeIndex)}
        className=""
      >
        {swiperData.map((i, index) => (
          <SwiperSlide key={index} className="">
            <div className="flex items-center  gap-10 flex-row-reverse max-md:flex-col-reverse">
              <section className="flex-1">
                <h3 className="font-bold   text-xl  md:text-2xl lg:text-3xl text_gradient">
                  {i.header}
                </h3>

                <p className="txt mt-4">{i.description}</p>

                <Button variant={"link"} className={"px-0"}>
                  <Link href={i.route}>Learn more</Link>
                </Button>
              </section>

              <section className="flex-1 flex   justify-center">
                <Image
                  src={i.image}
                  className="h-fit max-w-[250px] max-sm:max-w-[200px] "
                  width={300}
                  height={300}
                  alt={`swiper ${index + 1} image`}
                />
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCon;
