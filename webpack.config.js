/**
 * Created by deng on 2016/9/23.
 */
var path = require("path");
var webpack = require("webpack");
var Root_PATH = path.resolve('');
var APP_PATH = path.resolve(Root_PATH,'app');

module.exports = {
    entry:{
        app:path.resolve(APP_PATH, 'scripts/index.jsx'),
    },
    output:{
        path:path.resolve(Root_PATH,'dist'),
        publicPath:"http://localhost:81/React-Wenpack-Es6-Demo/dist/",
        filename:'[name].js'
    },
    watch:true,
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/node_mudules/,
                loader:"babel",
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.css$/,
                loader:"style!css"
            },
            {
                test:/\.(jpg|png|gif)/,
                loader:"url?limit=8192&name=[name].[ext]"
            }

        ],
        perLoaders:[
            {
                test:/\.jsx?$/,
                loader:"jshint-loader"
            }
        ]
    },
    jshint:{
        'esnext':true
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
        proxy:{
            'app/*':{
                target:"http://localhost:81/React-Wenpack-Es6-Demo",
                secure:false
            }
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            "window.jQuery":'jquery',
            "jQuery":'jquery'

        })
    ]

};