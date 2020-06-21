
const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: {
      main: './src/index.js'
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist')
    }
  };
