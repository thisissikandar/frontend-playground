import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Inter, Lexend_Deca } from "next/font/google";

import GlobalDrawer from "@/shared/drawer-views/container";
import GlobalModal from "@/shared/modal-views/container";
import NextProgress from "@/components/next-progress";
import { JotaiProvider, ThemeProvider } from "@/shared/theme-provider";
import { siteConfig } from "@/config/site.config";
import cn from "@/utils/class-names";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// styles
import "swiper/css";
import "swiper/css/navigation";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend",
});
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <body
        // to prevent any warning that is caused by third party extensions like Grammarly
        suppressHydrationWarning
        className={cn(inter.variable, lexendDeca.variable, "font-inter")}
      >
        <ThemeProvider>
          <NextProgress />
          <JotaiProvider>
            {children}
            <Toaster />
            <GlobalDrawer />
            <GlobalModal />
          </JotaiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
