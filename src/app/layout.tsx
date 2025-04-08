import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LoadingProvider } from "@/components/LoadingProvider";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TED-like Talks",
  description: "Watch inspiring talks from thought leaders around the world",
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: "TED-like Talks",
    description: "Watch inspiring talks from thought leaders around the world",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TED-like Talks",
    description: "Watch inspiring talks from thought leaders around the world",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProvider>
          <Header />
          <main className="container mx-auto px-4 py-8">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
