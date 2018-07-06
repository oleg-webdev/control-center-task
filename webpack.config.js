const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app',
      mobile: true,
      title: 'Autofleet',
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true,
      },
    }),
    new webpack.DefinePlugin({
      __API__: require('./backendUrl')(process.env.NODE_ENV),
    }),
  ],
  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'ATC'),
        ],
      },
      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules', 'postcss-loader'],
        exclude: /flexboxgrid/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer
              ],
              sourceMap: true
            }
          },
          'sass-loader'
          ],
        exclude: /flexboxgrid/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000, // Defaults to 8080
    proxy: {
      '^/api/*': {
        target: 'http://localhost:8080/api/',
        secure: false,
      },
    },
  },
};
