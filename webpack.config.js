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
    publicPath: '/dist/',
  },

  devServer: {
    hot: true,
    open: true,
  },
};
