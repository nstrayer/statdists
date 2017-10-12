module.exports = {
  entry: './src/main.js',
  output: {
    library: 'arrjs',
    libraryTarget: 'umd',
    filename: 'dist/arr.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      },
    ],
  },
};