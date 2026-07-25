"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";

const ServicesSection = dynamic(() => import("@/components/ServicesSection"), { ssr: false });
const ProcessSteps = dynamic(() => import("@/components/ProcessSteps").then(m => ({ default: m.ProcessSteps })), { ssr: false });
const EventsTags = dynamic(() => import("@/components/EventsTags").then(m => ({ default: m.EventsTags })), { ssr: false });
const ProductsCarousel = dynamic(() => import("@/components/ProductsCarousel").then(m => ({ default: m.ProductsCarousel })), { ssr: false });
const ClientsSection = dynamic(() => import("@/components/ClientsSection").then(m => ({ default: m.ClientsSection })), { ssr: false });
const FAQSection = dynamic(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection").then(m => ({ default: m.ContactSection })), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer").then(m => ({ default: m.Footer })), { ssr: false });

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
        <main className="pt-[90px] max-md:pt-[75px]">
        <HeroSection />
        <div className="reveal"><AboutSection /></div>
        <div className="reveal"><ServicesSection /></div>
        <div className="reveal"><ProcessSteps /></div>
        <div className="reveal"><EventsTags /></div>
        <div className="reveal"><ProductsCarousel /></div>
        <div className="reveal"><ClientsSection /></div>
        <div className="reveal"><FAQSection /></div>
        <div className="reveal"><ContactSection /></div>
      </main>
      <Footer />
    </div>
  );
}
