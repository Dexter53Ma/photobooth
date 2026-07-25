"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { EventsTags } from "@/components/EventsTags";
import { ProductsCarousel } from "@/components/ProductsCarousel";
import { ClientsSection } from "@/components/ClientsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

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
