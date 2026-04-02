import React from "react";
import { ProjectImages } from './assets/projects';
import { motion } from "framer-motion"; // Исправлено: в твоем package.json пакет называется framer-motion
import { 
  Github, 
  Linkedin, 
  Mail,
  ExternalLink,
  Code
} from "lucide-react";
import { Helmet } from 'react-helmet-async';

export default function App() {
  return (
    <>
      <Helmet>
        {/* Стандартные теги */}
        <title>BWS Studio | High-Performance Web Solutions & Auto Tech</title>
        <meta name="description" content="Expert full-stack development for automotive e-commerce. Specialized in WooCommerce, SEO automation, and Swiss-inspired minimalist design." />
        <meta name="keywords" content="web development, automotive e-commerce, React, Node.js, SEO automation, BWS Studio, Ukraine, Austria" />

        {/* Open Graph / Facebook (для красивых превью в соцсетях) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BWS Studio - Digital Product Engineering" />
        <meta property="og:description" content="Bridging the gap between stunning design and high-speed engineering." />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta property="og:url" content="https://your-domain.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BWS Studio | Web Solutions" />
      </Helmet>

      <div className="relative min-h-screen overflow-x-hidden bg-brand-black text-white">
      {/* Background Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <span className="text-[40vw] font-black text-white/3 tracking-tighter select-none">
          BWS.
        </span>
      </div>

      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-brand-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter">BWS.</a>
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-sm font-bold uppercase tracking-widest text-white/60">
              <li><a href="#projects" className="hover:text-brand-purple transition-colors">Projects</a></li>
              <li><a href="#stack" className="hover:text-brand-purple transition-colors">Stack</a></li>
              <li><a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] uppercase mb-12 tracking-tighter"
              >
                WEB SOLUTIONS<br />
                HIGH SPEED<br />
                AUTO TECH
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="https://www.upwork.com/freelancers/~010b12fa5379c4620f" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-brand-black font-black uppercase tracking-tighter text-xl border-2 border-white active:scale-95 transition-all hover:bg-brand-purple hover:border-brand-purple hover:text-white"
                >
                  HIRE ON UPWORK
                </a>
                <a 
                  href="#projects" 
                  className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent text-white font-black uppercase tracking-tighter text-xl border-2 border-white active:scale-95 transition-all hover:bg-white hover:text-brand-black"
                >
                  EXPLORE WORKS
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-20">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Selected Works</h2>
              <span className="text-brand-purple font-mono text-sm mb-2">[ 01 — 04 ]</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {/* 1. BARDAHL */}
              <ProjectCard 
                title="Bardahl Ukraine"
                category="Automotive / E-Commerce"
                image={ProjectImages.bardahl}
                demoUrl="https://bardahl-shop.com.ua/"
                description="High-performance e-commerce for premium motor oils. Built with focus on speed and SEO."
              />

              {/* 2. AUTOMALL */}
              <ProjectCard 
                title="Automall"
                category="Automotive / Marketplace"
                image={ProjectImages.automall}
                demoUrl="https://automall.in.ua/"
                description="Advanced automotive parts marketplace. Scalable infrastructure and technical SEO auditing."
              />

              {/* 3. BWS AGENCY */}
              <ProjectCard 
                title="BWS Studio"
                category="Agency / Digital Identity"
                image={ProjectImages.bws}
                demoUrl="https://bws-studio.github.io/portfolio"
                repoUrl="https://github.com/bws-studio/portfolio"
                description="Personal branding and agency site. Minimalist Swiss design meets high-speed React performance."
              />

              {/* 4. COMING SOON */}
              <ProjectCard 
                title="Next Project"
                category="Coming Soon / R&D"
                image={ProjectImages.soon}
                // demoUrl="#"
                description="Developing new automated SEO tools and performance dashboards for automotive clients."
                isSoon
              />
            </div>
          </div>
        </section>
{/* Tech Stack Section */}
<section id="stack" className="py-32 border-t border-white/10 bg-black">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-black tracking-tighter uppercase mb-16">Technical Capabilities</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* Твои новые топовые навыки */}
      <StackItem name="AI Agents" icon="🤖" label="Autonomous Systems" />
      <StackItem name="B2B Architecture" icon="🏗️" label="Scalable Systems" />
      
      {/* Базовый стек */}
      <StackItem name="React / Next.js" icon="⚛️" label="Frontend" />
      <StackItem name="WooCommerce" icon="🛒" label="E-commerce" />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
      <StackItem name="Node.js" icon="🟢" label="Backend" />
      <StackItem name="Python" icon="🐍" label="Automation" />
      <StackItem name="NGINX" icon="⚙️" label="Server Optimization" />
      <StackItem name="Technical SEO" icon="🐸" label="Performance" />
    </div>
  </div>
</section>
      </main>
      {/* Contact Section */}
<section id="contact" className="py-32 bg-black border-t border-white/10">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-5xl font-black tracking-tighter uppercase mb-6">Let's build <br/> the future.</h2>
        <p className="text-white/40 uppercase tracking-widest text-xs">Blitz Web Studio |  Ukraine</p>
      </div>
      
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-30 mb-2">Direct Line</p>
          <a href="tel:+380674862117" className="text-3xl font-bold hover:text-purple-500 transition-colors">
            +380 67 486 2117
          </a>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-30 mb-2">Inquiry</p>
          <a href="mailto:dobrocreate@gmail.com" className="text-3xl font-bold border-b border-white/20 hover:border-purple-500 transition-all">
            dobrocreate@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      <footer id="contact" className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-left">
      <p className="text-xl font-bold">BWS.</p>
      {/* Твое УТП здесь */}
      <p className="text-[10px] uppercase tracking-widest opacity-60 mt-1">
        WordPress & WooCommerce specialist | 20+ years of business logic
      </p>
    </div>
          <div className="flex gap-8">
            <a href="#" className="text-white/60 hover:text-white transition-colors"><Github /></a>
            <a href="#" className="text-white/60 hover:text-white transition-colors"><Linkedin /></a>
            <a href="mailto:dobrocreate@gmail.com" className="text-white/60 hover:text-white transition-colors"><Mail /></a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

function ProjectCard({ title, category, image, demoUrl, repoUrl, description, isSoon }: { 
  title: string, 
  category: string, 
  image: string,
  demoUrl?: string,
  repoUrl?: string,
  description: string,
  isSoon?: boolean
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group ${isSoon ? 'opacity-50' : ''}`}
    >
      <div className="relative aspect-video overflow-hidden border border-white/10 mb-6 bg-zinc-900">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
      
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-3xl font-black uppercase tracking-tighter">{title}</h3>
          <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mt-1">{category}</p>
        </div>
      </div>
      
      <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-md">
        {description}
      </p>

      {!isSoon && (
        <div className="grid grid-cols-2 gap-4">
          <a 
            href={demoUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 bg-white text-brand-black font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all hover:bg-brand-purple hover:text-white"
          >
            Live Site <ExternalLink size={14} />
          </a>
          {repoUrl ? (
            <a 
              href={repoUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 border border-white/20 text-white font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all hover:bg-white hover:text-brand-black"
            >
              Source Code <Code size={14} />
            </a>
          ) : (
            <div className="flex items-center justify-center gap-2 py-4 border border-white/5 text-white/20 font-black uppercase text-[10px] tracking-widest cursor-not-allowed">
              Private Repo
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

function StackItem({ name, icon, label }: { name: string, icon: string, label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 border border-white/10 hover:border-brand-purple transition-colors group">
      <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-xs font-bold uppercase tracking-widest text-white/60">{label || name}</span>
    </div>
  );
}