import { resolve } from 'path'
import webpack from 'webpack'
import type { Configuration } from 'webpack-dev-server'
import packageData from './package.json'

module.exports = <webpack.Configuration & { devServer: Configuration }>{
  entry: packageData.main,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss')(require('./tailwind.config.js')),
                  require('autoprefixer')
                ]
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': resolve(__dirname, 'src/')
    }
  },
  output: {
    path: resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'index.js'
  },
  devServer: {
    static: [
      {
        directory: resolve(__dirname, 'src/base/'),
        publicPath: '/',
        watch: true
      }
    ],
    client: {
      progress: true
    },
    hot: true,
    compress: true,
    port: 3000
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
