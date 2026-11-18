import type { Metadata } from "next";
import { Gveret_Levin, Open_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const gveretLevin = Gveret_Levin({
  variable: "--font-gveret-levin",
  subsets: ["latin", "hebrew"],
  weight: "400",
  adjustFontFallback: false,
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sherry Chang | Food Tours, Day Tours & Hakomi Therapy in Taipei",
  description:
    "Sherry Chang is a Taipei-based guide and therapist offering food tours, custom day tours and Hakomi mindful therapy.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${gveretLevin.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
