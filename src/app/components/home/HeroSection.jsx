"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/hero-11.jpg",
    titleLine1: "Creating Bright Smiles",
    titleLine2: "with Gentle Dental Care",
    desc: "Providing trusted, pain-free dental treatments for all ages — because every smile deserves care.",
    btnText: "Book Appointment",
    btnLink: "/appointment",
    align: "left",
  },
  {
    id: 2,
    image: "/images/hero-22.jpg",
    titleLine1: "Modern Dentistry",
    titleLine2: "with a Personal Touch",
    desc: "Experience advanced dental care powered by technology, guided by compassion.",
    btnText: "Learn More",
    btnLink: "/about",
    align: "right",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section
      className="relative w-full overflow-hidden group"
      style={{ minHeight: "calc(100vh - 100px)" }}
    >
      {/* === Swiper === */}
      <Swiper
        modules={[Autoplay, Navigation, EffectFade, Pagination]}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        loop
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        pagination={{
          el: ".hero-pagination",
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[calc(100vh-100px)] flex items-center overflow-hidden">
              {/* Background Image */}
              <motion.div
                initial={{ scale: 1.2 }}
                animate={{
                  scale: activeIndex === index ? 1 : 1.1,
                  y: activeIndex === index ? 0 : -20,
                }}
                transition={{ duration: 6, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 ${
                  slide.align === "left"
                    ? "bg-linear-to-r from-primary/90 via-primary/50 to-transparent"
                    : slide.align === "right"
                    ? "bg-linear-to-l from-primary/90 via-primary/50 to-transparent"
                    : "bg-primary/60"
                }`}
              ></div>

              {/* Content */}
              <div className="relative z-10 w-full">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 flex">
                  <div
                    className={`${
                      slide.align === "left"
                        ? "ml-0 mr-auto text-left"
                        : slide.align === "right"
                        ? "ml-auto mr-0 text-left"
                        : "mx-auto text-center"
                    } max-w-[600px] lg:max-w-[750px]`}
                  >
                    {/* Heading */}
                    <motion.h1
                      key={slide.titleLine1}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold leading-[1.1] tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
                    >
                      {slide.titleLine1}
                      <br />
                      <span className="block text-white/90">
                        {slide.titleLine2}
                      </span>
                    </motion.h1>

                    {/* Accent Line */}
                    {/* <div className="w-20 h-[3px] bg-secondary t-4 mb-6 rounded-full"></div> */}

                    {/* Description */}
                    <motion.p
                      key={slide.desc}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="text-white/90 mt-2 text-base sm:text-lg md:text-xl leading-relaxed"
                    >
                      {slide.desc}
                    </motion.p>

                    {/* Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      <button className="mt-8 cursor-pointer inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-secondary hover:text-white transition-all duration-300">
                        {slide.btnText}
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*  Persistent Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex justify-between items-center px-4 md:px-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-4 bg-white/70 text-primary border border-secondary rounded-full hover:bg-accent hover:text-white transition-all duration-300"
        >
          <FaAngleLeft size={22} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-4 bg-white/70 text-primary border border-secondary rounded-full hover:bg-accent hover:text-white transition-all duration-300"
        >
          <FaAngleRight size={22} />
        </button>
      </div>
    </section>
  );
}
