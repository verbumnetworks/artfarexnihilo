import { Inknut_Antiqua, Karla } from "next/font/google";

// Load Inknut Antiqua
export const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Load Karla
export const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});