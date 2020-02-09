const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
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
  plugins: [new MiniCssExtractPlugin({
    filename: 'style.css',
  })],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(xml)$/,
        loader: 'xml-loader',
      },
      {
        test: /\.(html)$/,
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
      {
        test: /\.css$/,
        use: [
          // ここでstyle-loaderの代わりにMiniCssExtractPluginを使ったらstyle.cssをパース出来ずに動かなくなる
          // ちなみにfile-loaderをruleの上に持ってくると動くのでttfファイルを先に読み込まないと駄目ということなのかもしれない
          /*
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: `${__dirname}/dist`,
            },
          },
           */
          'style-loader',
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
};