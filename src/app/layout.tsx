import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumit Patidar | Full Stack Developer",
  description: "Professional portfolio of Sumit Patidar - A passionate Full Stack Developer specializing in modern, responsive, and scalable web applications using React.js and Node.js.",
  keywords: ["Sumit Patidar", "Full Stack Developer", "React.js", "Node.js", "Web Developer", "Portfolio", "Frontend", "Backend", "TypeScript", "JavaScript"],
  authors: [{ name: "Sumit Patidar" }],
  icons: {
    icon: "/images/profile.png",
  },
  openGraph: {
    title: "Sumit Patidar | Full Stack Developer",
    description: "Professional portfolio showcasing web development projects and skills",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Patidar | Full Stack Developer",
    description: "Professional portfolio showcasing web development projects and skills",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
