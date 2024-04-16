import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import Particles from "./components/particles";

export const metadata: Metadata = {
  title: {
    default: "Ibroxim Ergashov",
    template: "%s | ibrokhimweb",
  },
  description: "Co-founder of unkey.dev and founder of planetfall.io",
  openGraph: {
    title: "ibrokhimweb",
    description: "Co-founder of unkey.dev and founder of planetfall.io",
    url: "https://ibrokhimweb.uz",
    siteName: "www.ibrokhimweb.uz",
    images: [
      {
        url: "https://ibrokhimweb.uz/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ibroxim Ergashov",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        {children}
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
      </body>
    </html>
  );
};
