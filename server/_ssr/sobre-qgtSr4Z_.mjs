import { n as BUSINESS } from "./site-data-1JqZXxXO.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as SectionTitle, r as Page, t as CtaBand } from "./Layout-BfmUcuWC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sobre-qgtSr4Z_.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Page, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-5 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				as: "h1",
				eyebrow: "Sobre nós",
				title: "Pintura feita com método, não com pressa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-5 text-lg text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"A ",
						BUSINESS.name,
						" nasceu em São Paulo com uma ideia simples: pintura boa é aquela que você não precisa refazer em dois anos. Por isso investimos tanto no preparo da parede quanto na aplicação."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fomos pioneiros na região no uso da pintura mecanizada airless, que reduz o tempo de obra e entrega um acabamento uniforme, sem marcas de rolo. Combinamos essa tecnologia com o acabamento manual onde ele ainda é insubstituível: cantos, rodapés e detalhes." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nossa equipe é própria, uniformizada e treinada em segurança. Você sabe quem entra na sua casa e tem um responsável direto pelo andamento da obra." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2",
				children: [
					["Ética", "Orçamento honesto, sem custos que aparecem no meio da obra."],
					["Qualidade", "Preparo completo da superfície antes da primeira demão."],
					["Pontualidade", "Prazo combinado por escrito e cumprido."],
					["Organização", "Proteção do imóvel e limpeza diária do canteiro."]
				].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-l-2 border-accent pl-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold text-foreground",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: d
					})]
				}, t))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {})] });
}
//#endregion
export { AboutPage as component };
