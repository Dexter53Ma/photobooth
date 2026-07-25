"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuIcon, CloseIcon, PhoneIcon, MailIcon } from "@/components/icons";
import { BookingModal } from "./BookingModal";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Événements", href: "/photobooth-evenements" },
  { label: "Mariages", href: "/mariages" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white shadow-md"
            : "bg-white/90 backdrop-blur-md"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-[90px] max-md:h-[75px]">
          {/* Logo - BIG */}
          <Link href="/" aria-label="Marrakech PhotoBooths" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo%20header.webp"
              alt="Marrakech PhotoBooths"
              width={255}
              height={85}
              className={cn("w-auto transition-all duration-300 object-contain", scrolled ? "h-[70px] max-md:h-[58px]" : "h-[85px] max-md:h-[68px]")}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-[#1E1E2A] hover:text-[#FF0422] transition-colors font-suisse relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#FF0422] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+212621189496" className="text-[14px] font-suisse text-[#666] hover:text-[#FF0422] transition-colors">
              +212 6 21 18 94 96
            </a>
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-[#E00320] px-7 py-3 text-[15px] font-medium text-white transition-all hover:bg-[#C00218] hover:shadow-lg hover:shadow-[#E00320]/20 font-suisse btn-shine"
            >
              Réserver
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setBookingOpen(true)}
              className="rounded-full bg-[#E00320] px-5 py-3 text-[13px] font-medium text-white font-suisse min-h-[44px]"
            >
              Réserver
            </button>
            <button
              type="button"
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <MenuIcon size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-all duration-300",
          mobileOpen ? "visible" : "invisible"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn("absolute inset-0 bg-black/60 transition-opacity duration-300", mobileOpen ? "opacity-100" : "opacity-0")}
          onClick={() => setMobileOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-white flex flex-col transition-transform duration-300 ease-out shadow-2xl",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo%20header.webp" alt="Marrakech PhotoBooths" width={255} height={85} loading="lazy" className="h-[50px] w-auto object-contain" />
            <button
              type="button"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Fermer"
            >
              <CloseIcon size={24} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center py-3.5 px-4 text-[16px] font-medium text-[#1E1E2A] hover:bg-[#F8F8F8] hover:text-[#FF0422] rounded-xl transition-all duration-200 font-suisse"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Sidebar footer */}
          <div className="border-t border-gray-100 p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <a href="tel:+212621189496" className="flex items-center gap-3 text-[14px] font-suisse text-[#666] hover:text-[#FF0422] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <PhoneIcon size={14} />
                </div>
                +212 6 21 18 94 96
              </a>
              <a href="mailto:contact@marrakechphotobooth.com" className="flex items-center gap-3 text-[14px] font-suisse text-[#666] hover:text-[#FF0422] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <MailIcon size={14} />
                </div>
                contact@marrakechphotobooth.com
              </a>
            </div>
            <button
              onClick={() => { setMobileOpen(false); setBookingOpen(true); }}
              className="w-full rounded-full bg-[#E00320] py-3.5 text-[16px] font-medium text-white font-suisse hover:bg-[#C00218] transition-colors"
            >
              Réserver maintenant
            </button>
          </div>
        </div>
      </div>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
