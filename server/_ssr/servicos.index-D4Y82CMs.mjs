import { r as SERVICES } from "./site-data-1JqZXxXO.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SectionTitle, r as Page, t as CtaBand } from "./Layout-BfmUcuWC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servicos.index-D4Y82CMs.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				as: "h1",
				eyebrow: "Serviços",
				title: "Serviços de pintura em São Paulo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lg text-muted-foreground",
				children: "Cada tipo de imóvel exige um preparo diferente. Escolha o serviço para ver o processo, prazos e as dúvidas mais comuns."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2",
				children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/servicos/$slug",
					params: { slug: s.slug },
					className: "group border border-border bg-card p-8 transition-colors hover:border-accent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold text-card-foreground group-hover:text-accent",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: s.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-6 inline-block text-sm font-bold text-accent",
							children: "Ver página →"
						})
					]
				}, s.slug))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})] });
}
//#endregion
export { ServicesIndex as component };
