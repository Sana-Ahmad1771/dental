"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/scrollbar";

const services = [
  {
    id: 1,
    title: "GLEAMFIT ALIGNERS",
    description: "3D scan, bite analysis, and custom aligner treatment.",
    btn: "BOOK CONSULTATION",
    img: "/images/glame.jpg",
  },
  {
    id: 2,
    title: "ADVANCED WHITENING",
    description: "Dentist-developed gel whitening treatment.",
    btn: "BOOK WHITENING",
    img: "/images/white-teeth.jpg",
  },
  {
    id: 3,
    title: "AIRFLOW® CLEANING",
    description: "Powerful clean. Comfort-first tech. Gentle by design.",
    btn: "BOOK CLEANING",
    img: "/images/cleaning.jpg",
  },
  {
    id: 4,
    title: "GLEAM EXAM & X-RAYS",
    description: "Advanced oral exam and comprehensive imaging.",
    btn: "BOOK EXAM & X-RAYS",
    img: "/images/oralexam.jpg",
  },
  {
    id: 5,
    title: "GLEAMGUARD",
    description: "The custom nightguard that protects your smile.",
    btn: "BOOK GLEAMGUARD",
    img: "/images/guard.jpg",
  },
  {
    id: 6,
    title: "ANTICAVITY",
    description: "NO drills. NO needles. Non-invasive cavity treatment.",
    btn: "BOOK ANTICAVITY",
    img: "/images/anticavity.jpg",
  },
];

export default function SmileCareSectionTwo() {
  return (
    <section className="relative bg-linear-to-b from-white via-[#f3fcfc] to-[#e6f8f9] py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Smile Care, Redefined
          </h2>
          <p className="text-secondary/80 text-lg max-w-2xl mx-auto">
            Discover comprehensive dental solutions — precision, comfort, and
            care in every treatment.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Scrollbar]}
          slidesPerView={"auto"}
          spaceBetween={28}
          scrollbar={{
            el: ".custom-scrollbar",
            draggable: true,
          }}
          grabCursor
          className="cards-swiper"
        >
          {services.map((service) => (
            <SwiperSlide
              key={service.id}
              className="w-[290px]! sm:w-[320px]! bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-semibold text-secondary mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary/70 text-center grow">
                  {service.description}
                </p>

                <button className="mt-6 bg-primary hover:bg-accent text-white text-sm font-medium py-2.5 px-5 rounded-full transition-all duration-300 shadow-md mx-auto">
                  {service.btn}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Scrollbar */}
        <div className="custom-scrollbar mt-8 mx-auto"></div>
      </div>

      {/* Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar {
          width: 60%;
          height: 4px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          position: relative;
        }
        .swiper-scrollbar-drag {
          background: var(--color-primary);
          border-radius: 10px;
          cursor: grab;
          transition: background 0.3s ease;
        }
        .swiper-scrollbar-drag:hover {
          background: var(--color-accent);
        }
      `}</style>
    </section>
  );
}
