import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "Kharaj Chakraborty | Fullstack Web Developer",
  description:
    "Hi there! I'm Kharaj Chakraborty, a passionate Full Stack Developer and a Computer Science student at APC Roy Government College. I love building scalable web applications and exploring the depths of Computer Science.",
  keywords: [
    "Kharaj Chakraborty",
    "kharajch",
    "@kharajch",
    "Kharaj Chakraborty (@kharajch)",
    "Kharaj Chakraborty---Portfolio",
    "Kharaj Chakraborty (@kharajch)---Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "React",
    "Computer Science",
  ],
  authors: [{ name: "Kharaj Chakraborty" }],
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Kharaj Chakraborty | Fullstack Web Developer",
    description:
      "Passionate Full Stack Developer & Computer Science student building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
