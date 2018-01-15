const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve('./client/src/index.js'),
  output: {
    path: path.resolve('./client/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['transform-decorators-legacy',"transform-object-rest-spread"],
          presets: ['env', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'FIREBASE_APIKEY': process.env.FIREBASE_APIKEY,
        'FIREBASE_AUTHDOMAIN': process.env.FIREBASE_AUTHDOMAIN,
        'FIREBASEDBURL': process.env.FIREBASEDBURL,
        'FIREBASE_PROJECTID': process.env.FIREBASE_PROJECTID,
        'FIREBASE_STOREBUCKET': process.env.FIREBASE_STOREBUCKET,
        'FIREBASE_MESSAGEID': process.env.FIREBASE_MESSAGEID
      }
    }),
  ]

};

// 'FIREBASE_AUTHDOMAIN': process.env.FIREBASE_AUTHDOMAIN,
// 'FIREBASEDBURL': process.env.FIREBASEDBURL,
// 'FIREBASE_PROJECTID': process.env.FIREBASE_PROJECTID,
// 'FIREBASE_STOREBUCKET': process.env.FIREBASE_STOREBUCKET,
// 'FIREBASE_MESSAGEID': process.env.FIREBASE_MESSAGEID