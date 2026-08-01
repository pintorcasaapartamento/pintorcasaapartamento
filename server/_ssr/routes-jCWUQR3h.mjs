import { n as BUSINESS, r as SERVICES, t as AREAS } from "./site-data-1JqZXxXO.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SectionTitle, r as Page, t as CtaBand } from "./Layout-BfmUcuWC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-jCWUQR3h.js
var import_jsx_runtime = require_jsx_runtime();
var hero_pintura_default = "/assets/hero-pintura-h_M3psjH.jpg";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.22em] text-accent",
						children: "São Paulo e região · desde 2010"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl",
						children: "Pintor de casa e apartamento em São Paulo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-lg text-primary-foreground/75",
						children: "Pintura mecanizada airless: obra mais rápida, acabamento sem marcas de rolo e o imóvel entregue limpo. Visita técnica e orçamento gratuitos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BUSINESS.whatsapp,
							className: "rounded-sm bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5",
							children: "Pedir orçamento no WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BUSINESS.phoneHref,
							className: "rounded-sm border border-primary-foreground/30 px-6 py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary-foreground/10",
							children: BUSINESS.phoneLabel
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Garantia de 12 meses" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Equipe uniformizada" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Nota fiscal" })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_pintura_default,
					width: 1600,
					height: 1008,
					alt: "Pintor aplicando tinta com equipamento airless em sala de apartamento",
					className: "w-full rounded-sm object-cover shadow-2xl"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Serviços",
				title: "O que pintamos"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/servicos/$slug",
					params: { slug: s.slug },
					className: "group border border-border bg-card p-7 transition-colors hover:border-accent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold text-card-foreground group-hover:text-accent",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: s.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-5 inline-block text-sm font-bold text-accent",
							children: "Ver detalhes →"
						})
					]
				}, s.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Regiões atendidas",
				title: "Onde atendemos em São Paulo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-3",
				children: AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/pintura-em/$area",
					params: { area: a.slug },
					className: "border-l-2 border-accent bg-secondary p-6 transition-colors hover:bg-secondary/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold text-foreground",
						children: a.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [a.neighborhoods.slice(0, 4).join(", "), " e mais."]
					})]
				}, a.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Por que nós",
					title: "Ética, qualidade e pontualidade"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-2 grid gap-6 sm:grid-cols-2",
					children: [
						["Pioneiros em airless", "Equipamento profissional que cobre mais área em menos tempo."],
						["Obra limpa", "Proteção total de piso e móveis, limpeza completa na entrega."],
						["Prazo cumprido", "Cronograma definido por escrito antes de começar."],
						["Preço fechado", "Orçamento sem surpresas, com material e mão de obra detalhados."]
					].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-foreground/15 pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold text-foreground",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: d
						})]
					}, t))
				})]
			})
		})
	] });
}
//#endregion
export { Index as component };
