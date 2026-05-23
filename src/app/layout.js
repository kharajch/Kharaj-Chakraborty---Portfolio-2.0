import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "Kharaj Chakraborty | AI Powered Full Stack Enthusiast",
  description:
    "Hi there! I'm Kharaj Chakraborty, a passionate AI Powered Full Stack Enthusiast and a Computer Science student at APC Roy Government College. I love building scalable web applications and exploring the depths of Computer Science & Artificial Intelligence.",
  keywords: [
    "Kharaj Chakraborty",
    "kharajch",
    "@kharajch",
    "Kharaj Chakraborty (@kharajch)",
    "Kharaj Chakraborty---Portfolio",
    "Kharaj Chakraborty (@kharajch)---Portfolio",
    "AI Powered Full Stack Enthusiast",
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
    title: "Kharaj Chakraborty | Full Stack AI Application Engineer",
    description:
      "Passionate Full Stack AI Application Engineer & Computer Science student building scalable web applications.",
    type: "website",
  },
  verification: {
    google: "elgBJkKEI-iszJssdFl0eE8MSlOQaYO0rFVswe5DULM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
