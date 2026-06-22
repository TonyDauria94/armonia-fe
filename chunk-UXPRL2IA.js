import{a as u}from"./chunk-7BZMTSJV.js";var d=/^[a-z0-9]+(?:-[a-z0-9]+)*$/,a=class extends Error{constructor(t){super(t),this.name="CmdSlugError"}};function g(r,t="Invalid song slug."){if(typeof r!="string"||!r.trim())throw new a(t);let n=r.trim();if(n!==n.toLowerCase()||!d.test(n))throw new a(t);return n}function m(r){return r.filter(n=>!!n?.trim()).join("-").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"song"}function S(r,t={}){let n=u(r,{notation:t.notation}),l=t.expectedSlug?g(t.expectedSlug):void 0,e=n.meta.slug;if(e){let s=g(e);if(l&&s!==l)throw new a("Song slug does not match its CMD metadata.");return{slug:s,cmd:r}}let o=t.fallbackSlug?g(t.fallbackSlug):void 0,i=l??o??m(t.fallbackParts??[n.meta.author,n.meta.title]);return{slug:i,cmd:f(r,i)}}function f(r,t){let n=g(t),l=r.replace(/\r/g,""),e=l.split(`
`),o=e.findIndex(i=>i.trim()!=="");return o>=0&&e[o].trim()==="---"&&e.findIndex((s,c)=>c>o&&s.trim()==="---")>o?[...e.slice(0,o+1),`slug: ${n}`,...e.slice(o+1)].join(`
`):`---
slug: ${n}
---

${l}`}export{g as a,m as b,S as c};
