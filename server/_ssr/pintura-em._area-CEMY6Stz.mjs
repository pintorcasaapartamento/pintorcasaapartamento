import { t as AREAS } from "./site-data-1JqZXxXO.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pintura-em._area-CEMY6Stz.js
var $$splitComponentImporter = () => import("./pintura-em._area-BlFDp4un.mjs");
var Route = createFileRoute("/pintura-em/$area")({
	loader: ({ params }) => {
		const area = AREAS.find((a) => a.slug === params.area);
		if (!area) throw notFound();
		return area;
	},
	head: ({ loaderData, params }) => {
		if (!loaderData) return { meta: [{ title: "Região não encontrada" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `Pintor na ${loaderData.name} | Casa e Apartamento`;
		const description = `Pintor de casa e apartamento na ${loaderData.name}. Atendemos ${loaderData.neighborhoods.slice(0, 3).join(", ")} e região com pintura airless. Orçamento grátis.`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: `/pintura-em/${params.area}`
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: `/pintura-em/${params.area}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
