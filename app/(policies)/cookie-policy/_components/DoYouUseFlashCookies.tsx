import Link from "next/link";

const DoYouUseFlashCookies = () => {
  return (
    <section className="mt-10">
      <h2 className="text-lg md:text-xl text-foreground    font-semibold">
        Do you use Flash cookies or Local Shared Objects?
      </h2>

      <section className="txt mt-2 space-y-2">
        <p>
          {`Websites may also use so-called "Flash Cookies" (also known as Local
          Shared Objects or "LSOs") to, among other things, collect and store
          information about your use of our services, fraud prevention, and for
          other site operations.`}
        </p>

        <p>
          {`  If you do not want Flash Cookies stored on your computer, you can
          adjust the settings of your Flash player to block Flash Cookies
          storage using the tools contained in the{" "}
        ${(
          <Link
            target="_blank"
            href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
          >
            Website Storage Settings Panel
          </Link>
        )}
          . You can also control Flash Cookies by going to the{" "}
       ${(
         <Link
           href={
             "http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
           }
           target="_blank"
         >
           Global Storage Settings Panel{" "}
         </Link>
       )}
          and following the instructions (which may include instructions that
          explain, for example, how to delete existing Flash Cookies (referred
          to "information" on the Macromedia site), how to prevent Flash LSOs
          from being placed on your computer without your being asked, and (for
          Flash Player 8 and later) how to block Flash Cookies that are not
          being delivered by the operator of the page you are on at the time).`}
        </p>

        <p>
          Please note that setting the Flash Player to restrict or limit
          acceptance of Flash Cookies may reduce or impede the functionality of
          some Flash applications, including, potentially, Flash applications
          used in connection with our services or online content.
        </p>
      </section>
    </section>
  );
};

export default DoYouUseFlashCookies;
