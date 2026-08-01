import { n as BUSINESS, r as SERVICES, t as AREAS } from "./site-data-1JqZXxXO.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SectionTitle, r as Page, t as CtaBand } from "./Layout-BfmUcuWC.mjs";
import { t as Route } from "./pintura-em._area-CEMY6Stz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pintura-em._area-BlFDp4un.js
var import_jsx_runtime = require_jsx_runtime();
function AreaPage() {
	const area = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.22em] text-accent",
						children: "Atendimento local"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl",
						children: ["Pintor de casa e apartamento na ", area.name]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg text-primary-foreground/75",
						children: area.blurb
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
			className: "mx-auto max-w-6xl px-5 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Bairros",
					title: `Bairros atendidos na ${area.name}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: area.neighborhoods.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "border border-border bg-secondary px-4 py-2 text-sm text-foreground",
						children: n
					}, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-muted-foreground",
					children: "Não encontrou seu bairro? Atendemos toda a cidade de São Paulo — fale conosco e confirmamos o deslocamento na hora."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Serviços",
					title: `O que fazemos na ${area.name}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 md:grid-cols-3",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/servicos/$slug",
						params: { slug: s.slug },
						className: "border border-border bg-card p-6 hover:border-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold text-card-foreground",
							children: s.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.short
						})]
					}, s.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { title: `Orçamento de pintura na ${area.name}` }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-extrabold text-foreground",
				children: "Outras regiões"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: AREAS.filter((a) => a.slug !== area.slug).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/pintura-em/$area",
					params: { area: a.slug },
					className: "border border-border px-4 py-2 text-sm text-muted-foreground hover:border-accent hover:text-foreground",
					children: a.name
				}, a.slug))
			})]
		})
	] });
}
//#endregion
export { AreaPage as component };
