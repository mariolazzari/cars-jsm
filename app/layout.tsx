import { ReactNode } from "react";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Navbar />
      <body className="relative">{children}</body>
      <Footer />
    </html>
  );
}
