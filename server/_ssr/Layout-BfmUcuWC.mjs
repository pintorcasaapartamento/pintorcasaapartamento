import { n as BUSINESS, r as SERVICES, t as AREAS } from "./site-data-1JqZXxXO.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-BfmUcuWC.js
var import_jsx_runtime = require_jsx_runtime();
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex flex-col leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-extrabold uppercase tracking-tight text-foreground",
						children: "Airless Pintura"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: "Mecanizada · São Paulo"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/servicos",
							className: "text-foreground/80 hover:text-accent",
							children: "Serviços"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/regioes",
							className: "text-foreground/80 hover:text-accent",
							children: "Regiões"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sobre",
							className: "text-foreground/80 hover:text-accent",
							children: "Sobre"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contato",
							className: "text-foreground/80 hover:text-accent",
							children: "Contato"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: BUSINESS.phoneHref,
					className: "rounded-sm bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-accent/90",
					children: BUSINESS.phoneLabel
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-primary text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-extrabold uppercase tracking-tight",
						children: BUSINESS.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-primary-foreground/70",
						children: [
							"Pintura residencial, comercial e de condomínios em ",
							BUSINESS.city,
							" e região."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-primary-foreground/70",
						children: BUSINESS.hours
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.18em] text-accent",
					children: "Serviços"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/servicos/$slug",
						params: { slug: s.slug },
						className: "text-primary-foreground/75 hover:text-primary-foreground",
						children: s.name
					}) }, s.slug))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.18em] text-accent",
					children: "Regiões"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pintura-em/$area",
						params: { area: a.slug },
						className: "text-primary-foreground/75 hover:text-primary-foreground",
						children: a.name
					}) }, a.slug))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-[0.18em] text-accent",
					children: "Contato"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-primary-foreground/75",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BUSINESS.phoneHref,
							className: "hover:text-primary-foreground",
							children: BUSINESS.phoneLabel
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BUSINESS.whatsapp,
							className: "hover:text-primary-foreground",
							children: "WhatsApp"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: BUSINESS.email })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				BUSINESS.name,
				". Todos os direitos reservados."
			]
		})]
	});
}
function Page({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function CtaBand({ title = "Peça seu orçamento sem compromisso", text = "Visita técnica gratuita em São Paulo. Resposta no mesmo dia." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-accent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-extrabold tracking-tight text-accent-foreground md:text-3xl",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-accent-foreground/80",
				children: text
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: BUSINESS.whatsapp,
					className: "rounded-sm bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5",
					children: "Falar no WhatsApp"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: BUSINESS.phoneHref,
					className: "rounded-sm border-2 border-primary px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
					children: BUSINESS.phoneLabel
				})]
			})]
		})
	});
}
function SectionTitle({ eyebrow, title, as: As = "h2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-bold uppercase tracking-[0.2em] text-accent",
			children: eyebrow
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(As, {
			className: "mt-3 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-4xl",
			children: title
		})]
	});
}
function FaqList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "divide-y divide-border border-y border-border",
		children: items.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold text-foreground",
				children: f.q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: f.a
			})]
		}, f.q))
	});
}
//#endregion
export { SectionTitle as i, FaqList as n, Page as r, CtaBand as t };
