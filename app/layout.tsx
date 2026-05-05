import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "@/components/layout/providers";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
