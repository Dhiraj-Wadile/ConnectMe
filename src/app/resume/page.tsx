"use client"

import Link from "next/link"
import { personalInfo } from "@/data/resume"
import { Mail, Phone, MapPin, Globe, GitBranch, FileText, ArrowLeft } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black print:bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-0">
        <div className="mb-6 no-print">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
            <p className="text-lg text-gray-600 mt-1">{personalInfo.title}</p>
            <p className="text-sm text-gray-500 mt-1 max-w-xl">
              {personalInfo.headline}
            </p>
          </div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            Hire Me
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
          <span className="flex items-center gap-1.5">
            <Mail className="h-4 w-4" /> {personalInfo.email}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-4 w-4" /> {personalInfo.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" /> {personalInfo.location}
          </span>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline">
            <GitBranch className="h-4 w-4" /> Dhiraj-Wadile
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:underline">
            <Globe className="h-4 w-4" /> dhiraj-wadile
          </a>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-3 pb-1 border-b-2 border-black">About</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            Associate Software Engineer building and optimizing distributed microservices for a high-volume enterprise platform.
            Design and develop both frontend and backend features, analyze production issues, and enhance
            system reliability across global financial networks. Experienced in AI-driven solutions, document processing for KYC verification,
            and intelligent allocation systems. B.E. in Information Technology from PICT with 9.4 CGPA.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-3 pb-1 border-b-2 border-black">Experience</h2>

          <div className="mb-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Associate Software Engineer</h3>
                <p className="text-sm text-gray-600">Leading FinTech Company — Pune, India</p>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">July 2024 — Present</span>
            </div>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-gray-700 pl-4 relative">
                <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
                Engineered mission-critical microservices for a high-throughput enterprise transaction platform, processing millions of transactions daily.
              </li>
              <li className="text-sm text-gray-700 pl-4 relative">
                <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
                Developed and optimized both frontend and backend features while identifying and resolving production bugs.
              </li>
              <li className="text-sm text-gray-700 pl-4 relative">
                <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
                Collaborated with cross-functional teams to analyze production issues and implement effective fixes, strengthening system reliability.
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Software Development Engineer Intern</h3>
                <p className="text-sm text-gray-600">Reboot Lab — Bengaluru, India</p>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">July 2024 — Nov 2024</span>
            </div>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-gray-700 pl-4 relative">
                <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
                Developed a document processing system for extracting critical information from identity documents for KYC verification.
              </li>
              <li className="text-sm text-gray-700 pl-4 relative">
                <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
                Utilized Python, OCR techniques, and YOLOv8 model for text detection and data extraction with high accuracy.
              </li>
              <li className="text-sm text-gray-700 pl-4 relative">
                <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
                Enhanced image quality using OpenCV and deployed the service using Docker with Angular frontend.
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">Software Development Engineer Intern</h3>
                <p className="text-sm text-gray-600">Bitsolve Technologies — Pune, India</p>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">Feb 2024 — May 2024</span>
            </div>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-gray-700 pl-4 relative">
                <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
                Built an automated judge allocation system for PICT InC event platform managing 250+ judges and 1000+ projects.
              </li>
              <li className="text-sm text-gray-700 pl-4 relative">
                <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
                Reduced organizer effort by 5-6 hours through constraint-based smart allocation algorithms.
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-3 pb-1 border-b-2 border-black">Education</h2>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">Pune Institute of Computer Technology (PICT)</h3>
              <p className="text-sm text-gray-600">B.E. in Information Technology — CGPA: 9.41 / 10.0</p>
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">2021 — 2025</span>
          </div>
          <ul className="mt-2 space-y-1">
            <li className="text-sm text-gray-700 pl-4 relative">
              <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
              Top 5% of graduating class
            </li>
            <li className="text-sm text-gray-700 pl-4 relative">
              <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
              Published research on AI Agents, RAG systems, and inclusive communication technologies
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold mb-3 pb-1 border-b-2 border-black">Publications</h2>
          <ul className="space-y-2">
            <li className="text-sm text-gray-700 pl-4 relative">
              <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
              <strong>Smart Email for the Visually Impaired:</strong> A Voice-Enabled Approach to Digital Inclusion
            </li>
            <li className="text-sm text-gray-700 pl-4 relative">
              <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
              <strong>From Manual to Automated:</strong> Transforming Resource Allocation in Event Management
            </li>
            <li className="text-sm text-gray-700 pl-4 relative">
              <span className="absolute left-0 top-1.5 h-1 w-1 rounded-full bg-gray-400" />
              <strong>V-Mail:</strong> Bridging the Gap in Communication for the Visually Impaired
            </li>
          </ul>
        </div>

        <div id="skills" className="mb-8">
          <h2 className="text-lg font-bold mb-3 pb-1 border-b-2 border-black">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["Java", "Spring Boot", "Kafka", "gRPC", "PostgreSQL", "Docker", "Kubernetes",
              "Python", "YOLOv8", "OpenCV", "REST APIs", "Microservices", "Angular",
              "JWT", "Web Services API", "Agentic AI Development", "Git", "CI/CD"].map((skill) => (
              <span key={skill} className="text-xs px-2.5 py-1 bg-gray-100 rounded-full text-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12 no-print">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-sm rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Print / Save PDF
          </button>
        </div>
      </div>
    </div>
  )
}
