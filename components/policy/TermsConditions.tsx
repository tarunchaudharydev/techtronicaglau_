"use client";

import PolicyLayout from "./PolicyLayout";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiAlertTriangle,
  FiEdit,
  FiCamera,
  FiShield,
  FiInfo,
} from "react-icons/fi";

const terms = [
  {
    icon: <FiCheckCircle />,
    title: "Participation & Eligibility",
    points: [
      "Participation in Techtronica events is completely voluntary",
      "Students must provide accurate information during registration",
      "Participants must meet eligibility criteria specified for each event",
    ],
  },
  {
    icon: <FiAlertTriangle />,
    title: "Code of Conduct & Fair Use",
    points: [
      "Misconduct, plagiarism, or unethical behavior is strictly prohibited",
      "Violation of rules may lead to disqualification without refund",
      "Participants must follow instructions from organizers",
    ],
  },
  {
    icon: <FiEdit />,
    title: "Event Modifications",
    points: [
      "Techtronica reserves the right to modify event schedules or formats",
      "Changes may be communicated via email or official channels",
      "Event cancellation decisions are final",
    ],
  },
  {
    icon: <FiCamera />,
    title: "Media & Content Usage",
    points: [
      "Photos and videos may be captured during events",
      "Media may be used for promotional and educational purposes",
      "Participants grant consent by attending events",
    ],
  },
  {
    icon: <FiShield />,
    title: "Limitation of Liability",
    points: [
      "Techtronica is not responsible for personal loss or damage",
      "Participants are responsible for their own equipment",
      "External factors beyond control are not our liability",
    ],
  },
  {
    icon: <FiInfo />,
    title: "Acceptance of Terms",
    points: [
      "By registering, participants agree to these terms",
      "Terms apply to all online and offline events",
      "Continued participation implies acceptance of updates",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function TermsConditions() {
  return (
    <PolicyLayout title="Terms & Conditions">
      {/* Intro */}
      <div className="mb-12 max-w-3xl text-gray-700 leading-relaxed">
        <p>
          These Terms & Conditions govern participation in Techtronica events,
          workshops, and activities. Please read them carefully before
          registering.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {terms.map((term, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50
                       p-6 border border-indigo-100 shadow-sm hover:shadow-xl
                       transition-shadow"
          >
            {/* Icon */}
            <div className="mb-4 text-3xl text-indigo-600">{term.icon}</div>

            {/* Title */}
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              {term.title}
            </h3>

            {/* Points */}
            <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
              {term.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 rounded-xl bg-gray-100 p-6 border"
      >
        <p className="text-gray-700">
          Techtronica reserves the right to update these Terms & Conditions at
          any time. Continued participation constitutes acceptance of the
          revised terms.
        </p>
      </motion.div>
    </PolicyLayout>
  );
}
