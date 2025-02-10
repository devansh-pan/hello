import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	server:{
		allowedHosts:['*.sisko.replit.dev','*.vercel.app',"7cb39e3d-87aa-4d86-8bec-72d23dcc77bd-00-79j6xhj2upp2.sisko.replit.dev"]
	}
});
