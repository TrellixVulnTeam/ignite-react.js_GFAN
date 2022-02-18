const { runtime } = require("webpack");

//Exportar configurações do babel
module.exports={
    presets:[ 
        '@babel/preset-env',
        ['@babel/preset-react' , { 
            //para não ter que importar o react em todas os arquivos
             runtime:'automatic'}
]   ]

}