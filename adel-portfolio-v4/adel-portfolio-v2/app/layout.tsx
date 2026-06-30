import type { Metadata, Viewport } from "next";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";
import ParticlesBackground from "@/components/ParticlesBackground";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Adel Sinaga — IT Student & Developer",
  description:
    "Portfolio of Adel Septiana Sinaga — Information Technology Student passionate about Software Development, Web Development, and Building Digital Solutions.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050508] text-white antialiased flex flex-col min-h-screen">
        <ParticlesBackground />
        <CursorEffect />
        <ThemeToggle />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}