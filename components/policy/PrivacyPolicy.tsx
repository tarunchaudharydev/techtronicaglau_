"use client";

import PolicyLayout from "./PolicyLayout";
import { motion } from "framer-motion";
import { FiUser, FiTarget, FiLock, FiShield, FiInfo } from "react-icons/fi";

const sections = [
  {
    icon: <FiUser />,
    title: "Information We Collect",
    items: [
      "Name, email address, and phone number",
      "Academic and college-related details",
      "Technical data such as IP address and browser type",
    ],
  },
  {
    icon: <FiTarget />,
    title: "How We Use Your Data",
    items: [
      "Event registrations and confirmations",
      "Certificates and official communication",
      "Improving events and website experience",
    ],
  },
  {
    icon: <FiInfo />,
    title: "Cookies & Tracking",
    items: [
      "Analyze website traffic and performance",
      "Enhance usability and functionality",
      "No sensitive personal data is stored",
    ],
  },
  {
    icon: <FiLock />,
    title: "Data Security",
    items: [
      "Reasonable technical and organizational safeguards",
      "Restricted internal access to user data",
      "Complete security cannot be guaranteed",
    ],
  },
  {
    icon: <FiShield />,
    title: "Your Rights",
    items: [
      "Request access to your personal data",
      "Request correction or deletion",
      "Withdraw consent for communication",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <div className="mb-10 flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
        <span>
          <strong>Effective Date:</strong> 1 January 2026
        </span>
        <span>
          <strong>Last Updated:</strong> 8 January 2026
        </span>
      </div>

      <div className="mb-12 max-w-3xl text-gray-700 leading-relaxed">
        <p>
          Techtronica respects your privacy. This policy explains how we
          collect, use, and protect your personal information across our
          website, events, and services.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50
                       p-6 border border-indigo-100 shadow-sm hover:shadow-xl
                       transition-shadow"
          >
            <div className="mb-4 text-3xl text-indigo-600">{section.icon}</div>

            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              {section.title}
            </h3>

            <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 rounded-xl bg-gray-100 p-6 border"
      >
        <p className="text-gray-700">
          We do <strong>not</strong> sell, trade, or rent your personal data to
          third parties. For privacy-related concerns, contact us at{" "}
          <strong>techtronica@gla.ac.in</strong>.
        </p>
      </motion.div>
    </PolicyLayout>
  );
}
