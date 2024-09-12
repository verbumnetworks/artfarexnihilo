import TransitionProvider from "@/components/TransitionProvider";
import { karla } from "./font";
import "./globals.css";

export const metadata = {
  title: "Artfar - Gerald's Art Exnihilo",
  description:
    "An art gallery for exploring how art responds to faith and reason",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className} bg-primary text-black leading-loose max-w-[1360px] mx-auto`}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
