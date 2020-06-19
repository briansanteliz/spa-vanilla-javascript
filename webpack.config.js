const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "js/bundle.js",
  },
  //loaders
  module: {
    rules: [
        //   //entiende los achivos css
       {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      
      //entiende los files sass || scss
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      //permite importa html a js y este sera convertido a un String
      {
        test:/\.html$/i,
        loader:'html-loader'
      },
    
    ],
  },
  //sevidor de desarrollo
  devServer: {
    port: 4000,
  },
  //extrae el html
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
