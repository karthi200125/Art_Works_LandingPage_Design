import { Inter } from "next/font/google";
import "./globals.css";
import GridBackground from "./components/GridBackground";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Art Works",
  description: "Futuristic Ai Art works Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <GridBackground /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
