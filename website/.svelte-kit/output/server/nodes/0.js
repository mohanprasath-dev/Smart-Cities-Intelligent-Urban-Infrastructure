import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DzhNSmZ9.js","_app/immutable/chunks/Dur78SpR.js","_app/immutable/chunks/DBb262p4.js","_app/immutable/chunks/Br5Jpa5b.js","_app/immutable/chunks/Cc9Phnl8.js","_app/immutable/chunks/DDuT3KH0.js","_app/immutable/chunks/rSfBYqxu.js","_app/immutable/chunks/xPvc4RG3.js","_app/immutable/chunks/Cw15mJ20.js","_app/immutable/chunks/BYqGYcvs.js","_app/immutable/chunks/CK3K1vXA.js"];
export const stylesheets = ["_app/immutable/assets/0.DOLfZqjd.css"];
export const fonts = [];
