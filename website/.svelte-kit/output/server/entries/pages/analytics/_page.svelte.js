import { a4 as head, a0 as ensure_array_like, Z as attr_style, $ as attr_class, a1 as stringify, _ as attr } from "../../../chunks/index2.js";
import { s as siteConfig, b as analyticsSolutions } from "../../../chunks/data.js";
import { S as Section } from "../../../chunks/Section.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1m0gshv", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Urban Analytics — ${escape_html(siteConfig.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="UrbanPulse Urban Analytics: real-time traffic intelligence, environmental monitoring, energy optimization, and predictive maintenance powered by AI."/> <meta name="author"${attr("content", siteConfig.author)}/> <meta name="generator"${attr("content", siteConfig.credit)}/> <meta property="og:title"${attr("content", `Urban Analytics — ${stringify(siteConfig.name)}`)}/> <meta property="og:description" content="Real-time urban intelligence: traffic flow, environmental monitoring, energy analytics, and predictive maintenance."/> <meta property="og:type" content="website"/> <meta property="og:image" content="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&amp;h=630&amp;fit=crop"/>`);
    });
    $$renderer2.push(`<section class="bg-hero-gradient relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"><div class="hero-grid absolute inset-0"></div> <div class="glow-orb bg-secondary-400 w-80 h-80 -top-10 -left-10 absolute"></div> <div class="glow-orb bg-primary-500 w-64 h-64 bottom-20 right-20 absolute"></div> <div class="relative z-10 mx-auto max-w-7xl px-6"><div class="max-w-3xl"><div class="fade-up mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-secondary-300 backdrop-blur-sm border border-white/10">📊 Urban Analytics</div> <h1 class="fade-up text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">Data-Driven Decisions for <span class="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">Smarter Cities</span></h1> <p class="fade-up mt-6 max-w-2xl text-lg text-neutral-300 leading-relaxed">Our analytics platform transforms raw urban data into clear, actionable intelligence. From real-time traffic flow to predictive maintenance alerts, every data point tells a story that helps cities operate more efficiently, safely, and sustainably.</p></div></div></section> <section class="relative -mt-10 z-20 mx-auto max-w-6xl px-6" aria-label="Live metrics"><div class="rounded-2xl bg-white p-8 shadow-elevated"><div class="mb-6 flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-secondary-500 animate-pulse"></span> <span class="text-sm font-medium text-neutral-600">Live Platform Metrics</span></div> <div class="grid grid-cols-2 gap-6 md:grid-cols-4"><!--[-->`);
    const each_array = ensure_array_like([
      {
        value: 2.4,
        suffix: "M",
        label: "Data points processed per second"
      },
      { value: 10, suffix: "K+", label: "Active sensor nodes" },
      { value: 99.97, suffix: "%", label: "Platform uptime" },
      {
        value: 150,
        suffix: "+",
        label: "Analytics dashboards deployed"
      }
    ]);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let metric = each_array[i];
      $$renderer2.push(`<div class="text-center fade-up"${attr_style(`transition-delay: ${stringify(i * 100)}ms`)}><div class="text-3xl font-extrabold text-primary-600">0</div> <p class="mt-1 text-xs text-neutral-500">${escape_html(metric.label)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> `);
    Section($$renderer2, {
      title: "Analytics Capabilities",
      subtitle: "Six specialized analytics modules work together to provide comprehensive urban intelligence, each powered by purpose-built AI models.",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        const each_array_1 = ensure_array_like(analyticsSolutions);
        for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
          let solution = each_array_1[i];
          $$renderer3.push(`<div class="card group fade-up"${attr_style(`transition-delay: ${stringify(i * 100)}ms`)}><div class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-2xl transition-transform duration-300 group-hover:scale-110">${escape_html(solution.icon)}</div> <h3 class="mb-2 text-xl font-bold text-neutral-900">${escape_html(solution.title)}</h3> <p class="text-sm text-neutral-600 leading-relaxed">${escape_html(solution.description)}</p> <ul class="mt-4 space-y-2"><!--[-->`);
          const each_array_2 = ensure_array_like(solution.metrics);
          for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
            let metric = each_array_2[$$index_1];
            $$renderer3.push(`<li class="flex items-center gap-2 text-xs text-neutral-500"><svg class="h-3.5 w-3.5 flex-shrink-0 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> ${escape_html(metric)}</li>`);
          }
          $$renderer3.push(`<!--]--></ul></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
    $$renderer2.push(`<!----> <section class="py-20 lg:py-28 bg-section-gradient" aria-label="Data pipeline"><div class="mx-auto max-w-7xl px-6"><div class="grid items-center gap-12 lg:grid-cols-2"><div class="fade-left"><h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">From Raw Sensor Data to <span class="text-primary-600">Actionable Insight</span></h2> <p class="mt-4 text-lg text-neutral-600 leading-relaxed">Our data pipeline processes urban information through five stages, transforming billions of raw sensor readings into clear, prioritized recommendations for city operators and automated system responses.</p> <div class="mt-8 space-y-6"><!--[-->`);
    const each_array_3 = ensure_array_like([
      {
        step: "Ingestion",
        desc: "IoT sensors stream data via MQTT/CoAP protocols to edge gateways at 10ms latency",
        color: "bg-primary-500"
      },
      {
        step: "Processing",
        desc: "Edge nodes filter, aggregate, and pre-process data before cloud transmission",
        color: "bg-primary-400"
      },
      {
        step: "Analysis",
        desc: "ML models detect anomalies, classify events, and generate predictions in real-time",
        color: "bg-secondary-500"
      },
      {
        step: "Visualization",
        desc: "Interactive dashboards display insights through maps, charts, and natural language summaries",
        color: "bg-secondary-400"
      },
      {
        step: "Action",
        desc: "Automated responses trigger signal changes, dispatch alerts, or optimize resource distribution",
        color: "bg-accent-500"
      }
    ]);
    for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
      let stage = each_array_3[i];
      $$renderer2.push(`<div class="flex items-start gap-4 fade-up"${attr_style(`transition-delay: ${stringify(i * 100)}ms`)}><div${attr_class(`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${stringify(stage.color)} text-xs font-bold text-white`)}>${escape_html(i + 1)}</div> <div><h3 class="font-semibold text-neutral-900">${escape_html(stage.step)}</h3> <p class="text-sm text-neutral-600">${escape_html(stage.desc)}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="fade-right"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&amp;h=500&amp;fit=crop" alt="Advanced data analytics dashboard showing urban metrics and AI predictions" class="rounded-2xl shadow-elevated" width="700" height="500" loading="lazy"/></div></div></div></section> `);
    Section($$renderer2, {
      title: "Real-World Impact",
      subtitle: "See how our analytics platform delivers measurable results in cities around the world.",
      dark: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-8 md:grid-cols-2"><!--[-->`);
        const each_array_4 = ensure_array_like([
          {
            city: "Singapore",
            challenge: "Peak-hour traffic congestion causing 45-minute average delays on major corridors",
            solution: "Deployed AI traffic flow optimization across 2,400 intersections with real-time adaptive signal control",
            result: "37% reduction in average commute time, 22% decrease in vehicle emissions in optimized corridors",
            image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=300&fit=crop"
          },
          {
            city: "Copenhagen",
            challenge: "Air pollution hotspots affecting 120,000 residents in dense urban neighborhoods",
            solution: "Installed 3,000 environmental sensor nodes with 48-hour predictive air quality modeling",
            result: "15% reduction in pollution exposure through proactive traffic rerouting and industrial scheduling",
            image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&h=300&fit=crop"
          }
        ]);
        for (let i = 0, $$length = each_array_4.length; i < $$length; i++) {
          let study = each_array_4[i];
          $$renderer3.push(`<div class="fade-up rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm"${attr_style(`transition-delay: ${stringify(i * 150)}ms`)}><img${attr("src", study.image)}${attr("alt", `Cityscape of ${stringify(study.city)}`)} class="w-full h-48 object-cover" loading="lazy" width="600" height="300"/> <div class="p-6"><h3 class="text-xl font-bold text-white">${escape_html(study.city)}</h3> <div class="mt-4 space-y-3"><div><span class="text-xs font-semibold uppercase tracking-wider text-accent-400">Challenge</span> <p class="text-sm text-neutral-300">${escape_html(study.challenge)}</p></div> <div><span class="text-xs font-semibold uppercase tracking-wider text-primary-400">Solution</span> <p class="text-sm text-neutral-300">${escape_html(study.solution)}</p></div> <div><span class="text-xs font-semibold uppercase tracking-wider text-secondary-400">Result</span> <p class="text-sm text-neutral-200 font-medium">${escape_html(study.result)}</p></div></div></div></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
    $$renderer2.push(`<!----> <section class="bg-section-gradient py-20 lg:py-28" aria-label="Call to action"><div class="mx-auto max-w-4xl px-6 text-center"><h2 class="fade-up text-3xl font-bold text-neutral-900 sm:text-4xl">Turn Your City's Data Into Action</h2> <p class="fade-up mt-4 text-lg text-neutral-600">Every city generates massive amounts of data. Let us help you transform that data into intelligence that saves money, improves services, and enhances quality of life.</p> <div class="fade-up mt-8 flex flex-wrap justify-center gap-4"><a href="/contact" class="btn btn-primary text-base px-8 py-4">Request Analytics Demo</a> <a href="/infrastructure" class="btn btn-outline text-base px-8 py-4">See Infrastructure Solutions</a></div></div></section>`);
  });
}
export {
  _page as default
};
