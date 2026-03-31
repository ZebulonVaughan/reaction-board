import type { ReactNode } from "react";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import { ConsoleHeader } from "@/components/ConsoleHeader";
import { Providers } from "@/components/providers";
import { SideRail } from "@/components/SideRail";
import { TopTabs } from "@/components/TopTabs";
import { appDescription, appId, appName, appUrl, embedImageUrl, splashImageUrl, talentVerification } from "@/lib/app-config";
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

const miniAppEmbed = JSON.stringify({
  version: "1",
  imageUrl: embedImageUrl,
  button: {
    title: "Open Reaction Board",
    action: {
      type: "launch_miniapp",
      name: appName,
      url: appUrl,
      splashImageUrl,
      splashBackgroundColor: "#0f172a"
    }
  }
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <meta name="base:app_id" content={appId} />
        <meta name="talentapp:project_verification" content={talentVerification} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{appName}</title>
        <meta name="description" content={appDescription} />
        <meta property="og:title" content={appName} />
        <meta property="og:description" content={appDescription} />
        <meta property="og:image" content={embedImageUrl} />
        <meta property="og:url" content={appUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={appName} />
        <meta name="twitter:description" content={appDescription} />
        <meta name="twitter:image" content={embedImageUrl} />
        <meta name="fc:miniapp" content={miniAppEmbed} />
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
