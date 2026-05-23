import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Check, 
  Info,
  ShieldAlert
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { projectsData } from "@/data/projects";

// Generate paths for static generation
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

// Fetch project by ID (Synchronous as data is static local array)
function getProject(id: string) {
  return projectsData.find((p) => p.id === id);
}

// Next.js page metadata config
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Project Not Found | CEBPL" };
  
  return {
    title: `${project.title} | CEBPL Case Study`,
    description: `Technical analysis, operational challenges, and solutions for the ${project.title} executed by CEBPL.`,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white relative">
      <Navbar />

      {/* Header Banner */}
      <section className="relative py-20 border-b border-brand-dark-border overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs text-brand-blue hover:text-white font-bold uppercase tracking-wider mb-6 group transition-colors animate-fade-in"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>
          <div className="space-y-4">
            <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider border border-brand-gold/20 px-3 py-1 rounded">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white max-w-4xl leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project content section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Main Content Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-display text-white border-l-4 border-brand-blue pl-4">
                Project Overview
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* 2. Challenges & Solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-brand-dark-card border border-brand-dark-border p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full filter blur-xl pointer-events-none" />
              
              <div className="space-y-4">
                <h3 className="text-base font-bold font-display text-brand-gold flex items-center gap-1.5">
                  <ShieldAlert size={18} />
                  Operational Challenges
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="space-y-4 border-t sm:border-t-0 sm:border-l border-brand-dark-border pt-6 sm:pt-0 sm:pl-8">
                <h3 className="text-base font-bold font-display text-brand-blue flex items-center gap-1.5">
                  <Check size={18} />
                  CEBPL Solutions
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {project.solutions}
                </p>
              </div>
            </div>

            {/* 3. Detailed Scope of Work */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-display text-white border-l-4 border-brand-blue pl-4">
                Detailed Scope of Work
              </h2>
              <ul className="space-y-3.5">
                {project.scopeOfWork.map((scope, index) => (
                  <li key={index} className="flex gap-3 text-sm text-gray-300 items-start leading-relaxed bg-brand-dark-card/30 border border-brand-dark-border/50 p-4 rounded-xl">
                    <span className="w-6 h-6 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center font-display font-extrabold text-xs shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{scope}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Summary Panel Column */}
          <div className="lg:col-span-4 bg-brand-dark-card border border-brand-dark-border p-6 rounded-xl space-y-6 relative overflow-hidden glow-blue self-start">
            <h3 className="text-lg font-bold font-display text-white border-b border-brand-dark-border pb-4 flex items-center gap-2">
              <Info size={18} className="text-brand-blue" />
              Technical Briefing
            </h3>
            
            <div className="space-y-4 text-xs">
              <div className="flex justify-between items-center py-2 border-b border-brand-dark-border/40">
                <span className="text-gray-500 font-medium">Client</span>
                <span className="text-gray-300 font-semibold text-right max-w-[200px] line-clamp-1">{project.client}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-brand-dark-border/40">
                <span className="text-gray-500 font-medium">Location</span>
                <span className="text-gray-300 font-semibold">{project.location}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-brand-dark-border/40">
                <span className="text-gray-500 font-medium">Commissioned</span>
                <span className="text-gray-300 font-semibold">{project.completionDate}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-brand-dark-border/40">
                <span className="text-gray-500 font-medium">Category</span>
                <span className="text-brand-gold font-bold uppercase tracking-wider">{project.category}</span>
              </div>
            </div>

            {/* Metrics Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Field Execution Metrics
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {project.stats.map((metric, idx) => (
                  <div key={idx} className="bg-brand-dark border border-brand-dark-border p-3 rounded-lg text-center">
                    <p className="text-[10px] text-gray-500 uppercase font-medium">{metric.label}</p>
                    <p className="text-xs font-extrabold text-white mt-1 font-display">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick Contact Desk */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider text-center block transition-all shadow-md hover:shadow-brand-blue/20"
              >
                Inquire About Similar Scope
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
