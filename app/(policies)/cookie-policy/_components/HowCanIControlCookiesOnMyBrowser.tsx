import Link from "next/link";

const HowCanIControlCookiesOnMyBrowser = () => {
  return (
    <section className="mt-10">
      <h2 className="text-lg md:text-xl text-foreground    font-semibold">
        How can I control cookies on my browser?
      </h2>

      <section className="txt mt-2 space-y-2">
        <p>
          {`  As the means by which you can refuse cookies through your web browser
          controls vary from browser to browser, you should visit your browser's
          help menu for more information. The following is information about how
          to manage cookies on the most popular browsers:`}
        </p>

        <ul className="spacey-y-2 list-disc txt ml-5">
          <li>
            <Link
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Chrome
            </Link>
          </li>

          <li>
            <Link
              href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Internet Explorer
            </Link>
          </li>

          <li>
            <Link
              href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Firefox
            </Link>
          </li>

          <li>
            <Link
              href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Safari
            </Link>
          </li>

          <li>
            <Link
              href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Edge
            </Link>
          </li>

          <li>
            <Link
              href="https://help.opera.com/en/latest/web-preferences/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Opera
            </Link>
          </li>
        </ul>

        <p>
          In addition, most advertising networks offer you a way to opt out of
          targeted advertising. If you would like to find out more information,
          please visit:
        </p>
        <ul className="spacey-y-2 list-disc txt ml-5">
          <li>
            <Link
              href={"http://www.aboutads.info/choices/"}
              target="_blank"
              className="text-primary"
            >
              Digital Advertising Alliance
            </Link>
          </li>

          <li>
            <Link
              href={"https://youradchoices.ca/"}
              target="_blank"
              className="text-primary"
            >
              Digital Advertising Alliance of Canada
            </Link>
          </li>

          <li>
            <Link
              href={"http://www.youronlinechoices.com/"}
              target="_blank"
              className="text-primary"
            >
              European Interactive Digital Advertising Alliance
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default HowCanIControlCookiesOnMyBrowser;
