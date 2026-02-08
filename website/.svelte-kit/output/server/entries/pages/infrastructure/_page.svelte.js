import { a4 as head, a0 as ensure_array_like, $ as attr_class, _ as attr, a1 as stringify, Z as attr_style } from "../../../chunks/index2.js";
import { s as siteConfig, i as infrastructureSolutions } from "../../../chunks/data.js";
import { S as Section } from "../../../chunks/Section.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1e39h6k", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Smart Infrastructure — ${escape_html(siteConfig.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Discover UrbanPulse's smart infrastructure solutions: intelligent transportation, smart energy grids, water management, and structural health monitoring."/> <meta name="author"${attr("content", siteConfig.author)}/> <meta name="generator"${attr("content", siteConfig.credit)}/> <meta property="og:title"${attr("content", `Smart Infrastructure — ${stringify(siteConfig.name)}`)}/> <meta property="og:description" content="Intelligent transportation, smart energy grids, water management, and structural health monitoring powered by AI."/> <meta property="og:type" content="website"/> <meta property="og:image" content="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200&amp;h=630&amp;fit=crop"/>`);
    });
    $$renderer2.push(`<section class="bg-hero-gradient relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"><div class="hero-grid absolute inset-0"></div> <div class="glow-orb bg-primary-500 w-96 h-96 -top-20 -right-20 absolute"></div> <div class="glow-orb bg-accent-400 w-56 h-56 bottom-10 left-1/4 absolute"></div> <div class="relative z-10 mx-auto max-w-7xl px-6"><div class="max-w-3xl"><div class="fade-up mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-primary-300 backdrop-blur-sm border border-white/10">🏗️ Smart Infrastructure</div> <h1 class="fade-up text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">Infrastructure That <span class="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Thinks Ahead</span></h1> <p class="fade-up mt-6 max-w-2xl text-lg text-neutral-300 leading-relaxed">From self-healing water networks to AI-optimized traffic corridors, our smart infrastructure solutions transform passive urban systems into intelligent, adaptive ecosystems that anticipate problems and optimize performance in real-time.</p> <div class="fade-up mt-8"><a href="/contact" class="btn btn-primary">Schedule a Consultation <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a></div></div></div></section> <section class="py-20 lg:py-28" aria-label="Infrastructure solutions"><div class="mx-auto max-w-7xl px-6"><div class="space-y-24"><!--[-->`);
    const each_array = ensure_array_like(infrastructureSolutions);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let solution = each_array[i];
      $$renderer2.push(`<div${attr_class(`grid items-center gap-12 lg:grid-cols-2 ${stringify(i % 2 === 1 ? "lg:direction-rtl" : "")}`)}><div${attr_class(`${stringify(i % 2 === 1 ? "lg:order-2" : "")} fade-${stringify(i % 2 === 0 ? "left" : "right")}`)}><img${attr("src", solution.image)}${attr("alt", solution.title)} class="rounded-2xl shadow-elevated" width="800" height="500" loading="lazy"/></div> <div${attr_class(`${stringify(i % 2 === 1 ? "lg:order-1" : "")} fade-${stringify(i % 2 === 0 ? "right" : "left")}`)}><h2 class="text-3xl font-bold text-neutral-900">${escape_html(solution.title)}</h2> <p class="mt-4 text-lg leading-relaxed text-neutral-600">${escape_html(solution.description)}</p> <p class="mt-3 text-neutral-500 leading-relaxed">${escape_html(solution.details)}</p> <div class="mt-6 flex flex-wrap gap-3"><!--[-->`);
      const each_array_1 = ensure_array_like(solution.stats);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let stat = each_array_1[$$index];
        $$renderer2.push(`<span class="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 border border-primary-100">${escape_html(stat)}</span>`);
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> `);
    Section($$renderer2, {
      title: "Technology Stack",
      subtitle: "Our infrastructure solutions are built on a robust, scalable technology foundation designed for mission-critical urban operations.",
      dark: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        const each_array_2 = ensure_array_like([
          {
            icon: "📡",
            title: "IoT Sensor Networks",
            desc: "Industrial-grade sensors with 10-year battery life, mesh networking, and edge computing capabilities for real-time data collection."
          },
          {
            icon: "🧠",
            title: "AI/ML Engine",
            desc: "Deep learning models trained on petabytes of urban data, running on distributed GPU clusters with sub-second inference times."
          },
          {
            icon: "☁️",
            title: "Cloud Infrastructure",
            desc: "Multi-region deployment on Azure with 99.99% SLA, automatic failover, and compliance with government security standards."
          },
          {
            icon: "🔗",
            title: "Digital Twin Platform",
            desc: "Real-time 3D digital replicas of city infrastructure for simulation, monitoring, and what-if scenario planning."
          },
          {
            icon: "📊",
            title: "Analytics Dashboard",
            desc: "Customizable real-time dashboards with natural language querying, automated reports, and mobile access for city officials."
          },
          {
            icon: "🔐",
            title: "Security Framework",
            desc: "Zero-trust architecture with end-to-end encryption, SOC 2 Type II compliance, and continuous security monitoring."
          }
        ]);
        for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
          let tech = each_array_2[i];
          $$renderer3.push(`<div class="fade-up rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/10"${attr_style(`transition-delay: ${stringify(i * 100)}ms`)}><div class="mb-3 text-3xl">${escape_html(tech.icon)}</div> <h3 class="mb-2 text-lg font-bold text-white">${escape_html(tech.title)}</h3> <p class="text-sm leading-relaxed text-neutral-400">${escape_html(tech.desc)}</p></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
    $$renderer2.push(`<!----> <section class="bg-section-gradient py-20 lg:py-28" aria-label="Call to action"><div class="mx-auto max-w-4xl px-6 text-center"><h2 class="fade-up text-3xl font-bold text-neutral-900 sm:text-4xl">Ready to Upgrade Your City's Infrastructure?</h2> <p class="fade-up mt-4 text-lg text-neutral-600">Our team of urban technologists and AI engineers will design a custom solution tailored to your city's unique challenges and opportunities.</p> <div class="fade-up mt-8 flex flex-wrap justify-center gap-4"><a href="/contact" class="btn btn-primary text-base px-8 py-4">Request a Demo</a> <a href="/analytics" class="btn btn-outline text-base px-8 py-4">Explore Urban Analytics</a></div></div></section>`);
  });
}
export {
  _page as default
};
