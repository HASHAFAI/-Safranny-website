const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports ={

    entry: { 
        index: path.resolve(__dirname, './src/index.js'),
        accountLogin: path.resolve(__dirname, './src/js/accountLogin.js'), 
        pyramids: path.resolve(__dirname, './src/js/pyramids.js'), 
        istanbul: path.resolve(__dirname, './src/js/istanbul.js'), 
    },
    output:{
        path:path.join(__dirname,"/dist"),
        filename:"[name].js"
    },
    mode:'development',
    devServer:{
        contentBase:path.join(__dirname,"/dist"),
        port:1239,
        writeToDisk:true,
        // open:true,
        },
    module:{
        rules:[
            {
                test:/\.html$/,
                use:[
                    {
                    loader:"html-loader",
                    options:{
                     minimize:true,
                    },
                 },
                ]
            },
            {
                   test:/\.(sa|sc|c)ss$/,
                   use:[
                    miniCssExtractPlugin.loader,
                       "css-loader",
                    //    'postcss-loader',
                       'sass-loader',
                   ]
               },
               {
                test: /\.(png|svg|jpe?g|gif|jfif)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                          name:"[name].[ext]",
                          outputPath: 'images',
                        },
                    }
                ]
              },
              {
                test: /\.(sfg|eot|woff|woff2||ttf)$/i,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                          name:"[name].[ext]",
                          outputPath: 'fonts',
                          esModule:false,
                        },
                    }
                ]
              },
              {
                //   تحديد المسار المطلق لجيكويري من مكتبت نود
                test: require.resolve("./src/asset/jquery-3.1.1.min.js"),
                loader: "expose-loader",
                options: {
                    //التعرف على صيغ مكتبت جيكويري 
                  exposes: ["$", "jQuery"],
                },
              },
        ]
    },
    plugins:[
        // [
        //     "postcss-preset-env",
        //     {
        //       Options
        //     },
        //   ],    
        new htmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),
        new htmlWebpackPlugin({
            filename:"account.html",
            template:"./src/account.html"
        }),
        new htmlWebpackPlugin({
            filename:"accountLogin.html",
            template:"./src/accountLogin.html"
        }),
        new htmlWebpackPlugin({
            filename:"pyramids.html",
            template:"./src/pyramids.html"
        }),
        new htmlWebpackPlugin({
            filename:"istanbul.html",
            template:"./src/istanbul.html"
        }),
        new miniCssExtractPlugin({filename:"css/[name].css",}),
        new optimizeCssAssetsWebpackPlugin({})
    ]
}