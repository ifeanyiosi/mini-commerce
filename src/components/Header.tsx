import Link from "next/link";
import React from "react";
import CartIcon from "./CartIcon";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Categories
            </Link>
            {/* Theme Toggle for Desktop */}
            <ThemeToggle />
          </nav>

          {/* Cart Icon and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CartIcon />
            </div>

            {/* Mobile menu button with Sheet component */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-transparent border-0 hover:bg-muted"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] flex flex-col justify-between"
                >
                  <div>
                    <SheetHeader>
                      <SheetTitle className="text-left">
                        <div className="flex items-center space-x-2 pt-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">
                              M
                            </span>
                          </div>
                          <span className="text-lg font-bold">
                            Mini-Commerce
                          </span>
                        </div>
                      </SheetTitle>
                    </SheetHeader>

                    <nav className="flex flex-col px-4 space-y-6 mt-8">
                      <SheetClose asChild>
                        <Link
                          href="/products"
                          className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                        >
                          Products
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link
                          href="#"
                          className="text-lg text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                        >
                          Categories
                        </Link>
                      </SheetClose>
                    </nav>
                  </div>

                  {/* Theme toggle moved to the bottom with spacing and border */}
                  <div className="border-t border-border mt-6 pt-4 px-4">
                    <ThemeToggle />
                  </div>

                  <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none">
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close</span>
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
