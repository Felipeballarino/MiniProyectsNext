import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Modos de renderizado",
  description: "conociendo los modoso de renderizado en nextjs 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
