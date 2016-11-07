var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
      // { test: /\.s?css$/, loader: 'style!css!sass' },
      {
        test: /\.scss$/,
         loaders: ["style", "css?sourceMap?root=.", "sass?sourceMap"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url?limit=8192?',
          'img'
        ]
      },
      {
        test: /\.mp3$/,
        loaders: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
