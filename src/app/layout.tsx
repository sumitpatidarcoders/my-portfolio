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

// export const metadata: Metadata = {
//   title: "Sumit Patidar | Full Stack Developer",
//   description: "Professional portfolio of Sumit Patidar - A passionate Full Stack Developer specializing in modern, responsive, and scalable web applications using React.js and Node.js.",
//   keywords: ["Sumit Patidar", "Full Stack Developer", "React.js", "Node.js", "Web Developer", "Portfolio", "Frontend", "Backend", "TypeScript", "JavaScript"],
//   authors: [{ name: "Sumit Patidar" }],

//   verification: {
//   google: "IpdsUCkDGWtNySFzI8HxdA7hapPv4k-mZykFH7cNNM",
// },
//   icons: {
//     icon: "/images/sumitphoto.jpg",
//   },
//   openGraph: {
//     title: "Sumit Patidar | Full Stack Developer",
//     description: "Professional portfolio showcasing web development projects and skills",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Sumit Patidar | Full Stack Developer",
//     description: "Professional portfolio showcasing web development projects and skills",
//   },
// };
export const metadata: Metadata = {
  title: "Sumit Patidar | Full Stack Developer",
  description: "Professional portfolio of Sumit Patidar - Full Stack Developer specializing in React.js, Node.js and modern web apps.",

  keywords: ["Sumit Patidar", "Full Stack Developer", "React.js", "Node.js", "Web Developer", "Portfolio", "Frontend", "Backend", "TypeScript", "JavaScript"],

  authors: [{ name: "Sumit Patidar" }],

   verification: {
     google: "IpdsUCkDGWtNySFzI8HxdA7hapPv4k-mZykFH7cNNM",
     },
  openGraph: {
    title: "Sumit Patidar | Full Stack Developer",
    description: "Professional portfolio showcasing web development projects and skills",
    url: "https://my-portfolio-psi-seven-97.vercel.app/",
    siteName: "Sumit Portfolio",
    images: [
      {
        url: "https://my-portfolio-psi-seven-97.vercel.app/images/profile.png",
        width: 800,
        height: 800,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sumit Patidar | Full Stack Developer",
    description: "Portfolio showcasing projects and skills",
    images: [
      "https://my-portfolio-psi-seven-97.vercel.app/images/profile.png",
    ],
  },

  icons: {
    icon: "/images/profile.png",
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
 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sumit Patidar",
      url: "https://my-portfolio-psi-seven-97.vercel.app/",
      image:
        "https://my-portfolio-psi-seven-97.vercel.app/images/profile.png",
      jobTitle: "Full Stack Developer",
      sameAs: [
        "https://www.linkedin.com/in/sumit-patidar-a37912391/",
        "https://www.instagram.com/sumit_patidar_062/",
        "https://github.com/sumitpatidarcoders",
        
      ],
    }),
  }}
/>
    </html>
  );
}
