const path = require("path");
const cleanPlugin = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  devtool: "hidden-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        options: {
          compilerOptions: {
            noEmit: false,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  // target: "node",
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    // new cleanPlugin.CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      inject: "head",
      scriptLoading: "defer",
    }),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: "./app.css", to: "app.css" }],
    // }),
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
  ],
};
