// import div from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const PersonalMessageSection = () => {
  return (
    <div className="flex items-center gap-15 max-md:flex-col max-md:gap-5 mt-20">
      <div
        //  type="left"
        className="flex-1 flex items-center justify-center"
      >
        <Image
          src="/assets/personal-msg.jpg"
          alt="img"
          className="rounded-lg w-full h-fit"
          height={500}
          width={500}
        />
      </div>

      <div
        //  type="right"
        className="flex-1"
      >
        <h3 className="font-bold text-xl  md:text-2xl lg:text-4xl text_gradient">
          Your personal messages are private
        </h3>

        <p className="txt mt-3">
          {`We want you to know how we use your information. We collect
          information from Messenger so that we can improve the product
          experience and keep people safe and secure. We don't use the content
          of your personal messages for ads personalisation. Some types of
          messages that aren't personal include messages to and from business
          accounts, messages exchanged with Hizina when using products such as
          Hizina AI and messages in features designed to be more public, such as
          channels.`}
        </p>

        <p className="txt mt-3">
          {`Hizina also adds an additional layer of privacy by securing personal
          messages and calls on Messenger with end-to-end encryption, which
          means that nobody, including Hizina, can see or listen to what's sent
          or said in your calls or messages. Bear in mind, for reporting and
          optional features, you or someone in the chat may still choose to
          share messages with Hizina.`}
        </p>

        <Button variant={"link"} className={"px-0"}>
          <Link href={"/"}>Learn more</Link>
        </Button>
      </div>
    </div>
  );
};

export default PersonalMessageSection;
