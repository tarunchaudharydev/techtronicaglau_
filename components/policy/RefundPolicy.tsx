"use client";

import PolicyLayout from "./PolicyLayout";
import { motion } from "framer-motion";
import {
  FiRefreshCcw,
  FiXCircle,
  FiClock,
  FiAlertCircle,
  FiInfo,
} from "react-icons/fi";

const refundRules = [
  {
    icon: <FiRefreshCcw />,
    title: "Eligibility for Refunds",
    points: [
      "Refunds are applicable only if an event is canceled by Techtronica",
      "Refund eligibility may vary based on the nature of the event",
      "Registration fees once paid are generally non-refundable",
    ],
  },
  {
    icon: <FiXCircle />,
    title: "Non-Refundable Cases",
    points: [
      "No refund after successful registration or participation",
      "Absence or non-attendance does not qualify for a refund",
      "Disqualification due to misconduct is non-refundable",
    ],
  },
  {
    icon: <FiClock />,
    title: "Refund Processing Timeline",
    points: [
      "Approved refunds are processed within 7–10 working days",
      "Refunds are issued via the original payment method",
      "Delays may occur due to banking or technical issues",
    ],
  },
  {
    icon: <FiAlertCircle />,
    title: "Event Cancellations",
    points: [
      "Events may be canceled due to unforeseen circumstances",
      "Participants will be notified through official channels",
      "Techtronica reserves the right to reschedule events",
    ],
  },
  {
    icon: <FiInfo />,
    title: "Important Notes",
    points: [
      "Processing charges, if any, are non-refundable",
      "Refund policies may differ for special events",
      "Decisions regarding refunds are final",
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

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Refund & Cancellation Policy">
      {/* Intro */}
      <div className="mb-12 max-w-3xl text-gray-700 leading-relaxed">
        <p>
          This Refund & Cancellation Policy outlines the terms under which
          refunds may be issued for Techtronica events and activities.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {refundRules.map((rule, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50
                       p-6 border border-indigo-100 shadow-sm hover:shadow-xl
                       transition-shadow"
          >
            {/* Icon */}
            <div className="mb-4 text-3xl text-indigo-600">{rule.icon}</div>

            {/* Title */}
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              {rule.title}
            </h3>

            {/* Points */}
            <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
              {rule.points.map((point, i) => (
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
          Techtronica reserves the right to update this Refund & Cancellation
          Policy at any time. For refund-related queries, contact{" "}
          <strong>techtronica@gla.ac.in</strong>.
        </p>
      </motion.div>
    </PolicyLayout>
  );
}
