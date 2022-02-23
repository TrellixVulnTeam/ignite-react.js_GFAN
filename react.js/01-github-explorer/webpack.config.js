const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.isDevelopment !='production';
const ReactRefreshWebPackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports={
    //Definindo o modo, se é de produção ou desenvolvimento
    mode: isDevelopment? 'development' : 'production',
    // ferramenta de source map
    // source-map vai com um pouco mais detalhes e demora um pouco mais
    devtool: isDevelopment?'eval-source-map' : 'source-map',
    //nome arquivo de entrada
    entry: path.resolve(__dirname,'src','index.jsx'),
    //arquivo que eu vou gerar com o webpack
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    //quais formatos devem ser lidos
    resolve:{
        extensions:['.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, 'public'),
    },
    plugins:[
        isDevelopment && new ReactRefreshWebPackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html')
        })
    ].filter(Boolean),
    //configurações de como a aplicação vai se comportar quando eu estiver importando cada um dos tipos de arquivos
    module:{
        rules:[
            {
                //"$"->isso significa deve terminar 
                //usa a barra pra fazer um escape dentro d achama regular
                test: /\.jsx$/,
                //excluir arquivos dentro da pasta node_modules, pois por padrão esses arquivos já são arquivos prontos pra irem pro browser ler. mas cada biblioteca tem que fazer sua conversão.
                exclude:/node_modules/,
                //integração entre o babel e o webpack('babel loader'))
                //Vai converter o arquiv jsx pra uma forma que o browser entenda
                use:{
                    loader: 'babel-loader',
                    options:{
                        plugins:[
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }
                
            },
     
            {
                test: /\.scss$/,
                exclude:/node_modules/,
                use:['style-loader', 'css-loader','sass-loader'],
            }
        ],
    }

};