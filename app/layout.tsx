import type { ReactNode } from "react";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import { ConsoleHeader } from "@/components/ConsoleHeader";
import { Providers } from "@/components/providers";
import { SideRail } from "@/components/SideRail";
import { TopTabs } from "@/components/TopTabs";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading"
});

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <meta name="base:app_id" content="69cb449abc8b6d58d5a9744a" />
        <meta
          name="talentapp:project_verification"
          content="57634a8540f6477c50304b6301b1c4cf2522b0ddf2a486e5a574a2ac6a981d62ca9afe591c2b44623a93a09d3df631800c36bcba13b20dbc1bdaa66e4dbbd73a"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>reaction-board</title>
        <meta name="description" content="A live reaction board for fast social response on Base." />
      </head>
      <body>
        <Providers>
          <div className="app-shell">
            <div className="app-background" />
            <ConsoleHeader />
            <TopTabs />
            <div className="workspace">
              <SideRail />
              <main className="main-stage">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
