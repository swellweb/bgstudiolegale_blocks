/* webpack.config.json */
const path = require("path");
const glob = require('glob');
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const external = require('./external')
const fs = require('fs')
const fileNames = fs.readdirSync('./src').reduce((acc, v) => ({ ...acc, [v]: `./src/${v}` }), {});


module.exports = [
  {
    mode: "development",
    entry: fileNames,
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: '[name].build.js',
      sourceMapFilename: '[name].[hash:8].map',
      chunkFilename: '[id].[hash:8].js',
      clean:true
    },
    devtool:'source-map',
    resolve: {
      alias: {
        vue: "vue/dist/vue.js",
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true,
          },
        },
      },
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin({
          exclude: /(node_modules|bower_components)/,
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        // You don't need this for `>= 5.52.0` due to the fact that this is enabled by default
        // Required only for `>= 5.33.2 & <= 5.52.0`
        // Not available/unsafe for `<= 5.33.2`
        experimentalUseImportModule: true,
      }),

      new VueLoaderPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { sourceMap: true } },
            { loader: "sass-loader", options: { sourceMap: true } },
          ],
        },
        {
          test: /^.*\**\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /^.*\**\.vue$/, 
          loader: "vue-loader",
        },
      ],
    },
    stats: {
      colors: true,
    },
    externals: external
  },
];
