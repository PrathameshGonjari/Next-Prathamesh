import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/redux/provider";
import Favicon from "@/public/favicon.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prathamesh",
  description: "Prathamesh Space X",
  icons: {
    icon: Favicon.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NavBar />
          <div className="container mx-auto mt-16">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
