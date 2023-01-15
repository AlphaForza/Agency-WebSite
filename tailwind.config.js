module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
	theme: {
		extend: {},
		colors: {
			primary: '#3B71FE',
			text: '#0E0E2C',
			white: '#fff',
			gray: '#A0A4AB',
			darkBlack: '#262A31',
		},
	},
	plugins: [],
};
