import { defineConfig } from 'vite'

export default defineConfig(() => ({
	base: 'splash',
	build: {
		outDir: 'docs',
		rollupOptions: {
			input: 'index.html',
			output: {
				entryFileNames: '[name].[hash].js',
				chunkFileNames: '[name].[hash].js',
				assetFileNames: '[name].[hash].[ext]',
			},
		},
	},
}))
