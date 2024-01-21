/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: { 
			'cerulean': 
			{ DEFAULT: '#0081a7', 100: '#001a22', 200: '#003443', 300: '#004d65', 400: '#006787', 500: '#0081a7', 600: '#00b5ed', 700: '#32cfff', 800: '#76dfff', 900: '#bbefff' }, 
			'verdigris': 
			{ DEFAULT: '#00afb9', 100: '#002325', 200: '#004649', 300: '#00696e', 400: '#008c93', 500: '#00afb9', 600: '#00ecf9', 700: '#3bf5ff', 800: '#7cf8ff', 900: '#befcff' }, 
			'light_yellow': 
			{ DEFAULT: '#fdfcdc', 100: '#5a5705', 200: '#b3ae0a', 300: '#f3ec2a', 400: '#f8f484', 500: '#fdfcdc', 600: '#fdfde4', 700: '#fefdeb', 800: '#fefef2', 900: '#fffef8' }, 
			'light_orange': 
			{ DEFAULT: '#fed9b7', 100: '#562a01', 200: '#ad5503', 300: '#fb800c', 400: '#fdad62', 500: '#fed9b7', 600: '#fee2c7', 700: '#fee9d5', 800: '#fff0e3', 900: '#fff8f1' }, 
			'bittersweet': 
			{ DEFAULT: '#f07167', 100: '#3e0a06', 200: '#7c140c', 300: '#bb1e12', 400: '#ea3528', 500: '#f07167', 600: '#f38c84', 700: '#f6a9a3', 800: '#f9c5c2', 900: '#fce2e0' } }
	},
	plugins: [],
}
