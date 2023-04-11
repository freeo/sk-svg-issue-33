/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,css,svelte,ts,js}'],
  theme: {
    extend: {},
		fontFamily: {
			sans: ['Lexend', 'ui-sans-serif', 'sans-serif', 'Arial'],
			serif: ['Aclonica', 'EB\\ Garamond', 'ui-serif', 'serif', 'Georgia'],
			mono: ['ui-monospace'],
			aclonica: ['Aclonica'],
			lexend: ['Lexend'],
			caveat: ['Caveat']
		}
  },
  plugins: [],
}
