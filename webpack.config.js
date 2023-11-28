const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'widget-bundle.js',
        library: 'MyWidget',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
              },
        
              // Add a rule for font files
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
              },
           
        ]
    },

    devServer: {
        static: path.join(__dirname, 'dist'), // Your distribution directory
        port: 3000, // Port number for the dev server
        open: true, // Open the browser after server had been started
        hot: true // Enable hot-module-replacement feature
    },
    // Enable source maps for debugging
    devtool: 'inline-source-map',
};
