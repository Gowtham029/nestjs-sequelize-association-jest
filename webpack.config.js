const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = options => {
    return {
        entry: ["webpack/hot/poll?100", "./src/main.ts"],
        optimization: {
            minimize: false,
        },
        target: "node",
        externals: [
            nodeExternals({
                allowlist: ["webpack/hot/poll?100"],
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.WatchIgnorePlugin({ paths: [/\.js$/, /\.d\.ts$/] }),
            new copyWebpackPlugin({
                patterns: [
                    {
                        from: "package.json",
                        to: ".",
                    },
                ],
            }),
        ],
        output: {
            path: path.join(__dirname, "dist"),
            filename: "index.js",
        },
    };
};
