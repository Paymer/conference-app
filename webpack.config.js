var path = require('path');
var webpack = require("webpack");

var HtmlWebpackPlugin = require('html-webpack-plugin');
//var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
// définition des points d'entrée
// il est possible de définir plusieurs points d'entrée
entry: './src/index.js',
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
        },
        module: {
    rules: [
        {
            test: /\.(css)$/,
            use: ['style-loader', 'css-loader']
        },

        {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader?name=fonts/[name].[ext]'
        },
      { test: /\.html$/, use: [ "html-loader" ] }
    ]
  },
plugins: [
    //new UglifyJSPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
	$: "jquery",
	jQuery: "jquery",
	"window.jQuery": "jquery",
	Popper:'popper.js'
})
        ]
};