import { n as __toESM } from "../_runtime.mjs";
import { n as BUSINESS } from "./site-data-1JqZXxXO.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$7 } from "./pintura-em._area-CEMY6Stz.mjs";
import { t as Route$8 } from "./servicos._slug-CPANpbuB.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BfxqJz5L.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DUtn7I2B.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Pintor de Casa e Apartamento em São Paulo | Airless Pintura" },
			{
				name: "description",
				content: "Pintura residencial, comercial e de condomínios em São Paulo com equipamento airless. Orçamento grátis."
			},
			{
				name: "author",
				content: "Airless Pintura Mecanizada"
			},
			{
				property: "og:title",
				content: "Pintor de Casa e Apartamento em São Paulo"
			},
			{
				property: "og:description",
				content: "Pintura residencial, comercial e de condomínios em São Paulo com equipamento airless."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:site_name",
				content: "Airless Pintura Mecanizada"
			},
			{
				property: "og:locale",
				content: "pt_BR"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter+Tight:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$5 = () => import("./routes-jCWUQR3h.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Pintor de Casa e Apartamento em São Paulo | Airless Pintura" },
			{
				name: "description",
				content: "Pintor de casa e apartamento em São Paulo. Pintura mecanizada airless, obra limpa, prazo cumprido e orçamento grátis. Ligue (11) 98415-0526."
			},
			{
				property: "og:title",
				content: "Pintor de Casa e Apartamento em São Paulo"
			},
			{
				property: "og:description",
				content: "Pintura residencial, comercial e de condomínios em São Paulo com equipamento airless. Orçamento sem compromisso."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "HousePainter",
				name: BUSINESS.name,
				telephone: "+5511984150526",
				email: BUSINESS.email,
				areaServed: "São Paulo, SP",
				address: {
					"@type": "PostalAddress",
					addressLocality: "São Paulo",
					addressRegion: "SP",
					addressCountry: "BR"
				},
				openingHours: "Mo-Sa 08:00-18:00"
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contato-BHgHtd38.mjs");
var Route$4 = createFileRoute("/contato")({
	head: () => ({
		meta: [
			{ title: "Contato e Orçamento de Pintura em São Paulo | (11) 98415-0526" },
			{
				name: "description",
				content: "Fale com a Airless Pintura Mecanizada em São Paulo. Orçamento grátis por WhatsApp ou telefone (11) 98415-0526. Seg a Sáb, 8h às 18h."
			},
			{
				property: "og:title",
				content: "Contato e Orçamento de Pintura em São Paulo"
			},
			{
				property: "og:description",
				content: "Orçamento grátis por WhatsApp ou telefone. Atendemos toda São Paulo."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contato"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contato"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./regioes-Bp2FK4LT.mjs");
var Route$3 = createFileRoute("/regioes")({
	head: () => ({
		meta: [
			{ title: "Regiões Atendidas em São Paulo | Airless Pintura" },
			{
				name: "description",
				content: "Pintor em toda São Paulo: Zona Sul, Oeste, Norte, Leste, Centro e ABC Paulista. Veja os bairros atendidos e peça orçamento."
			},
			{
				property: "og:title",
				content: "Regiões Atendidas em São Paulo"
			},
			{
				property: "og:description",
				content: "Zona Sul, Oeste, Norte, Leste, Centro e ABC Paulista — veja os bairros atendidos."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/regioes"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/regioes"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./servicos-CwbTZAP5.mjs");
var Route$2 = createFileRoute("/servicos")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./sobre-qgtSr4Z_.mjs");
var Route$1 = createFileRoute("/sobre")({
	head: () => ({
		meta: [
			{ title: "Sobre a Airless Pintura Mecanizada | Pintores em São Paulo" },
			{
				name: "description",
				content: "Conheça a Airless Pintura Mecanizada: equipe própria, ética, pontualidade e pintura airless em São Paulo desde 2010."
			},
			{
				property: "og:title",
				content: "Sobre a Airless Pintura Mecanizada"
			},
			{
				property: "og:description",
				content: "Equipe própria, obra limpa e pintura mecanizada airless em São Paulo."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/sobre"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/sobre"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./servicos.index-D4Y82CMs.mjs");
var Route = createFileRoute("/servicos/")({
	head: () => ({
		meta: [
			{ title: "Serviços de Pintura em São Paulo | Airless Pintura" },
			{
				name: "description",
				content: "Serviços de pintura em São Paulo: apartamento, residencial, comercial, condomínio, airless, textura e grafiato. Orçamento grátis."
			},
			{
				property: "og:title",
				content: "Serviços de Pintura em São Paulo"
			},
			{
				property: "og:description",
				content: "Conheça todos os serviços de pintura residencial, comercial e de condomínios em São Paulo."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/servicos"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/servicos"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var ContatoRoute = Route$4.update({
	id: "/contato",
	path: "/contato",
	getParentRoute: () => Route$6
});
var RegioesRoute = Route$3.update({
	id: "/regioes",
	path: "/regioes",
	getParentRoute: () => Route$6
});
var ServicosRoute = Route$2.update({
	id: "/servicos",
	path: "/servicos",
	getParentRoute: () => Route$6
});
var SobreRoute = Route$1.update({
	id: "/sobre",
	path: "/sobre",
	getParentRoute: () => Route$6
});
var PinturaEmAreaRoute = Route$7.update({
	id: "/pintura-em/$area",
	path: "/pintura-em/$area",
	getParentRoute: () => Route$6
});
var ServicosIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => ServicosRoute
});
var ServicosRouteChildren = {
	ServicosSlugRoute: Route$8.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => ServicosRoute
	}),
	ServicosIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	ContatoRoute,
	RegioesRoute,
	ServicosRoute: ServicosRoute._addFileChildren(ServicosRouteChildren),
	SobreRoute,
	PinturaEmAreaRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
