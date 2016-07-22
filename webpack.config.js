var webpack = require('webpack')

module.exports = {
  devtool: 'sourcemap',
  entry: { api: './src/api.js' },
  target: 'node',
  output: {
    path: 'dist',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  externals: [ /^[^.]/, /node_modules/ ],
  module: { loaders: [ {
    test: /\.js$/,
    loader: 'babel',
    query: { presets: [ 'babel-preset-es2017', 'node6' ] }
  } ] },
  context: __dirname,
  node: { __filename: true },
  plugins: [ new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: true }) ]
}
