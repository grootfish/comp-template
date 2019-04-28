const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, "./src/"),
          to: path.resolve(__dirname, "./lib"),
          ignore: ["*.js", "*.vue"]
        }
      ])
    ]
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, "./src"));
    config.module
      .rule('eslint')
      .exclude.add(path.resolve(__dirname, "./lib"))
      .end();
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "./src"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  }
};
