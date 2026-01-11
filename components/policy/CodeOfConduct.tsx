"use client";

import PolicyLayout from "./PolicyLayout";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiSlash,
  FiAward,
  FiClipboard,
  FiAlertOctagon,
  FiShield,
} from "react-icons/fi";

const conductRules = [
  {
    icon: <FiUsers />,
    title: "Respect & Inclusion",
    points: [
      "Treat all members, participants, and organizers with respect",
      "Inclusive behavior is expected regardless of background or skill level",
      "Professional conduct is required at all times",
    ],
  },
  {
    icon: <FiSlash />,
    title: "Zero Tolerance Policy",
    points: [
      "Harassment, discrimination, or bullying will not be tolerated",
      "Abusive language or behavior may lead to immediate action",
      "Any form of misconduct will be investigated seriously",
    ],
  },
  {
    icon: <FiAward />,
    title: "Fair Play & Integrity",
    points: [
      "Cheating, plagiarism, or unfair advantage is prohibited",
      "All submissions must be original unless stated otherwise",
      "Judging decisions are final and binding",
    ],
  },
  {
    icon: <FiClipboard />,
    title: "Event Compliance",
    points: [
      "Follow instructions provided by coordinators and volunteers",
      "Respect event schedules and deadlines",
      "Disruptive behavior may result in removal",
    ],
  },
  {
    icon: <FiAlertOctagon />,
    title: "Reporting Violations",
    points: [
      "Participants may report misconduct to the organizing team",
      "Reports will be handled confidentially",
      "False reports may lead to disciplinary action",
    ],
  },
  {
    icon: <FiShield />,
    title: "Enforcement",
    points: [
      "Violations may result in warnings, disqualification, or removal",
      "Serious breaches may lead to permanent restrictions",
      "Organizers reserve the right to take necessary action",
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

export default function CodeOfConduct() {
  return (
    <PolicyLayout title="Code of Conduct">
      {/* Intro */}
      <div className="mb-12 max-w-3xl text-gray-700 leading-relaxed">
        <p>
          Techtronica is committed to creating a safe, respectful, and inclusive
          environment for everyone. This Code of Conduct outlines the behavior
          expected from all participants, members, and organizers.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {conductRules.map((rule, index) => (
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
          By participating in any Techtronica activity, you agree to abide by
          this Code of Conduct. Failure to comply may result in appropriate
          disciplinary action.
        </p>
      </motion.div>
    </PolicyLayout>
  );
}
