import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import TopNavbar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Min Htet Khaing",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-cyan-100 to-blue-100">
        <Providers>
          <TopNavbar/>
          <main className="container mx-auto h-full px-24">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </Providers>
      </body>
    </html>
  );
}
