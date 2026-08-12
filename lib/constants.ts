import { page_routes } from "@/app/routes";

export const SITE_URL = "https://hizina.com";

export const APP_STORE_URLS = {
  apple: "https://apps.apple.com/us/app/hizina/id6756198764",
  android:
    "https://play.google.com/store/apps/details?id=com.gbikna.hizina&pli=1",
};

export const footerNav = [
  {
    path: page_routes.privacy_policy,
    name: "Privacy Policy",
  },
  {
    path: page_routes.cookie_policy,
    name: "Cookie Policy",
  },
  {
    path: page_routes.terms_and_condition,
    name: "Terms",
  },
  {
    path: page_routes.ChildSafetyPolicy,
    name: "Child Safety Policy",
  },
];

export const navlist = [
  {
    path: page_routes.features,
    name: "Features",
  },
  {
    path: page_routes.privacy,
    name: "Privacy and safety",
  },
  {
    path: "/",
    name: "Help Centre",
  },
];
