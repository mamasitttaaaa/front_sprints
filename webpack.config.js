// const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
    {
        entry: "./packages/app/messenger/src/index.ts",
        mode: "development",
        target: "web",
        output: {
            // path: path.resolve(_dirname, "dist/client"),
            filename: "client_bundle.js",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./packages/app/messenger/src/html/index.html",
             }),
        ],
        resolve: {
            extensions: [".js", ".ts", ".tsx", ".jsx"],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                        },
                    },
                },
            ]
        }
    }
]