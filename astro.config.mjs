import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), tailwind()]
});
