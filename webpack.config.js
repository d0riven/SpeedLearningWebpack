const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
    // sub: './src/sub.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name]-[chunkhash].js'
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true, // consoleを削除
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: 8080,
    watchOptions: {
      aggregateTimeout: 300, // 300ms
      ignored: [],
    }
  },
  devtool: 'eval-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      title: '速習webpack',
      filename: 'index.html',
      template: 'src/index.ejs',
    }),
    new CleanWebpackPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: false,
          failOnError: true,
        },
      },
      {
        test: /\.xml$/,
        loader: 'xml-loader',
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', ':data-src'],
          },
        },
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { // 50KB以上であれば./images/xxx.jpgという名前で出力される
              limit: 51200,
              name: './images/[name].[ext]',
              // fallback: 'file-loader', // デフォルト値でfile-loaderがlimitを超えた場合のloaderに指定されている
            },
          },
        ],
      },
      // {
      //   test: /\.s[ac]ss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'], // sass-loaderが一番最後じゃないと意図した通りに動かない
      // },
      {
        test: /\.css$/,
        use: [
          // ここでstyle-loaderの代わりにMiniCssExtractPluginを使ったらstyle.cssをパース出来ずに動かなくなる
          // ちなみにfile-loaderをruleの上に持ってくると動くのでttfファイルを先に読み込まないと駄目ということなのかもしれない
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: `${__dirname}/dist`,
            },
          },
          // 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};