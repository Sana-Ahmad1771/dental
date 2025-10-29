"use client";
import { FaTooth, FaUniversity, FaUsers, FaMedal } from "react-icons/fa";

export default function StatsSection() {
  const stats = [
    {
      icon: <FaTooth className="text-white text-3xl" />,
      value: 500,
      label: "+ Project Done",
    },
    {
      icon: <FaUniversity className="text-white text-3xl" />,
      value: 250,
      label: "+ Satisfied Clients",
    },
    {
      icon: <FaUsers className="text-white text-3xl" />,
      value: 120,
      label: "+ Active Experts",
    },
    {
      icon: <FaMedal className="text-white text-3xl" />,
      value: 50,
      label: "+ Experience Years",
    },
  ];

  return (
    <section className="bg-primary py-10">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-transparent border border-white/30 rounded-xl w-full lg:w-1/4 py-8 transition-transform hover:scale-105"
          >
            <div className="bg-secondary p-5 rounded-full mb-4 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-4xl font-bold text-white mb-1">{item.value}</h3>
            <p className="text-white font-medium opacity-90">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
