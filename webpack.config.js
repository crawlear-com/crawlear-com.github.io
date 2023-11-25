const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path:path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
    {
        test: /(\.s[ac]ss|css)$/i,
        use: ["style-loader", 
          "css-loader",
          "sass-loader"]
    },
    {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
    },
    {
      test: /\.(ts)x?/i,
        exclude: /node_modules/,
        use: {
            loader: "ts-loader"
        }
    },
    {
        test: /\.(jpe?g|png|pdf|gif|svg)$/i, 
        type: 'asset/resource'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/static/index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'src/static/404.html',
      chunks: ['404']
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/static/sitemap.xml", to: "" },
        { from: "src/static/manifest.json", to: "" },
        { from: "src/static/robots.txt", to: "" },
        { from: "src/pwa/service-worker.js", to: "" },
        { from: "src/pwa/service-worker-dev.js", to: "" },
        { from: "src/static/favicon.ico", to: "static/" },
        { from: "src/static/logo192.png", to: "static/" },
        { from: "src/static/logo512.png", to: "static/" },
        { from: "node_modules/react-gpxRouteMap/dist/public/img/marker-icon-start.png", to: "" },
        { from: "node_modules/react-gpxRouteMap/dist/public/img/marker-icon-end.png", to: "" },
        { from: "node_modules/react-gpxRouteMap/dist/public/img/marker-icon.png", to: "" },
        { from: "node_modules/react-gpxRouteMap/dist/public/img/marker-shadow.png", to: "" },
        { from: "public/.well-known/assetlinks.json", to: ".well-known/" },
        { from: "_config.yml", to: "" },
        { from: ".nojekyll", to: "" }
      ]})
  ]
}