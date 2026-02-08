import { Z as attr_style, a1 as stringify, _ as attr, a4 as head, a0 as ensure_array_like } from "../../chunks/index2.js";
import { a as stats, s as siteConfig, f as features, t as testimonials } from "../../chunks/data.js";
import { e as escape_html } from "../../chunks/context.js";
import { S as Section } from "../../chunks/Section.js";
function Card($$renderer, $$props) {
  let { icon, title, description, link, delay = 0 } = $$props;
  $$renderer.push(`<div class="card group fade-up"${attr_style(`transition-delay: ${stringify(delay)}ms`)}>`);
  if (icon) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<div class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-100">${escape_html(icon)}</div>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <h3 class="mb-2 text-xl font-bold text-neutral-900">${escape_html(title)}</h3> <p class="text-neutral-600 leading-relaxed">${escape_html(description)}</p> `);
  if (link) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<a${attr("href", link)} class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"${attr("aria-label", `Learn more about ${stringify(title)}`)}>Learn more <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
function TestimonialCard($$renderer, $$props) {
  let { quote, name, role, avatar, delay = 0 } = $$props;
  $$renderer.push(`<div class="card fade-up relative"${attr_style(`transition-delay: ${stringify(delay)}ms`)}><svg class="absolute top-4 right-6 h-10 w-10 text-primary-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg> <blockquote class="relative z-10"><p class="text-neutral-700 leading-relaxed italic">"${escape_html(quote)}"</p> <footer class="mt-6 flex items-center gap-3"><img${attr("src", avatar)}${attr("alt", `Photo of ${stringify(name)}`)} class="h-12 w-12 rounded-full object-cover ring-2 ring-primary-100" loading="lazy" width="48" height="48"/> <div><cite class="block text-sm font-semibold not-italic text-neutral-900">${escape_html(name)}</cite> <span class="text-xs text-neutral-500">${escape_html(role)}</span></div></footer></blockquote></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(siteConfig.name)} — ${escape_html(siteConfig.tagline)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", siteConfig.description)}/> <meta name="author"${attr("content", siteConfig.author)}/> <meta name="generator"${attr("content", siteConfig.credit)}/> <meta property="og:title"${attr("content", `${stringify(siteConfig.name)} — ${stringify(siteConfig.tagline)}`)}/> <meta property="og:description"${attr("content", siteConfig.description)}/> <meta property="og:type" content="website"/> <meta property="og:image" content="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&amp;h=630&amp;fit=crop"/>`);
    });
    $$renderer2.push(`<section class="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center" aria-label="Hero"><div class="hero-grid absolute inset-0"></div> <div class="glow-orb bg-primary-500 w-96 h-96 -top-20 -left-20 absolute animate-float"></div> <div class="glow-orb bg-secondary-400 w-72 h-72 top-1/3 right-10 absolute animate-float-delayed"></div> <div class="glow-orb bg-accent-400 w-56 h-56 bottom-20 left-1/4 absolute animate-float-slow"></div> <div class="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-0"><div class="grid items-center gap-12 lg:grid-cols-2"><div><div class="fade-up mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-primary-300 backdrop-blur-sm border border-white/10"><span class="h-2 w-2 rounded-full bg-secondary-400 animate-pulse"></span> AI-Powered Urban Intelligence</div> <h1 class="fade-up text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Building the <span class="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">Intelligent Cities</span> of Tomorrow</h1> <p class="fade-up mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">${escape_html(siteConfig.description)}</p> <div class="fade-up mt-8 flex flex-wrap gap-4"><a href="/infrastructure" class="btn btn-primary">Explore Solutions <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a> <a href="/contact" class="btn btn-secondary">Get Started</a></div> <div class="fade-up mt-12 flex gap-8"><div><div class="text-2xl font-bold text-white">0</div> <div class="text-xs text-neutral-400">Cities Served</div></div> <div><div class="text-2xl font-bold text-white">0</div> <div class="text-xs text-neutral-400">Sensors Deployed</div></div> <div><div class="text-2xl font-bold text-white">0</div> <div class="text-xs text-neutral-400">Energy Saved</div></div></div></div> <div class="fade-right hidden lg:block"><div class="relative"><img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=700&amp;h=500&amp;fit=crop" alt="A futuristic smart city skyline at twilight with illuminated buildings and connected infrastructure" class="rounded-2xl shadow-2xl ring-1 ring-white/10" width="700" height="500" loading="eager"/> <div class="absolute -bottom-6 -left-6 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-xl"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-500/20"><span class="text-secondary-400 text-lg">📊</span></div> <div><div class="text-xs text-neutral-400">Real-time Analytics</div> <div class="text-sm font-semibold text-white">2.4M data points/sec</div></div></div></div> <div class="absolute -top-4 -right-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-xl"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500/20"><span class="text-primary-400 text-lg">🌐</span></div> <div><div class="text-xs text-neutral-400">Network Status</div> <div class="text-sm font-semibold text-secondary-400">All Systems Online</div></div></div></div></div></div></div></div> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"><svg class="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg></div></section> <section class="relative -mt-12 z-20 mx-auto max-w-6xl px-6" aria-label="Key statistics"><div class="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-elevated md:grid-cols-4 md:p-8"><!--[-->`);
    const each_array = ensure_array_like(stats);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let stat = each_array[i];
      $$renderer2.push(`<div class="text-center fade-up"${attr_style(`transition-delay: ${stringify(i * 100)}ms`)}><div class="text-3xl font-extrabold text-primary-600 md:text-4xl">0</div> <p class="mt-1 text-xs text-neutral-500 md:text-sm">${escape_html(stat.label)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> `);
    Section($$renderer2, {
      title: "Transforming Urban Living",
      subtitle: "Our AI-driven solutions address the most pressing challenges of modern urbanization, from congestion and pollution to energy waste and public safety.",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
        const each_array_1 = ensure_array_like(features);
        for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
          let feature = each_array_1[i];
          Card($$renderer3, {
            icon: feature.icon,
            title: feature.title,
            description: feature.description,
            link: feature.link,
            delay: i * 100
          });
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
    $$renderer2.push(`<!----> `);
    Section($$renderer2, {
      title: "How UrbanPulse Works",
      subtitle: "From sensor deployment to actionable insight — our end-to-end platform connects physical infrastructure to intelligent decision-making.",
      dark: true,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-8 md:grid-cols-3"><!--[-->`);
        const each_array_2 = ensure_array_like([
          {
            step: "01",
            title: "Sense & Collect",
            desc: "Thousands of IoT sensors embedded in roads, buildings, utilities, and transit systems collect real-time data on everything from air quality to traffic flow.",
            icon: "📡"
          },
          {
            step: "02",
            title: "Analyze & Predict",
            desc: "Our AI engine processes millions of data points per second, identifying patterns, predicting failures, and optimizing resource allocation across the city.",
            icon: "🧠"
          },
          {
            step: "03",
            title: "Act & Optimize",
            desc: "Automated responses adjust traffic signals, reroute energy, dispatch maintenance crews, and alert citizens — all in real-time for maximum efficiency.",
            icon: "⚡"
          }
        ]);
        for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
          let item = each_array_2[i];
          $$renderer3.push(`<div class="fade-up text-center"${attr_style(`transition-delay: ${stringify(i * 150)}ms`)}><div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur-sm border border-white/10">${escape_html(item.icon)}</div> <div class="mb-2 text-xs font-bold uppercase tracking-widest text-primary-400">Step ${escape_html(item.step)}</div> <h3 class="mb-3 text-xl font-bold text-white">${escape_html(item.title)}</h3> <p class="text-neutral-400 leading-relaxed">${escape_html(item.desc)}</p></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
    $$renderer2.push(`<!----> <section class="py-20 lg:py-28" aria-label="Smart city showcase"><div class="mx-auto max-w-7xl px-6"><div class="grid items-center gap-12 lg:grid-cols-2"><div class="fade-left"><img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=700&amp;h=500&amp;fit=crop" alt="Aerial view of a modern city with connected infrastructure and green spaces" class="rounded-2xl shadow-elevated" width="700" height="500" loading="lazy"/></div> <div class="fade-right"><h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">A Connected Ecosystem for <span class="text-primary-600">Sustainable Growth</span></h2> <p class="mt-4 text-lg leading-relaxed text-neutral-600">UrbanPulse doesn't just monitor cities — it understands them. By integrating transportation, energy, water, and public safety into a single intelligent platform, we enable city planners and administrators to make data-driven decisions that improve quality of life for millions.</p> <ul class="mt-6 space-y-3"><!--[-->`);
    const each_array_3 = ensure_array_like([
      "Real-time visibility across all city systems",
      "AI-powered predictions prevent issues before they occur",
      "Open data standards ensure interoperability",
      "Privacy-first design with edge computing"
    ]);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let item = each_array_3[$$index_3];
      $$renderer2.push(`<li class="flex items-start gap-3 text-neutral-700"><svg class="mt-1 h-5 w-5 flex-shrink-0 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg> ${escape_html(item)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul> <a href="/about" class="btn btn-outline mt-8">Learn About Our Mission</a></div></div></div></section> `);
    Section($$renderer2, {
      title: "Trusted by City Innovators",
      subtitle: "Urban planners, infrastructure directors, and innovation labs around the world rely on UrbanPulse to build smarter, more resilient cities.",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="grid gap-6 md:grid-cols-3"><!--[-->`);
        const each_array_4 = ensure_array_like(testimonials);
        for (let i = 0, $$length = each_array_4.length; i < $$length; i++) {
          let testimonial = each_array_4[i];
          TestimonialCard($$renderer3, {
            quote: testimonial.quote,
            name: testimonial.name,
            role: testimonial.role,
            avatar: testimonial.avatar,
            delay: i * 100
          });
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
    $$renderer2.push(`<!----> <section class="bg-hero-gradient relative overflow-hidden py-20 lg:py-28" aria-label="Call to action"><div class="hero-grid absolute inset-0"></div> <div class="glow-orb bg-primary-500 w-80 h-80 -top-20 right-20 absolute"></div> <div class="glow-orb bg-secondary-400 w-64 h-64 bottom-10 left-10 absolute"></div> <div class="relative z-10 mx-auto max-w-4xl px-6 text-center"><h2 class="fade-up text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Ready to Build a Smarter City?</h2> <p class="fade-up mx-auto mt-4 max-w-2xl text-lg text-neutral-300">Join 150+ cities worldwide that are already transforming urban infrastructure with AI-powered intelligence. Let's shape the future together.</p> <div class="fade-up mt-8 flex flex-wrap justify-center gap-4"><a href="/contact" class="btn btn-primary text-base px-8 py-4">Start Your Smart City Journey</a> <a href="/analytics" class="btn btn-secondary text-base px-8 py-4">See Live Analytics Demo</a></div></div></section>`);
  });
}
export {
  _page as default
};
