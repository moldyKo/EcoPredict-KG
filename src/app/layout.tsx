import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Полная конфигурация метаданных, иконки вкладки и верификации Google
export const metadata: Metadata = {
  title: "EcoPredict KG — ИИ Платформа Прогнозирования Качества Воздуха",
  description: "Система прогнозирования загрязнения воздуха на основе машинного обучения для умных городов.",
  icons: {
    icon: `data:image/svg+xml,<svg xmlns='http://w3.org' viewBox='0 0 24 24' fill='%2310b981'><path d='M13 10V3L4 14h7v7l9-11h-7z'/></svg>`,
    shortcut: `data:image/svg+xml,<svg xmlns='http://w3.org' viewBox='0 0 24 24' fill='%2310b981'><path d='M13 10V3L4 14h7v7l9-11h-7z'/></svg>`,
  },
  // Блок верификации. Автоматически связывает ваш Next.js сайт с панелью Google Search Console
  verification: {
    google: "KYJUvfbLBaEy6ipxRc2gKqUIMWny3LlQuDEs53MVh2E", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}



