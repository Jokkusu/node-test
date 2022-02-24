export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","lotti-logo.png","smui.css"]),
	_: {
		mime: {".png":"image/png",".css":"text/css"},
		entry: {"file":"start-04c71d97.js","js":["start-04c71d97.js","chunks/vendor-c8dd5f6b.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/admin\/panel\/?$/,
				params: null,
				path: "/admin/panel",
				shadow: null,
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/admin\/panel\/companies\/?$/,
				params: null,
				path: "/admin/panel/companies",
				shadow: null,
				a: [0,3,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/admin\/panel\/banners\/?$/,
				params: null,
				path: "/admin/panel/banners",
				shadow: null,
				a: [0,3,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/admin\/panel\/lottis\/?$/,
				params: null,
				path: "/admin/panel/lottis",
				shadow: null,
				a: [0,3,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/admin\/auth\/?$/,
				params: null,
				path: "/admin/auth",
				shadow: null,
				a: [0,8,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/admin\/auth\/password-recovery\/?$/,
				params: null,
				path: "/admin/auth/password-recovery",
				shadow: null,
				a: [0,8,10],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/lotti\/?$/,
				params: null,
				path: "/lotti",
				shadow: null,
				a: [0,11],
				b: [1]
			}
		]
	}
};
