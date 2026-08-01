import { r as SERVICES } from "./site-data-1JqZXxXO.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servicos._slug-CPANpbuB.js
var $$splitComponentImporter = () => import("./servicos._slug-gEiZw6WW.mjs");
var Route = createFileRoute("/servicos/$slug")({
	loader: ({ params }) => {
		const service = SERVICES.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		return service;
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Serviço não encontrado" }, {
			name: "robots",
			content: "noindex"
		}] };
		return {
			meta: [
				{ title: loaderData.title },
				{
					name: "description",
					content: loaderData.description
				},
				{
					property: "og:title",
					content: loaderData.title
				},
				{
					property: "og:description",
					content: loaderData.description
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: `/servicos/${params.slug}`
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: `/servicos/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: loaderData.faq.map((f) => ({
						"@type": "Question",
						name: f.q,
						acceptedAnswer: {
							"@type": "Answer",
							text: f.a
						}
					}))
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
