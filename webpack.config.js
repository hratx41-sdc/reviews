const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: __dirname + '/public/index.jsx',
  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv()
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  }
};