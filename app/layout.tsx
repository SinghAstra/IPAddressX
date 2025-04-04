import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "IP Address",
    "IP Geolocation",
    "IP Location",
    "IP Address Lookup",
    "IP Address Finder",
    "IP Address Tracker",
    "IP Address Information",
    "IP Address Details",
    "IP Address API",
    "IP Address Geolocation API",
    "IP Address Location API",
    "IP Address Lookup API",
    "IP Address Finder API",
    "IP Address Tracker API",
  ],
  authors: [
    {
      name: "SinghAstra",
      url: "https://github.com/SinghAstra",
    },
  ],
  creator: "SinghAstra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/landing.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/assets/landing.png"],
    creator: "@singhastra",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen ">
        <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />
        {children}
        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              fontFamily: "Space Grotesk, monospace",
              background: "hsl(var(--muted) / 0.2)",
              color: "hsl(var(--foreground))",
              border: "1px solid hsl(var(--border))",
              letterSpacing: "0.01em",
              fontSize: ".95rem",
            },
          }}
        />
      </body>
    </html>
  );
}
