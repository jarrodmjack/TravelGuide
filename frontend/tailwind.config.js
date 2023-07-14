/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		colors: {
			lightCoal: "#3D3D3D",
			darklightCoal: "#1F4A52",
			lightOrange: "#",
			blush: "#DA627D",
			blushDark: "#B0425B",
			buttonGray: "#777777",
			charcoal: "#33404A",
			white: "#fff",
			black: "#000",
			danger: "#DB3033",
		},
	},
	plugins: [],
}
