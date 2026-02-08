export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.C5dgLGgg.js",app:"_app/immutable/entry/app.D6HCEVk1.js",imports:["_app/immutable/entry/start.C5dgLGgg.js","_app/immutable/chunks/Cw15mJ20.js","_app/immutable/chunks/DBb262p4.js","_app/immutable/chunks/xPvc4RG3.js","_app/immutable/chunks/BYqGYcvs.js","_app/immutable/entry/app.D6HCEVk1.js","_app/immutable/chunks/DBb262p4.js","_app/immutable/chunks/Dur78SpR.js","_app/immutable/chunks/BYqGYcvs.js","_app/immutable/chunks/Cc9Phnl8.js","_app/immutable/chunks/CYAN8bq8.js","_app/immutable/chunks/rSfBYqxu.js","_app/immutable/chunks/xPvc4RG3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/analytics","/contact","/infrastructure"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
