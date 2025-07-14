import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="bg-card border-b border-border/20 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <Link href="/" className="group">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-primary-foreground font-bold text-sm sm:text-base">
                  M
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Mini-Commerce
              </h1>
            </div>
          </Link>

          {/* Navigation - Hidden on mobile, shown on larger screens */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              About
            </Link>
          </nav>

          {/* Cart Icon with enhanced styling */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CartIcon />
            </div>

            {/* Mobile menu button */}
            <Button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200">
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - You can expand this with state management */}
        <div className="md:hidden border-t border-border/20 py-4 hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/products"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
