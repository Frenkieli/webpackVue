const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const vueConfig = {
  entry: {
    app: './src/main.js' // 入口文件的位置
  },
  output: {
    filename: '[name].bundle.js', // 输出文件名字的格式
    path: path.resolve(__dirname, 'dist') // 输出的绝对路径
  },
  target: 'web', // 是給web用的,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.scss|\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
            name: '[name][hash].[ext]',
            outputPath: 'images',
            esModule: false,
        },
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
      '@' : path.resolve('./src')
    },
    extensions: [
      ".webpack.js",
      ".web.js",
      ".js",
      // 上面是預設值
      ".vue",
      ".scss",
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}

module.exports = [vueConfig];