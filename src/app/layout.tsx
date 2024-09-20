import type { Metadata } from "next";
import { Inter_Tight } from 'next/font/google'
import "./globals.scss";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import { DialogProvider } from "@context/DialogContext";
import { TasksProvider } from "@context/TasksContext";

const inter = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "FocalPoint App",
  description: "FocalPoint is an App by legaplan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DialogProvider>
      <TasksProvider>
        <html lang="en">
          <body className={inter.className}>
            <Theme>
              {children}
            </Theme>
          </body>
        </html>
      </TasksProvider>
    </DialogProvider>
  );
}
