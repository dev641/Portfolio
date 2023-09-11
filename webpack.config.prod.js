/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
// const cleanPlugin = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  devServer: {
    liveReload: true,
    static: [
      {
        directory: path.join(__dirname, 'public')
      }
    ]
  },
  devtool: 'hidden-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    // new cleanPlugin.CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx', 'scss', 'css'], // Specify file extensions to lint
      fix: true // Enable auto-fixing of ESLint errors
    }),
    new StylelintPlugin({
      configFile: './.stylelintrc.json', // Path to your Stylelint config file
      context: 'src', // The root directory for Stylelint to search for files
      files: '**/*.scss', // Specify the file patterns to lint (e.g., SCSS files)
      failOnError: true, // Fail the build if there are linting errors
      quiet: false, // Display linting output to the console
      fix: true // Enable auto-fixing of stylelint errors
    }),
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer'
    }),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: "./app.css", to: "app.css" }],
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ]
}
