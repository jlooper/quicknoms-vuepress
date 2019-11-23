module.exports = {
	base: '/',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
		[
			"script",
			{
			  src: "https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"
			}
		  ],
		  [
			"script",
			{
			  src: "https://www.gstatic.com/firebasejs/7.5.0/firebase-database.js"
			}
		  ],	  
		  [
			"script",
			{},
			`var config = {
				apiKey: "AIzaSyDN14it6FJtzdqQBb_PHCKXXk0dAqAYTqM",
				authDomain: "quicknoms-91e39.firebaseapp.com",
				databaseURL: "https://quicknoms-91e39.firebaseio.com",
				projectId: "quicknoms-91e39",
				storageBucket: "quicknoms-91e39.appspot.com",
				messagingSenderId: "631928188702",
				appId: "1:631928188702:web:b8d837ab9f948c5dff230f"
			};
			firebase.initializeApp(config);`
		  ],
		  
		],
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
