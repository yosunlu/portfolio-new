import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import onlymemesImg from "@/public/onlymemes.png";
import taiwaniaImg from "@/public/taiwania.png";
import eventoImg from "@/public/evento.png";
import taiwansaysImg from "@/public/taiwansays.png";
import remoteDevImg from "@/public/remoteDev.png";
import osImg from "@/public/os.png";
import dbImg from "@/public/db.png";
import bigDB from "@/public/bigData.png";
import DB764Img from "@/public/764.png";

export const links = [
  {
    display: "•",
    name: "About",
    hash: "#about",
  },
  {
    display: "•",
    name: "Projects",
    hash: "#projects",
  },
  {
    display: "•",
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Taiwania",
    description:
      "Explore this Taiwanese proverb and everyday language dictionary, enhanced with LLM support and built on AWS services. Discover and filter content by the tags that interest you the most!",
    tags: ["React", "express", "postgresql", "CI/CD", "langchain", 'RDS', "ECS"],
    imageUrl: taiwaniaImg,
    URL: "https://taiwania.co",
    githubUrl: "https://github.com/yosunlu/taiwania-backend",
    
  },
  {
    title: "Onlymemes",
    description:
      "Full-stack video processing service that allows user to sign in with google account and upload their favorite meme videos. NOT some random youtube clone!",
    tags: ["TypeScript", "React", "Node", "Firebase", "GCP"],
    imageUrl: onlymemesImg,
    URL: "https://onlememes.web.app",
    githubUrl: "https://github.com/yosunlu/OnlyMemes",
  },
  {
    title: "Evento",
    description:
      "Explore Evento, a platform to discover and explore events across cities. Enjoy a seamless user experience and find the perfect event with just a few clicks!",
    tags: ["React","Typescipt", "Tailwind CSS", "Prisma"],
    imageUrl: eventoImg,
    URL: "https://evento-vqpw.vercel.app",
    githubUrl: "https://github.com/yosunlu/evento",
  },

  {
    title: "Taiwansays",
    description:
      "Teaches foreigners authentic Mandarin usage in Taiwan. Users can also contribute their own examples of how Mandarin is used locally.",
    tags: ["MONGODB","Javascript", "HTML", "CSS"],
    imageUrl: taiwansaysImg,
    URL: "https://yosunlu.github.io/taiwan-says/",
    githubUrl: "https://github.com/yosunlu/taiwan-says",
  }
  ,

  {
    title: "RemoteDev",
    description:
      "Job search application that allows users to search for jobs using keywords (such as JavaScript, Python) and bookmark their preferred jobs.",
    tags: ["Javascript", "HTML", "CSS"],
    imageUrl: remoteDevImg,
    URL: "https://yosunlu.github.io/rmtdev/",
    githubUrl: "https://github.com/yosunlu/rmtdev",
  },
] as const;

export const coursesData = [
  {
    title: "Operating Systems",
    description:
      "Projects completed for CS537: Operating Systems. Cover key aspects of OS, including system calls, scheduling algorithms, memory management, parallel processing, and file systems.",
    tags: ["C", "CLI", "Pthreads", "Scheduling Algorithms", "File Recovery", "UNIX Shell"],
    imageUrl: osImg,
    githubUrl: "https://github.com/yosunlu/UW-Madison-Operating-Systems",
    URL:""
  },
  {
    title: "DBMS",
    description:
      "Projects completed for CS564: Database Management Systems. Cover essential topics like SQL, ER modeling, buffer management, heapfile management, and query optimization.",
    tags: ["C++", "Python", "SQL"],
    imageUrl: dbImg,
    githubUrl: "https://github.com/yosunlu/UW-Madison-Database-Management-Systems",
    URL:""
  },
  {
    title: "Big Data Systems",
    description:
      "Project completed for CS544: Big Data Systems. A Cassandra-based Weather Data Platform that collects weather data from NOAA, stores this data in Cassandra, writes a server for data collection, and analyzes the collected data via Spark.",
    tags: ["Cassandra", "Spark", "gRPC", "Docker", "Python"],
    imageUrl: bigDB,
    githubUrl: "https://github.com/yosunlu/Cassandra-Based-Weather-Data-Platform",
    URL:""
  },
  {
    title: "Topics in Database Management Systems",
    description:
      "Project completed for CS764: Advanced DB. Emulates SSD, HDD, CPU, and DRAM and implemented an external merge sort, capable of sorting self-generated 120 GB of data, consists of 120 millions of 1KB entries",
    tags: ["C++", "Quicksort", "Tournament trees", " Offset-value coding"],
    imageUrl: DB764Img,
    githubUrl: "https://github.com/yosunlu/External-Merge-Sort",
    URL:""
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