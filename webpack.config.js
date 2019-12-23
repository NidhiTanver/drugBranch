const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
module.exports = {  
   entry: './main.js',  
   output: {  
      path: path.join(__dirname, '/bundle'),  
      filename: 'index_bundle.js'  
   },  
   devServer: {  
      inline: true,  
      port: 3000  
   },  
   module: {
      rules: [
          {
            test: /\.css$/,
            include: /node_modules/,
            loader: 'style!css'
          },
          {  
            test: /\.jsx?$/,  
            exclude: /node_modules/,  
            use: {  
              loader: "babel-loader",  
            }  
          },
         {
            test: /\.scss?$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
         {
           test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
           loader: 'url-loader?limit=100000'
         }
      ]  
   },  
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './index.html'  
      })  
   ]  
}  
