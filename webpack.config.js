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
    ]
  }
};