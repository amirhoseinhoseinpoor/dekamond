import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import type { Metadata } from "next";
import localFont from "next/font/local";
// importing the store provider
import Providers from "@/store/Providers";


const IRANSans = localFont({ src: "./Fonts/IRANSansXVF.ttf" });

export const metadata: Metadata = {
  title: "Dekamond",
  description: "dekamond is a platform for managing your personal and professional tasks efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${IRANSans.className} h-100`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
