// lib/data/projects.ts

export type ProjectStatus = "ongoing" | "completed" | "upcoming";

export interface ProjectCredit {
  name: string;
  role: string;
  linkedin?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string[];
  working: string[];
  domain: string[];
  status: ProjectStatus;
  year: number;
  coverImage: string;
  images: string[]; // code / working screenshots
  credits: ProjectCredit[];
  repo?: string;
  liveDemo?: string;
}

export const projects: Project[] = [
  {
    id: "smart-energy-iot",
    title: "Smart Energy Monitoring System",
    shortDescription:
      "IoT-based system to monitor and optimize electrical energy consumption in real time.",
    detailedDescription: [
      "This project focuses on real-time monitoring of electrical energy consumption using IoT-enabled smart meters.",
      "The system collects voltage, current, and power data and uploads it to a cloud dashboard for analytics and visualization.",
    ],
    working: [
      "ESP32 collects sensor data from current and voltage sensors.",
      "Data is processed locally and sent to the cloud using MQTT.",
      "A web dashboard visualizes live and historical consumption trends.",
    ],
    domain: ["IoT", "Embedded Systems", "Energy"],
    status: "completed",
    year: 2024,
    coverImage: "/projects/energy/cover.jpg",
    images: [
      "/projects/energy/code1.png",
      "/projects/energy/code2.png",
      "/projects/energy/hardware.jpg",
    ],
    credits: [
      { name: "Rahul Sharma", role: "Project Lead" },
      { name: "Ankit Verma", role: "Embedded Developer" },
      { name: "Sneha Gupta", role: "Cloud & Dashboard" },
    ],
    repo: "https://github.com/techtronica/energy-monitor",
  },

  {
    id: "ai-traffic-prediction",
    title: "AI Traffic Density Prediction",
    shortDescription:
      "ML model to predict traffic density for smart city applications.",
    detailedDescription: [
      "This project uses historical traffic datasets to predict congestion levels using machine learning algorithms.",
      "The goal is to assist city planners in optimizing traffic signals and routes.",
    ],
    working: [
      "Traffic datasets are preprocessed and cleaned.",
      "ML models such as Random Forest and LSTM are trained.",
      "Predictions are visualized using charts and heatmaps.",
    ],
    domain: ["AI / ML", "Data Science"],
    status: "ongoing",
    year: 2025,
    coverImage: "/projects/traffic/cover.jpg",
    images: [
      "/projects/traffic/model.png",
      "/projects/traffic/results.png",
    ],
    credits: [
      { name: "Aman Singh", role: "ML Engineer" },
      { name: "Pooja Mehta", role: "Data Analyst" },
    ],
  },

  {
    id: "prediction",
    title: "AI Traffic Density Prediction",
    shortDescription:
      "ML model to predict traffic density for smart city applications.",
    detailedDescription: [
      "This project uses historical traffic datasets to predict congestion levels using machine learning algorithms.",
      "The goal is to assist city planners in optimizing traffic signals and routes.",
    ],
    working: [
      "Traffic datasets are preprocessed and cleaned.",
      "ML models such as Random Forest and LSTM are trained.",
      "Predictions are visualized using charts and heatmaps.",
    ],
    domain: ["AI / ML", "Data Science"],
    status: "upcoming",
    year: 2025,
    coverImage: "/projects/traffic/cover.jpg",
    images: [
      "/projects/traffic/model.png",
      "/projects/traffic/results.png",
    ],
    credits: [
      { name: "Aman Singh", role: "ML Engineer" },
      { name: "Pooja Mehta", role: "Data Analyst" },
    ],
  },
];
