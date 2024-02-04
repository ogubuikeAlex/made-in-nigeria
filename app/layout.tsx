"use-client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import { useProjects } from "./utils/projects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Made in Nigeria",
  description:
    "A curation of awesome open source tools built by Nigerians for the world.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { filterProjects } = await useProjects();

  // const nameFilter = filterProjects().byName("sta");
  // const alphabetFilter = filterProjects().byLetter("P");
  // const authorFilter = filterProjects().byAuthor("ace");

  return (
    <>
      <title>Made In Nigeria</title>

      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <NavBar />
            <main>{children}</main>
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  );
}
