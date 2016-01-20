var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        number: './number/Integer.js',
        color: './color/Point.js',
        main: './es6/main.js'
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        library: ["zul", "[name]"],
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                query: {
                  presets: 'es2015',
                },
            }
        ]
    },
    externals: {
        'Color':{
            root: ['zul', "color"]
        },
        'Number':{
            root: ['zul', "number"]
        }
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
   devtool: 'source-map',
};
