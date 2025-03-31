import { Barlow, IBM_Plex_Sans } from "next/font/google";

export const barlow = Barlow({
  preload: true,
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const ibm_plex_sans = IBM_Plex_Sans({
  preload: true,
  subsets: ["vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const fontList = [
  { name: "barlow", font: barlow, default: true },
  {
    name: "IBM plex sans",
    font: ibm_plex_sans,
  },
];

export default fontList;
