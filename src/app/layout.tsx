import type { Metadata } from "next";
import NextAuthProvider from "./context/NextAuthProvider";
import "./globals.css";
import LogoBar from "@/components/ui/display/LogoBar";
import NavigationBar from "@/components/ui/navigation/NavigationBar";

export const metadata: Metadata = {
  title: "Gartenzeit",
  description: "Harvest together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background-80 pb-40">
        <NextAuthProvider>{children}</NextAuthProvider>
        <div className="flex justify-center fixed bottom-5 w-screen">
          <NavigationBar />
        </div>
      </body>
    </html>
  );
}
