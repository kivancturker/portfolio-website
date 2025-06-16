import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kivanc Turker",
  description: "Kivanc Turker's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Theme
            accentColor="blue"
            grayColor="slate"
            hasBackground={false}
            className="font-sans"
          >
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
