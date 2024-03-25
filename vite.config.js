/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/CarMasters/",

	// Шрифти
	resolve: {
		alias: [
			{ find: '@fonts', replacement: resolve(__dirname, 'src/assets/fonts') },
			{ find: '@common', replacement: resolve(__dirname, 'src/assets/scss/common.scss') },
			{ find: '@images', replacement: resolve(__dirname, 'src/assets/images/') }

		]
	}
});