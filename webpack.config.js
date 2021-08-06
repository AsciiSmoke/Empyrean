const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    cache: true,
    entry: {
        index: path.resolve(__dirname, "./src/scripts/index.tsx"),
        list: path.resolve(__dirname, "./src/scripts/list.tsx"),
        mtg: path.resolve(__dirname, "./src/scripts/mtg.tsx"),
    },

    output: {
        path: __dirname + "/dist/scripts",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
            scripts: path.resolve(__dirname, 'src/scripts/'),
            styles: path.resolve(__dirname, 'src/styles/'),
        }
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ]
    },

    plugins: [
        new WebpackNotifierPlugin({ alwaysNotify: true }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons-stuff',
            filename: 'commons-bundle.js',
            minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
        }),

        new UglifyJSPlugin({
            sourceMap: true,
            parallel: 4,
            uglifyOptions: {
                ecma: 7
            },
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ],

    externals: {
        // Uncomment next two lines when using a CDN for React
        // react: 'React',
        // 'react-dom': 'ReactDOM',
    }
};
