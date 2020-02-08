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
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: `${__dirname}/dist`,
            },
          },
          'css-loader',
        ],
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
      }
    ]
  }
};