// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./(components)/navbarcomponent/Navbar";
import SideBar from "./(components)/sidebarcomponent/Sidebar";
// import { usePathname } from "next/navigation";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Luminary",
  description: "Luminary website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  // console.log(pathname);
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <div className="flex items-start relative md:gap-[14px] gap-2">
          <SideBar />

          <div className="w-full pt-[30px] md:pb-[64px] flex flex-col gap-[30px] md:mx-[14px]">
            <NavBar />
            <main className="w-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
