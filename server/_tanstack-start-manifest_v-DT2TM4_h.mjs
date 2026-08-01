//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-DT2TM4_h.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/dev-server/src/routes/__root.tsx",
		children: [
			"/",
			"/contato",
			"/regioes",
			"/servicos",
			"/sobre",
			"/pintura-em/$area"
		],
		preloads: [
			"/assets/index-B_BiIY4t.js",
			"/assets/useStore-BI3_Wmfo.js",
			"/assets/site-data-CAm0M-uX.js",
			"/assets/matchContext-D8bLaqWY.js"
		],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-B_BiIY4t.js"
		} }]
	},
	"/": {
		filePath: "/dev-server/src/routes/index.tsx",
		children: void 0,
		preloads: ["/assets/routes-BL1TLWrS.js", "/assets/Layout-CRlyfTMy.js"]
	},
	"/contato": {
		filePath: "/dev-server/src/routes/contato.tsx",
		children: void 0,
		preloads: ["/assets/contato-CoRtcvxZ.js", "/assets/Layout-CRlyfTMy.js"]
	},
	"/regioes": {
		filePath: "/dev-server/src/routes/regioes.tsx",
		children: void 0,
		preloads: ["/assets/regioes-B20vs6rL.js", "/assets/Layout-CRlyfTMy.js"]
	},
	"/servicos": {
		filePath: "/dev-server/src/routes/servicos.tsx",
		children: ["/servicos/$slug", "/servicos/"],
		preloads: ["/assets/servicos-kfWdkKqt.js"]
	},
	"/sobre": {
		filePath: "/dev-server/src/routes/sobre.tsx",
		children: void 0,
		preloads: ["/assets/sobre-BdgYMR5f.js", "/assets/Layout-CRlyfTMy.js"]
	},
	"/pintura-em/$area": {
		filePath: "/dev-server/src/routes/pintura-em.$area.tsx",
		children: void 0,
		preloads: ["/assets/pintura-em._area-eioylyoB.js", "/assets/Layout-CRlyfTMy.js"]
	},
	"/servicos/$slug": {
		filePath: "/dev-server/src/routes/servicos.$slug.tsx",
		children: void 0,
		preloads: ["/assets/servicos._slug-Dp_0Tw7N.js", "/assets/Layout-CRlyfTMy.js"]
	},
	"/servicos/": {
		filePath: "/dev-server/src/routes/servicos.index.tsx",
		children: void 0,
		preloads: ["/assets/servicos.index-BjOmzCDm.js", "/assets/Layout-CRlyfTMy.js"]
	}
} });
//#endregion
export { tsrStartManifest };
