const path = require('path')
module.exports={
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
    //configurações de como a aplicação vai se comportar quando eu estiver importando cada um dos tipos de arquivos
    module:{
        rules:[
            {
                //"$"->isso significa deve terminar 
                //usa a barra pra fazer um escape dentro d achama regular
                test: /\.jsx$/,
                //excluir arquivos dentro da pasta node_modules, pois por padrão esses arquivos já são arquivos prontos pra irem pro browser ler. mas cada biblioteca tem que fazer sua conversão.
                exclude:/node_modules/,
                //integração entre o babel e o webpack
                //Vai converter o arquivo jsx pra uma forma que o browser entenda
                use:'babel-loader',
                
            }
        ],
    }

};