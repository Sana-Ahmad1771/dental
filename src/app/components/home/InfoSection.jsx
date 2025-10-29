"use client";
import { motion } from "framer-motion";
import {
  FaHeartPulse,
  FaTooth,
  FaBolt,
  FaUserDoctor,
} from "react-icons/fa6";

const features = [
  {
    id: 1,
    icon: <FaHeartPulse className="text-4xl text-primary" />,
    title: "Cardiac Care",
    description: "Comprehensive heart checkups and treatments.",
  },
  {
    id: 2,
    icon: <FaTooth className="text-4xl text-primary" />,
    title: "Dental Care",
    description: "Advanced dental treatments and hygiene services.",
  },
  {
    id: 3,
    icon: <FaBolt className="text-4xl text-primary" />,
    title: "Emergency",
    description: "24/7 emergency services available anytime.",
  },
  {
    id: 4,
    icon: <FaUserDoctor className="text-4xl text-primary" />,
    title: "Expert Doctors",
    description: "Experienced doctors with international expertise.",
  },
];

const InforSection = () => {
  return (
    <section className="py-16 relative bg-primary">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 xl:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="bg-white shadow-lg rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg text-secondary font-semibold mb-2">{feature.title}</h3>
            <p className="text-paragraph text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
       
    </section>
  );
};

export default InforSection;
