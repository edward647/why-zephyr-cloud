"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ZephyrLogo from "./logos/ZephyrLogo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-center gap-12 p-6 lg:px-8">
        {/* Logo */}
        <div className="flex">
          <a href="/" className="-m-1.5 flex items-center gap-3 p-1.5">
            <ZephyrLogo className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight">Zephyr Cloud</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation - centered */}
        <div className="hidden lg:flex lg:gap-x-8">
          <a href="#features" className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground">
            Features
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground">
            Documentation
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground">
            Pricing
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground">
            Blog
          </a>
        </div>

        {/* Desktop CTA buttons - centered */}
        <div className="hidden lg:flex lg:gap-x-4">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground"
          >
            Sign in
          </a>
          <a
            href="#"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get started
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pb-6 pt-2">
            <a
              href="#features"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
            >
              Features
            </a>
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
            >
              Documentation
            </a>
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
            >
              Pricing
            </a>
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
            >
              Blog
            </a>
            <div className="border-t border-border pt-4">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
              >
                Sign in
              </a>
              <a
                href="#"
                className="mt-2 block rounded-md bg-primary px-3 py-2 text-center text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
