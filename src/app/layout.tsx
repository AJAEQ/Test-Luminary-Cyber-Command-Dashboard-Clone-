// "use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./(components)/navbarcomponent/Navbar";
import SecondNavBar from "./(components)/secondnavbarcomponent/secondNav";
import SideBar from "./(components)/sidebarcomponent/Sidebar";
// import { usePathname } from "next/navigation";
const inter = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

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
        <div className="flex  relative">
          <SideBar />

          <div className="w-full  pt-[20px] md:pb-[64px] p-0">
            <NavBar />
            <SecondNavBar />
            <main className="w-full">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
