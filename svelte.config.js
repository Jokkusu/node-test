import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			out: 'build',
			precompress: false,
			env: {
				path: 'SOCKET_PATH',
				host: 'HOST',
				port: 'PORT',
				origin: 'ORIGIN',
				headers: {
					protocol: 'PROTOCOL_HEADER',
					host: 'HOST_HEADER'
				}
			}
		}),

		vite: {
			resolve: {
				alias: {
					src: path.resolve('./src')
				}
			},
			ssr: {
				external: ['@xstate/svelte'],
				noExternal: ['@aws-sdk/client-s3']
			}
		}
	}
};

export default config;
