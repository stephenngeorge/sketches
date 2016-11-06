module.exports = {
  entry: './public/js/App.js',
  output: {
    path: __dirname,
    filename: 'public/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
        loader: 'babel'
      }
    ]
  }
};
