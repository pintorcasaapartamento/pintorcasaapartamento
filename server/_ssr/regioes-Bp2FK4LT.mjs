import { t as AREAS } from "./site-data-1JqZXxXO.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as SectionTitle, r as Page, t as CtaBand } from "./Layout-BfmUcuWC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/regioes-Bp2FK4LT.js
var import_jsx_runtime = require_jsx_runtime();
function RegionsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-5 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				as: "h1",
				eyebrow: "Cobertura",
				title: "Regiões atendidas em São Paulo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-lg text-muted-foreground",
				children: "Escolha sua região para ver os bairros atendidos e os serviços disponíveis."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2",
				children: AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/pintura-em/$area",
					params: { area: a.slug },
					className: "group border border-border bg-card p-8 transition-colors hover:border-accent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold text-card-foreground group-hover:text-accent",
							children: a.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: a.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: a.neighborhoods.join(" · ")
						})
					]
				}, a.slug))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})] });
}
//#endregion
export { RegionsPage as component };
