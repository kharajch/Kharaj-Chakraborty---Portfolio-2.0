import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "Kharaj Chakraborty | AI Full-Stack Enthusiast",
  description:
    "Hi there! I'm Kharaj Chakraborty, a passionate AI Full-Stack Enthusiast and a Computer Science student at APC Roy Government College. I love building scalable web applications and exploring the depths of Computer Science & Artificial Intelligence.",
  keywords: [
    "Kharaj Chakraborty",
    "kharajch",
    "@kharajch",
    "Kharaj Chakraborty (@kharajch)",
    "Kharaj Chakraborty---Portfolio",
    "Kharaj Chakraborty (@kharajch)---Portfolio",
    "AI Full-Stack Enthusiast",
    "AI Powered Full Stack Developer",
    "AI Powered Full Stack Engineer",
    "Web Developer",
    "AI Developer",
    "Portfolio",
    "Next.js",
    "React",
    "Computer Science",
    "Artificial Intelligence",
  ],
  authors: [{ name: "Kharaj Chakraborty" }],
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Kharaj Chakraborty | AI Full-Stack Enthusiast",
    description:
      "Passionate AI Full-Stack Enthusiast & Computer Science student building scalable web applications.",
    type: "website",
  },
  verification: {
    google: "elgBJkKEI-iszJssdFl0eE8MSlOQaYO0rFVswe5DULM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', savedTheme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
