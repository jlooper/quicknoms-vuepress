module.exports = {
	base: '/',
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	title: 'QuickNoms',
	description: 'recipes for all!',
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')],
	},
	themeConfig: {
		search: false,
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'All Recipes', link: '/yum/recipes/' },
			{ text: 'Videos', link: '/yum/videos/' },
			{ text: 'Submit A Recipe', link: '/yum/submit/' },
		],
	},
};
