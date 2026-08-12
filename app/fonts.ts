import localFont from "next/font/local";

export const nimbusSans = localFont({
  src: [
    {
      path: "../public/fonts/NimbusSanL-Reg-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NimbusSanL-Bol-webfont.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nimbus-sans",
});

export const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});
