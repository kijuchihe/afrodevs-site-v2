/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1080px",
			xl: "1200px",
		},
		extend: {
			colors: {
				green: "#06A290",
				"brand-green": "#05574D",
				"light-green": "#DDEEEC",
				text: "#4A5452",
				"light-text": "#96A2A0",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				lexend: ["Lexend", "sans-serif"],
			},
		},
	},
	plugins: [],
};
