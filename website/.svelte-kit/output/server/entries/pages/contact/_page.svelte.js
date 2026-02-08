import { _ as attr, $ as attr_class, a1 as stringify, a4 as head, a0 as ensure_array_like } from "../../../chunks/index2.js";
import { s as siteConfig } from "../../../chunks/data.js";
import { e as escape_html } from "../../../chunks/context.js";
function ContactForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let formData = { name: "", email: "", subject: "", message: "" };
    let errors = {};
    let submitting = false;
    $$renderer2.push(`<form class="space-y-6" novalidate aria-label="Contact form"><div><label for="name" class="mb-1.5 block text-sm font-medium text-neutral-700">Full Name *</label> <input type="text" id="name"${attr("value", formData.name)}${attr_class(`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none ${stringify(errors.name ? "border-error bg-red-50" : "border-neutral-200 bg-white hover:border-neutral-300")}`)} placeholder="Your full name" autocomplete="name"${attr("aria-invalid", errors.name ? "true" : void 0)}${attr("aria-describedby", errors.name ? "name-error" : void 0)}/> `);
    if (errors.name) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p id="name-error" class="mt-1 text-xs text-error" role="alert">${escape_html(errors.name)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div><label for="email" class="mb-1.5 block text-sm font-medium text-neutral-700">Email Address *</label> <input type="email" id="email"${attr("value", formData.email)}${attr_class(`w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none ${stringify(errors.email ? "border-error bg-red-50" : "border-neutral-200 bg-white hover:border-neutral-300")}`)} placeholder="you@example.com" autocomplete="email"${attr("aria-invalid", errors.email ? "true" : void 0)}${attr("aria-describedby", errors.email ? "email-error" : void 0)}/> `);
    if (errors.email) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p id="email-error" class="mt-1 text-xs text-error" role="alert">${escape_html(errors.email)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div><label for="subject" class="mb-1.5 block text-sm font-medium text-neutral-700">Subject *</label> `);
    $$renderer2.select(
      {
        id: "subject",
        value: formData.subject,
        class: `w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none ${stringify(errors.subject ? "border-error bg-red-50" : "border-neutral-200 bg-white hover:border-neutral-300")}`,
        "aria-invalid": errors.subject ? "true" : void 0,
        "aria-describedby": errors.subject ? "subject-error" : void 0
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "" }, ($$renderer4) => {
          $$renderer4.push(`Select a topic...`);
        });
        $$renderer3.option({ value: "Smart Infrastructure" }, ($$renderer4) => {
          $$renderer4.push(`Smart Infrastructure Solutions`);
        });
        $$renderer3.option({ value: "Urban Analytics" }, ($$renderer4) => {
          $$renderer4.push(`Urban Analytics Platform`);
        });
        $$renderer3.option({ value: "Partnership" }, ($$renderer4) => {
          $$renderer4.push(`Partnership Inquiry`);
        });
        $$renderer3.option({ value: "General" }, ($$renderer4) => {
          $$renderer4.push(`General Question`);
        });
      }
    );
    $$renderer2.push(` `);
    if (errors.subject) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p id="subject-error" class="mt-1 text-xs text-error" role="alert">${escape_html(errors.subject)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div><label for="message" class="mb-1.5 block text-sm font-medium text-neutral-700">Message *</label> <textarea id="message" rows="5"${attr_class(`w-full resize-y rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none ${stringify(errors.message ? "border-error bg-red-50" : "border-neutral-200 bg-white hover:border-neutral-300")}`)} placeholder="Tell us about your smart city project or inquiry..."${attr("aria-invalid", errors.message ? "true" : void 0)}${attr("aria-describedby", errors.message ? "message-error" : void 0)}>`);
    const $$body = escape_html(formData.message);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea> `);
    if (errors.message) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p id="message-error" class="mt-1 text-xs text-error" role="alert">${escape_html(errors.message)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <button type="submit" class="btn btn-primary w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"${attr("disabled", submitting, true)}>`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`Send Message <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></form> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1bv7ezn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Contact — ${escape_html(siteConfig.name)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Get in touch with the UrbanPulse team. Schedule a demo, discuss partnership opportunities, or learn how smart city solutions can transform your urban infrastructure."/> <meta name="author"${attr("content", siteConfig.author)}/> <meta name="generator"${attr("content", siteConfig.credit)}/> <meta property="og:title"${attr("content", `Contact — ${stringify(siteConfig.name)}`)}/> <meta property="og:description" content="Get in touch to discuss smart city solutions for your urban infrastructure."/> <meta property="og:type" content="website"/> <meta property="og:image" content="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&amp;h=630&amp;fit=crop"/>`);
    });
    $$renderer2.push(`<section class="bg-hero-gradient relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"><div class="hero-grid absolute inset-0"></div> <div class="glow-orb bg-primary-500 w-72 h-72 -top-10 right-1/4 absolute"></div> <div class="glow-orb bg-secondary-400 w-48 h-48 bottom-10 left-10 absolute"></div> <div class="relative z-10 mx-auto max-w-7xl px-6"><div class="max-w-3xl"><div class="fade-up mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-primary-300 backdrop-blur-sm border border-white/10">📬 Get in Touch</div> <h1 class="fade-up text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">Let's Build <span class="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Something Smart</span></h1> <p class="fade-up mt-6 max-w-2xl text-lg text-neutral-300 leading-relaxed">Whether you're exploring smart city solutions for the first time or looking to scale existing infrastructure, our team is ready to help you design, deploy, and optimize intelligent urban systems.</p></div></div></section> <section class="py-20 lg:py-28" aria-label="Contact form and information"><div class="mx-auto max-w-7xl px-6"><div class="grid gap-12 lg:grid-cols-5"><div class="lg:col-span-3"><div class="fade-up rounded-2xl bg-white p-8 shadow-elevated border border-neutral-100"><h2 class="mb-2 text-2xl font-bold text-neutral-900">Send Us a Message</h2> <p class="mb-8 text-neutral-500">Fill out the form below and our team will respond within 24 hours.</p> `);
    ContactForm($$renderer2);
    $$renderer2.push(`<!----></div></div> <div class="lg:col-span-2 space-y-6"><div class="fade-up card"><h3 class="mb-4 text-lg font-bold text-neutral-900">Quick Connect</h3> <div class="space-y-4"><div class="flex items-start gap-3"><div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div> <div><div class="text-sm font-medium text-neutral-900">Email</div> <div class="text-sm text-neutral-500">hello@urbanpulse.city</div></div></div> <div class="flex items-start gap-3"><div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div> <div><div class="text-sm font-medium text-neutral-900">Headquarters</div> <div class="text-sm text-neutral-500">Innovation District, Singapore 018960</div></div></div> <div class="flex items-start gap-3"><div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div><div class="text-sm font-medium text-neutral-900">Response Time</div> <div class="text-sm text-neutral-500">Within 24 hours on business days</div></div></div></div></div> <div class="fade-up card bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-100"><h3 class="mb-3 text-lg font-bold text-neutral-900">About the Developer</h3> <p class="text-sm text-neutral-600 leading-relaxed mb-4">This website was built by <strong>Mohan</strong> using AI-assisted development, combining modern web technologies with intelligent design systems to create a production-ready smart city platform.</p> <div class="flex gap-3"><a${attr("href", siteConfig.github)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-neutral-800"><svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> GitHub</a> <a${attr("href", siteConfig.linkedin)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 rounded-lg bg-[#0077b5] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#006299]"><svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg> LinkedIn</a></div></div> <div class="fade-up card"><h3 class="mb-4 text-lg font-bold text-neutral-900">Common Questions</h3> <div class="space-y-4"><!--[-->`);
    const each_array = ensure_array_like([
      {
        q: "How long does deployment take?",
        a: "A typical pilot deployment takes 3-6 months, from sensor installation to full analytics dashboard availability."
      },
      {
        q: "What cities do you serve?",
        a: "We operate in 150+ cities across Asia, Europe, and the Americas, with local teams in Singapore, Copenhagen, and San Francisco."
      },
      {
        q: "Is our data secure?",
        a: "Absolutely. We use edge computing, end-to-end encryption, and are SOC 2 Type II certified. Your data never leaves your jurisdiction."
      }
    ]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let faq = each_array[$$index];
      $$renderer2.push(`<div><h4 class="text-sm font-semibold text-neutral-900">${escape_html(faq.q)}</h4> <p class="mt-1 text-xs text-neutral-500 leading-relaxed">${escape_html(faq.a)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div></div></section>`);
  });
}
export {
  _page as default
};
