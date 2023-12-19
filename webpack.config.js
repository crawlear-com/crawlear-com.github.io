const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0, // Set to 0 to enforce splitting regardless of size
      maxSize: 250000
    },
  },
  performance: {
    hints: false,
    maxAssetSize: 500 * 1024, // 500kb in bytes
  },
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
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
        test: /\.(jpe?g|png|webp|pdf|gif|svg)$/i, 
        type: 'asset/resource'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/static/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: 'src/static/404.html'
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