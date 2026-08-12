const WhatAreCookies = () => {
  return (
    <section className="mt-10">
      <h2 className="text-lg md:text-xl text-foreground    font-semibold">
        What are cookies?
      </h2>

      <section className="txt mt-2 space-y-2">
        <p>
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners in order to make their websites work, or to work more
          efficiently, as well as to provide reporting information.
        </p>

        <p>
          {`Cookies set by the website owner (in this case, Hizina) are called
          "first-party cookies." Cookies set by parties other than the website
          owner are called "third-party cookies." Third-party cookies enable
          third-party features or functionality to be provided on or through the
          website (e.g., advertising, interactive content, and analytics). The
          parties that set these third-party cookies can recognize your computer
          both when it visits the website in question and also when it visits
          certain other websites.`}
        </p>
      </section>
    </section>
  );
};

export default WhatAreCookies;
