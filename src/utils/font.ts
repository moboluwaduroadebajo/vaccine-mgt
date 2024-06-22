import { League_Spartan, Poppins, Roboto } from "next/font/google";

const league_Spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
  variable: "--font-league_spartan",
});

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
export const league_spartan = league_Spartan.variable;
export const poppins = poppins_init.variable;
export const roboto = roboto_init.variable;
