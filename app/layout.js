import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ContextProvider from "./providers/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeoNex",
  description: "NeoNex Crypto Exchange",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} box-border`}>
        <ContextProvider>
          <Navbar />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
