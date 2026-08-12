"use client";

import { useState } from "react";
import Controls from "./Controls";
import SwiperCon from "./SwiperCon";
// import div from "@/components/ui/animate";

const AppControlSection = () => {
  const [currentDisplay, setCurrentDisplay] = useState(0);

  return (
    <div className="mt-20">
      <div
        // type="bottom"
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-center font-extrabold text-2xl md:text-4xl lg:text-4xl  text_gradient">
          Equipping you with controls to protect your privacy
        </h2>
      </div>

      <div
        //  type="bottom" delay={0.3}
        className="max-w-4xl mx-auto"
      >
        <p className="txt text-center pt-3 ">
          {`  Who you talk to and what you share should be up to you. Messenger's
          privacy and safety tools give you the flexibility to connect in ways
          that are most comfortable to you.`}
        </p>
      </div>

      <div
        // type="bottom"
        // delay={0.3}
        className="flex items-center max-lg:flex-col-reverse mt-10  max-lg:gap-5 w-full"
      >
        <Controls
          setCurrentDisplay={setCurrentDisplay}
          currentDisplay={currentDisplay}
        />

        <SwiperCon
          currentDisplay={currentDisplay}
          setCurrentDisplay={setCurrentDisplay}
        />
      </div>
    </div>
  );
};

export default AppControlSection;
