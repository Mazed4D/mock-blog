module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'Mock Blog',
	},
	plugins: [
		{
			resolve: 'gatsby-source-datocms',
			options: {
				apiToken: '277e0e30570753bcdcf1b9ace663bd',
			},
		},
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		`gatsby-plugin-portal`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
	],
};
