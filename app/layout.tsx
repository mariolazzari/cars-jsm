import "./globals.css";
import { Footer, Navbar } from "@/components";
import { LayoutProps } from "@/types";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
