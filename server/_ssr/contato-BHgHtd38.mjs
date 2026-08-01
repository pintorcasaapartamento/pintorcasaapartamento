import { n as BUSINESS } from "./site-data-1JqZXxXO.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as SectionTitle, r as Page } from "./Layout-BfmUcuWC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contato-BHgHtd38.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				as: "h1",
				eyebrow: "Contato",
				title: "Peça seu orçamento"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-lg text-muted-foreground",
				children: [
					"A visita técnica é gratuita em ",
					BUSINESS.city,
					". Envie as fotos do ambiente pelo WhatsApp e adiantamos uma estimativa antes mesmo da visita."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: BUSINESS.whatsapp,
					className: "block rounded-sm bg-accent px-6 py-4 text-center text-sm font-bold text-accent-foreground",
					children: "Falar no WhatsApp"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: BUSINESS.phoneHref,
					className: "block rounded-sm border-2 border-primary px-6 py-4 text-center text-sm font-bold text-primary",
					children: ["Ligar ", BUSINESS.phoneLabel]
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border border-border bg-card p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold text-card-foreground",
				children: "Informações"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 space-y-5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold text-foreground",
						children: "Telefone / WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-muted-foreground",
						children: BUSINESS.phoneLabel
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold text-foreground",
						children: "E-mail"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-muted-foreground",
						children: BUSINESS.email
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold text-foreground",
						children: "Horário"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-muted-foreground",
						children: BUSINESS.hours
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold text-foreground",
						children: "Área de atendimento"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "text-muted-foreground",
						children: [BUSINESS.city, " capital, Grande São Paulo e ABC Paulista"]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold text-foreground",
						children: "Pagamento"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-muted-foreground",
						children: "Cartões, Pix e parcelamento"
					})] })
				]
			})]
		})]
	}) });
}
//#endregion
export { ContactPage as component };
