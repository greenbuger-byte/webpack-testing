const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ( paths )=>({
  plugins: [new MiniCssExtractPlugin({
    filename: "dist/css/[name].css",
  })],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        include: paths,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});