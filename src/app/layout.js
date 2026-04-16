import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "Kharaj Chakraborty | Full Stack AI Application Engineer",
  description:
    "Hi there! I'm Kharaj Chakraborty, a passionate Full Stack AI Application Engineer and a Computer Science student at APC Roy Government College. I love building scalable web applications and exploring the depths of Computer Science & Artificial Intelligence.",
  keywords: [
    "Kharaj Chakraborty",
    "kharajch",
    "@kharajch",
    "Kharaj Chakraborty (@kharajch)",
    "Kharaj Chakraborty---Portfolio",
    "Kharaj Chakraborty (@kharajch)---Portfolio",
    "Full Stack AI Application Engineer",
    "Full Stack Developer",
    "Web Developer",
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
