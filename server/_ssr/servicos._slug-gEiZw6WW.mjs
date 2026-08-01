import { n as BUSINESS, r as SERVICES, t as AREAS } from "./site-data-1JqZXxXO.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SectionTitle, n as FaqList, r as Page, t as CtaBand } from "./Layout-BfmUcuWC.mjs";
import { t as Route } from "./servicos._slug-CPANpbuB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servicos._slug-gEiZw6WW.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	const service = Route.useLoaderData();
	const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.22em] text-accent",
						children: "Serviço"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl",
						children: service.h1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg text-primary-foreground/75",
						children: service.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BUSINESS.whatsapp,
							className: "rounded-sm bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground",
							children: "Pedir orçamento"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BUSINESS.phoneHref,
							className: "rounded-sm border border-primary-foreground/30 px-6 py-3.5 text-sm font-bold",
							children: BUSINESS.phoneLabel
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "O que está incluso",
					title: "O serviço por dentro"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-4",
					children: service.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
					}, b))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 border-l-2 border-accent bg-secondary p-5 text-sm text-foreground",
					children: service.priceNote
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Como funciona",
				title: "Etapas da obra"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 space-y-6",
				children: service.process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-extrabold text-accent",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-foreground",
						children: p.step
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: p.text
					})] })]
				}, p.step))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Dúvidas frequentes",
				title: "Perguntas sobre este serviço"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: service.faq })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: `Quer um orçamento de ${service.name.toLowerCase()}?` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-extrabold text-foreground",
					children: "Outros serviços"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-3",
					children: others.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/servicos/$slug",
						params: { slug: s.slug },
						className: "border border-border p-6 hover:border-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-foreground",
							children: s.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.short
						})]
					}, s.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-14 font-display text-2xl font-extrabold text-foreground",
					children: [service.name, " por região"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pintura-em/$area",
						params: { area: a.slug },
						className: "border border-border px-4 py-2 text-sm text-muted-foreground hover:border-accent hover:text-foreground",
						children: a.name
					}, a.slug))
				})
			]
		})
	] });
}
//#endregion
export { ServicePage as component };
