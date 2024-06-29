const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { InjectManifest } = require('workbox-webpack-plugin');
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');

module.exports = () => { 
  return {
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
            loader: "ts-loader",
            options: {
              compilerOptions: {
                noEmit: false,
              }
            }
        }
    },
    {
        test: /\.(jpe?g|png|webp|pdf|gif|svg)$/i, 
        type: 'asset/resource'
    }]
  },
  plugins: [
    new InjectManifest({
      include: [[/\.?js$/, /\.(ts)x?/i, /(\.s[ac]ss|css)$/i, /\.(jpe?g|png|webp|pdf|gif|svg)$/i]],
      swDest: "./sw.js",
      swSrc: "./src/pwa/service-worker.js"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/static/index.html'
    }),
    new HtmlWebpackInjectPreload({
      files: [
      { 
        match: /(en|es)-landing-json\..*\.js$/,
        attributes: {as: 'script' },
      },]
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
        { from: "src/resources/fonts/Montserrat-VariableFont_wght.ttf", to: "static/" },
        { from: "src/pwa/service-worker-dev.js", to: "" },
        { from: "src/static/favicon.ico", to: "static/" },
        { from: "src/static/logo192.png", to: "static/" },
        { from: "src/static/logo512.png", to: "static/" },
        { from: "src/static/screenshots/game1.jpeg", to: "static/" },
        { from: "src/static/screenshots/game2.jpeg", to: "static/" },
        { from: "src/static/screenshots/route1.jpeg", to: "static/" },
        { from: "src/static/screenshots/route2.jpeg", to: "static/" },
        { from: "src/static/screenshots/route3.jpeg", to: "static/" },
        { from: "node_modules/react-gpxRouteMap/dist/public/img/marker-icon-start.png", to: "" },
        { from: "node_modules/react-gpxRouteMap/dist/public/img/marker-icon-end.png", to: "" },
        { from: "node_modules/react-gpxRouteMap/dist/public/img/marker-icon.png", to: "" },
        { from: "node_modules/react-gpxRouteMap/dist/public/img/marker-shadow.png", to: "" },
        { from: "public/.well-known/assetlinks.json", to: ".well-known/" },
        { from: "_config.yml", to: "" },
        { from: ".nojekyll", to: "" },
        { from: "src/static/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_11__iPhone_XR_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/12.9__iPad_Pro_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/10.9__iPad_Air_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/10.5__iPad_Air_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/10.2__iPad_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/8.3__iPad_Mini_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_11__iPhone_XR_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/12.9__iPad_Pro_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/10.9__iPad_Air_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/10.5__iPad_Air_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/10.2__iPad_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/8.3__iPad_Mini_portrait.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png", to: "static/" },
        { from: "src/static/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png", to: "static/" },
      ]})
  ]
}
}