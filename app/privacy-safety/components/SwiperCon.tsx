// "use client";

// type Props = {
//   setCurrentDisplay: (value: number) => void;
//   currentDisplay: number;
// };

// import { A11y, Autoplay } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { useEffect, useState } from "react";
// import type { Swiper as SwiperClass } from "swiper";
// import { swiperData } from "./data";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// // @ts-expect-error:not found
// import "swiper/css";
// // @ts-expect-error:not found
// import "swiper/css/navigation";
// // @ts-expect-error:not found
// import "swiper/css/pagination";
// // @ts-expect-error:not found
// import "swiper/css/scrollbar";
// // @ts-expect-error:not found
// import "swiper/css/autoplay";

// const SwiperCon = ({ setCurrentDisplay, currentDisplay }: Props) => {
//   const [swiper, setSwiper] = useState<SwiperClass | null>(null);

//   useEffect(() => {
//     if (swiper) swiper.slideTo(currentDisplay);
//   }, [currentDisplay, swiper]);

//   return (
//     <div className="flex-1 w-[calc(100%-190px)] max-lg:w-full">
//       <Swiper
//         modules={[A11y, Autoplay]}
//         slidesPerView={1}
//         onSwiper={setSwiper}
//         autoplay={{
//           delay: 7000,
//         }}
//         speed={700}
//         onActiveIndexChange={(s) => setCurrentDisplay(s.activeIndex)}
//         className=""
//       >
//         {swiperData.map((i, index) => (
//           <SwiperSlide key={index} className="">
//             <div className="flex items-center  gap-10 flex-row-reverse max-md:flex-col-reverse">
//               <section className="flex-1">
//                 <h3 className="font-bold text-lg  md:text-xl text_gradient">
//                   {i.header}
//                 </h3>

//                 <p className="txt">{i.description}</p>

//                 <Button variant={"link"} asChild>
//                   <Link to={i.route}>Learn more</Link>
//                 </Button>
//               </section>

//               <section className="flex-1 flex   justify-center">
//                 <img
//                   src={i.image}
//                   className="size-full max-w-[300px] max-sm:max-w-[200px] "
//                 />
//               </section>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperCon;

import React from "react";

const SwiperCon = () => {
  return <div></div>;
};

export default SwiperCon;
