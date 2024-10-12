"use client";
import type { Metadata } from "next";
import {Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import {cn} from '@/lib/utils'
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from '../components/ui/ThemeToggle'
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300",'400','500','600','700'],
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-sans bg-dark-300 antialiased',fontSans.variable)}>
       <ThemeProvider attribute="class" defaultTheme="dark">
          <div>
            <ThemeToggle />
            {children}
          </div>  
        </ThemeProvider>
      </body>
    </html>
  );
}
