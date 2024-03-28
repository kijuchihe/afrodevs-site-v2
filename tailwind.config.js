/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "967px",
			lg: "1080px",
			xl: "14400px",
		},
		extend: {
			colors: {
				green: "#06A290",
				"darkened-green": "#05867D",
				"brand-green": "#05574D",
				"light-green": "#DDEEEC",
				grey: "#4A5452",
				"light-grey": "#96A2A0",
				brown: "#BC7F10",
				"light-brown": "#FBECD0",
				lime: "#4B8D0C",
				"light-lime": "#E5FBD0",
				blue: "#1018BC",
				"light-blue": "#D0D2FB",
				pink: "#EF4343",
				"light-pink": "#FBD0D0",
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				lexend: ["Lexend", "sans-serif"],
			},
		},
	},
	plugins: [],
};
