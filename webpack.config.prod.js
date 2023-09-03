/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable new-cap */
const path = require('path')
// const cleanPlugin = require('clean-webpack-plugin')
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  devServer: {
    static: [
      {
        directory: path.join(__dirname)
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
  // target: "node",
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    // new cleanPlugin.CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'head',
      scriptLoading: 'defer'
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx', 'scss', 'css'],
      files: ['src'], // Specify directories or files to lint
      failOnError: true,
      fix: true
    }),
    new StylelintPlugin({
      configFile: './.stylelintrc.json', // Path to your Stylelint config file
      context: 'src', // The root directory for Stylelint to search for files
      files: '**/*.scss', // Specify the file patterns to lint
      fix: true // Enable auto-fixing of stylelint errors
    }),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: "./app.css", to: "app.css" }],
    // }),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ]
}
