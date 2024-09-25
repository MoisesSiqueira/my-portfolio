<<<<<<< HEAD
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moisés Siqueira",
  description: "Moisés Siqueira Engenheiro de Software",
=======
import "./globals.scss";
import { Poppins } from "next/font/google";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Moisés Siqueira",
  description: "Moisés Siqueira is a software engineer...",
>>>>>>> a7b8ff2 (Primeiro commit)
};

export default function RootLayout({
  children,
<<<<<<< HEAD
}: Readonly<{
  children: React.ReactNode;
}>) {
=======
}: {
  children: React.ReactNode;
}) {
>>>>>>> a7b8ff2 (Primeiro commit)
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
