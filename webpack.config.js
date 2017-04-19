var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: {
		client: "./libs/clients/client.ts"
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "dist/",
		filename: "[name].js",
		library: "tcClient",
		libraryTarget: "var" // "var" | "assign" | "this" | "window" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "amd" | "umd" | "umd2" | "jsonp"
	},
	module: {
		loaders: [
			{ test: /\.ts/, exclude: /node_modules/, loader: "ts-loader" }
		]
	},
	resolve: {
		extensions: [".js", ".ts"]
	},
	plugins: [/*
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: "jquery",
			$: "jquery"
		}),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })*/
	],
    devtool: 'source-map'
};