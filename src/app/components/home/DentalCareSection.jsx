"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DentalCareSection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden border-t border-neutral/30">
      {/*  Gradient Background Tint for Depth */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-primary/5 border-b border-gray-200 z-0"></div>

      {/*  Top Right Decorative Image */}
      <div className="absolute top-0 right-0 opacity-90">
        <div className="relative w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px] image-soft-overlay">
          <Image
            src="/images/hero-33.jpg"
            alt="Smiling patient"
            width={600}
            height={400}
            className="rounded-tl-[120px] object-cover brightness-90 saturate-[0.95]"
          />
          {/* Soft gradient overlay for balance */}
          <div className="absolute inset-0 bg-linear-to-l from-white/70 via-white/30 to-transparent rounded-tl-[120px]" />
        </div>
      </div>

      {/*  Bottom Left Decorative Image */}
      <div className="absolute bottom-0 left-0 opacity-90">
        <div className="relative w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px] image-soft-overlay">
          <Image
            src="/images/hero-33.jpg"
            alt="Dental tools"
            width={600}
            height={400}
            className="rounded-tr-[120px] object-cover brightness-90 saturate-[0.9]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white/70 via-muted/40 to-transparent rounded-tr-[120px]" />
        </div>
      </div>

      {/*  Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.25em] uppercase text-accent font-semibold mb-4 inline-block"
        >
          Advanced Dental Care
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-secondary text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
        >
          Your Smile,{" "}
          <span className="text-primary">Our Passion</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary/90 mb-6"
        >
          Healthy Teeth. Happy Life.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-paragraph text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          From cleanings to cosmetic treatments — we provide expert, gentle care
          that helps you smile with confidence again. Our approach blends
          precision, comfort, and compassion for every patient.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-secondary hover:text-white transition-all duration-300"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
