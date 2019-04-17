const path = require("path");
const webpack = require("webpack");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
const AggressiveMergingPlugin = require("webpack/lib/optimize/AggressiveMergingPlugin");

module.exports = {
  entry: {
    index: ["babel-polyfill", "./src/index.js"]
  },
  devtool: "sourcemaps",
  cache: true,
  output: {
    path: __dirname,
    filename: "dist/bundle.min.js"
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, "."),
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader?name=[name].[ext]"
            /*
                        options: {
                            outputPath: '../../resources/javascript/react/app/',
                            name: '[name].[ext]?hash=[hash]',
                            limit: 8192
                        }
                        */
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          }
        ]
      },
      {
        type: "javascript/auto",
        test: /\.json$/,
        use: {
          loader: "json-loader",
          options: {
            name: "[name].[ext]"
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?[\s\S]+)?$/,
        use: {
          loader: "url-loader?name=[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __JAHIA__: true,
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new AggressiveMergingPlugin({
      minSizeReduce: 1.5
    })
    /*
        new CompressionPlugin({
            cache: true,
            deleteOriginalAssets: true,
            filename: '[path].gz[query]'
        })
        */
  ],
  optimization: {
    minimize: true,
    concatenateModules: true
    /*
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: true,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
        */
  }
};
