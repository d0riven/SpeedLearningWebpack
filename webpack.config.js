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
};