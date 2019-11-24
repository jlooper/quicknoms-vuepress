module.exports = {
	base: '/',
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	title: 'QuickNoms',
	description: 'recipes for all!',
	postcss: {
		plugins: [
		  require("autoprefixer"),
		  require("tailwindcss")("./tailwind.config.js")
		]
	  },
	themeConfig: {
		search: false,
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'Recipe Categories', link: '/blogs/categories/' },
			{ text: 'All Recipes', link: '/blogs/recipes/' },
			{ text: 'Videos', link: '/blogs/videos/' },
			{ text: 'Submit A Recipe', link: '/blogs/submit/' },
		],
	},
};
