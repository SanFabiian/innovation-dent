const webpack = require('webpack');
const WebpackModules = require('webpack-modules');
const path = require('path');
const config = require('sapper/config/webpack.js');
const pkg = require('./package.json');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const alias = {
	svelte: path.resolve('node_modules', 'svelte'),
	'@static': path.resolve(__dirname, 'static/'),
	'@components': path.resolve(__dirname, 'src/components/'),
	'@utils': path.resolve(__dirname, 'src/Utils/'),
	'@post' :path.resolve(__dirname, 'src/routes/blog/')
};
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html'];
const mainFields = ['svelte', 'module', 'browser', 'main'];
const fileLoaderRule = {
	test: /\.(png|jpe?g|gif|svg|mp4)$/i,
	use: [
		'file-loader',
	]
};

module.exports = {
	client: {
		entry: config.client.entry(),
		output: config.client.output(),
		resolve: {alias, extensions, mainFields },
		module: {
			rules: [
				{
					test: /\.(svelte|html)$/,
					use: {
						loader: 'svelte-loader',
						options: {
							compilerOptions: {
								dev,
								hydratable: true
							},
							hotReload: false
						}
					}
				},
				fileLoaderRule
			]
		},
		mode,
		plugins: [
			new webpack.DefinePlugin({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
		].filter(Boolean),
		devtool: dev && 'inline-source-map'
	},

	server: {
		entry: config.server.entry(),
		output: config.server.output(),
		target: 'node',
		resolve: { alias, extensions, mainFields },
		externals: Object.keys(pkg.dependencies).concat('encoding'),
		module: {
			rules: [
				{
					test: /\.(svelte|html)$/,
					use: {
						loader: 'svelte-loader',
						options: {
							compilerOptions: {
								css: false,
								generate: 'ssr',
								hydratable: true,
								dev
							},
						}
					}
				},
				fileLoaderRule
			]
		},
		mode,
		plugins: [
			new WebpackModules()
		],
		performance: {
			hints: false // it doesn't matter if server.js is large
		}
	},

	serviceworker: {
		entry: config.serviceworker.entry(),
		output: config.serviceworker.output(),
		mode
	}
};
