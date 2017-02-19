import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin'

let nodeModules = {}
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => {
    nodeModules[mod] = `commonjs ${mod}`
  })

/**
 * @todo: Create base config
 */
export default [
  // Server
  {
    entry: path.join(__dirname, './server/index.js'),
    target: 'node',
    node: {
      __dirname: true
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'server.js'
    },
    externals: nodeModules,
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: ExtractTextWebpackPlugin.extract(
             'style',
             'css?modules&importLoaders=1'
           )
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __CLIENT__: false
      }),
      new ExtractTextWebpackPlugin('styles.css')
    ]
  },
  // Client
  {
    entry: path.join(__dirname, '/client/index.js'),
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loaders: ['style', 'css?modules']
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __CLIENT__: true
      })
    ]
  }
]
