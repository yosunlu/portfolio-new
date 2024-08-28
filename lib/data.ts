import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import onlymemesImg from "@/public/onlymemes.png";
import externalImg from "@/public/external.png";
import othelloImg from "@/public/othello.png";
import portfolioImg from "@/public/portfolio.png";
import cassandraImg from "@/public/Cassandra.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  { 
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Onlymemes",
    description:
      "Full-stack video processing service that allows user to sign in with google account and upload their favorite meme videos. NOT some random youtube clone!",
    tags: ["TypeScript", "React.js", "Node.js", "Firebase"],
    imageUrl: onlymemesImg,
  },
  {
    title: "Othello AI",
    description:
      "Full-stack online board game that leverages Alpha-beta pruning and MonteCarlo tree search algorithms to enable PvP and step-optimization features.",
    tags: ["Python", "MySQL", "FastAPI", "Pytest", 'Docker'],
    imageUrl: othelloImg,
  },
  {
    title: "Portfolio",
    description:
      "This beautiful portfolio.",
    tags: ["Next.js","Typescipt", "React.js", "Framer motion", "Tailwind CSS"],
    imageUrl: portfolioImg,
  },

  {
    title: "Cassandra-based Weather Data Platform",
    description:
      "Collects weather data from NOAA, stores this data in Cassandra, writes a server for data collection, and analyzes the collected data via Spark.",
    tags: ["Cassandra", "Spark"],
    imageUrl: cassandraImg,
  }
  ,

  {
    title: "Large Scale External Merge Sort",
    description:
      "Implements an external merge sort and emulates SSD, HDD, CPU, and DRAM to sort 120 GB of data.",
    tags: [],
    imageUrl: externalImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "Framer Motion",
  "Docker",
  "Cassandra",
  "Spark",
  "HDFS",
  "Kafka",
] as const;