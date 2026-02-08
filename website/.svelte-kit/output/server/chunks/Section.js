import { _ as attr, $ as attr_class, a1 as stringify } from "./index2.js";
import { e as escape_html } from "./context.js";
function Section($$renderer, $$props) {
  let { title, subtitle, dark = false, narrow = false, id, children } = $$props;
  $$renderer.push(`<section${attr("id", id)}${attr_class(`py-20 lg:py-28 ${stringify(dark ? "bg-dark-gradient text-white" : "bg-section-gradient")}`)}><div${attr_class(`mx-auto max-w-7xl px-6 ${stringify(narrow ? "max-w-4xl" : "")}`)}><div class="mb-14 text-center"><h2${attr_class(`text-3xl font-bold sm:text-4xl lg:text-5xl ${stringify(dark ? "text-white" : "text-neutral-900")}`)}>${escape_html(title)}</h2> `);
  if (subtitle) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<p${attr_class(`mx-auto mt-4 max-w-2xl text-lg ${stringify(dark ? "text-neutral-300" : "text-neutral-600")}`)}>${escape_html(subtitle)}</p>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div> `);
  children($$renderer);
  $$renderer.push(`<!----></div></section>`);
}
export {
  Section as S
};
