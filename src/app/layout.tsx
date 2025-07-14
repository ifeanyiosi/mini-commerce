"use client";
import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Mini-Commerce</title>
        <meta name="description" content="Small e-commerce demonstration" />
        <meta property="og:title" content="Mini-Commerce" />
        <meta property="og:description" content="Browse our products" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <CartProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </CartProvider>
          </ThemeProvider>
        </QueryClientProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
