
/** @type {import('tailwindcss').Config} */
export default {
	plugins: [require("daisyui")],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                elite: ["Special Elite", "sans-serif"],
            }
        },
	},
	plugins: [require("daisyui")],
}
