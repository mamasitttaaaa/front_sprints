// const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
    {
        entry: "./src/client/index.tsx",
        mode: "development",
        target: "web",
        output: {
            // path: path.resolve(_dirname, "dist/client"),
            filename: "client_bundle.js",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/client/index.html",
             }),
        ],
        resolve: {
            extensions: [".js", ".ts", ".tsx", ".jsx"],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.(js|tsx)$/,
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