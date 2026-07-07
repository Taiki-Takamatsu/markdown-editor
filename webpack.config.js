const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),  // 追加
    publicPath: '/',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    open: true,
    port: 8080,  // 追加
  },
};
