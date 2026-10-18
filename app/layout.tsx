import "./globals.css";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import Navbar from "./components/Navbar";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const body = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export const metadata = {
  title: "Lukman Norhakim | Full-Stack Developer & Data Analyst",
  description: "Portfolio of Lukman Norhakim Zainal: web apps, Power BI dashboards and data projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
