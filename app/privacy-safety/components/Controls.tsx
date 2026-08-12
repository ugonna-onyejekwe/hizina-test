import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  setCurrentDisplay: (value: number) => void;
  currentDisplay: number;
};

const Controls = ({ setCurrentDisplay, currentDisplay }: Props) => {
  const keys = [
    {
      icon: "/assets/message-icon.png",
      title: "Message controls",
    },
    {
      icon: "/assets/block-icon.png",
      title: "Restrict and block",
    },
    {
      icon: "/assets/lock-icon.png",
      title: "App lock",
    },
    {
      icon: "/assets/setting-icon.png",
      title: "Settings",
    },
  ];

  return (
    <div className="flex flex-col max-lg:flex-row gap-4 min-w-[190px]  ">
      {keys.map((i, index) => (
        <div
          key={index}
          onClick={() => setCurrentDisplay(index)}
          className={cn(
            "flex items-center gap-2 opacity-50 transition-all hover:opacity-100 cursor-pointer",
            currentDisplay === index && "opacity-100",
          )}
        >
          <Image
            src={i.icon}
            className="size-8 grayscale-100"
            width={50}
            height={50}
            alt="icon"
          />
          <h3 className="font-medium text-sm block max-lg:hidden">{i.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Controls;
