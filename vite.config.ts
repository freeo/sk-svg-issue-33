import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [
		sveltekit(),
		// svg()
		svg({
			svgoOptions: {
				datauri: false,
				plugins: [
					{ name: 'preset-default', params: { overrides: { removeViewBox: false } } },
					'removeDimensions'
				]
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
