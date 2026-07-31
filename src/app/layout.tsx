import type { Metadata } from "next";
import { Caveat, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const editorial = Playfair_Display({
  variable: "--font-editorial",
  subsets: ["latin"],
});

const journal = Caveat({
  variable: "--font-journal",
  subsets: ["latin"],
});

const utility = Noto_Sans({
  variable: "--font-utility",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shirleyandcris.com",
  ),
  title: {
    default: "Shirley + Cris",
    template: "%s · Shirley + Cris",
  },
  description:
    "A story that began on July 25, 1997, and keeps unfolding—one little date at a time.",
  openGraph: {
    title: "Shirley + Cris · Ten years, and every little date between",
    description:
      "A story that began on July 25, 1997, and keeps unfolding—one little date at a time.",
    type: "website",
    images: [{ url: "/media/share/shirley-cris-og.png", width: 1744, height: 911 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shirley + Cris · Ten years, and every little date between",
    description:
      "A story that began on July 25, 1997, and keeps unfolding—one little date at a time.",
    images: ["/media/share/shirley-cris-og.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${editorial.variable} ${journal.variable} ${utility.variable}`}>
        {children}
      </body>
    </html>
  );
}
