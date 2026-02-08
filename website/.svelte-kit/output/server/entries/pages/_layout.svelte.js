import "clsx";
import { Z as attr_style, _ as attr, $ as attr_class, a0 as ensure_array_like, a1 as stringify, a2 as store_get, a3 as unsubscribe_stores } from "../../chunks/index2.js";
import { g as getContext, e as escape_html } from "../../chunks/context.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { n as navLinks, s as siteConfig } from "../../chunks/data.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let mobileOpen = false;
    let scrollProgress = 0;
    $$renderer2.push(`<div id="scroll-progress"${attr_style(`width: ${stringify(scrollProgress)}%`)} role="progressbar"${attr("aria-valuenow", scrollProgress)}${attr("aria-valuemin", 0)}${attr("aria-valuemax", 100)} aria-label="Page scroll progress"></div> <header${attr_class(`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${stringify("bg-transparent")}`)} role="banner"><nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation"><a href="/" class="flex items-center gap-2.5 text-xl font-bold"${attr("aria-label", `${stringify(siteConfig.name)} home`)}><span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-500 text-white text-sm shadow-md">UP</span> <span${attr_class(`${stringify("text-white")} transition-colors font-heading`)}>${escape_html(siteConfig.name)}</span></a> <div class="hidden items-center gap-1 md:flex"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href ? "text-white bg-white/15" : "text-white/80 hover:text-white hover:bg-white/10")}`)}${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href ? "page" : void 0)}>${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></div> <button${attr_class(`flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${stringify("text-white hover:bg-white/10")}`)}${attr("aria-expanded", mobileOpen)} aria-controls="mobile-menu"${attr("aria-label", "Open menu")}>`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></button></nav> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="bg-dark-gradient text-white" role="contentinfo"><div class="mx-auto max-w-7xl px-6 py-16"><div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4"><div class="lg:col-span-1"><a href="/" class="mb-4 flex items-center gap-2.5 text-xl font-bold"${attr("aria-label", `${stringify(siteConfig.name)} home`)}><span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-400 text-white text-sm shadow-md">UP</span> <span class="font-heading">${escape_html(siteConfig.name)}</span></a> <p class="mt-3 text-sm leading-relaxed text-neutral-400">${escape_html(siteConfig.description)}</p> <div class="mt-6 flex gap-3"><a${attr("href", siteConfig.github)} target="_blank" rel="noopener noreferrer" class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-neutral-400 transition-all hover:bg-primary-600 hover:text-white" aria-label="GitHub profile"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a> <a${attr("href", siteConfig.linkedin)} target="_blank" rel="noopener noreferrer" class="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-neutral-400 transition-all hover:bg-primary-600 hover:text-white" aria-label="LinkedIn profile"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></div></div> <div><h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">Navigation</h3> <ul class="space-y-3"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", link.href)} class="text-sm text-neutral-400 transition-colors hover:text-primary-400">${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div><h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">Solutions</h3> <ul class="space-y-3"><li><a href="/infrastructure" class="text-sm text-neutral-400 transition-colors hover:text-primary-400">Intelligent Transportation</a></li> <li><a href="/infrastructure" class="text-sm text-neutral-400 transition-colors hover:text-primary-400">Smart Energy Grids</a></li> <li><a href="/infrastructure" class="text-sm text-neutral-400 transition-colors hover:text-primary-400">Water Management</a></li> <li><a href="/analytics" class="text-sm text-neutral-400 transition-colors hover:text-primary-400">Urban Analytics</a></li> <li><a href="/analytics" class="text-sm text-neutral-400 transition-colors hover:text-primary-400">Predictive Maintenance</a></li></ul></div> <div><h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">Get in Touch</h3> <ul class="space-y-3"><li class="text-sm text-neutral-400"><a href="/contact" class="transition-colors hover:text-primary-400">Contact Form →</a></li> <li class="text-sm text-neutral-400"><a${attr("href", siteConfig.github)} target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-primary-400">GitHub →</a></li> <li class="text-sm text-neutral-400"><a${attr("href", siteConfig.linkedin)} target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-primary-400">LinkedIn →</a></li></ul></div></div></div> <div class="border-t border-white/10"><div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row"><p class="text-sm text-neutral-400">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} ${escape_html(siteConfig.name)}. All rights reserved.</p> <p class="text-sm text-neutral-500">${escape_html(siteConfig.credit)}</p></div></div></footer>`);
  });
}
function BackToTop($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<button${attr_class(`back-to-top ${stringify("")}`)} aria-label="Scroll back to top" type="button"><svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"></path></svg></button>`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  $$renderer.push(`<div class="flex min-h-screen flex-col">`);
  Nav($$renderer);
  $$renderer.push(`<!----> <main class="flex-1" id="main-content">`);
  children($$renderer);
  $$renderer.push(`<!----></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----> `);
  BackToTop($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
