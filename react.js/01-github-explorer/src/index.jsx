
import {render} from 'react-dom';
// Não precisamos colocar a extensão pois como colocamos no arquivo webpack o "resolve"
import { App } from './App'
//recebe "oque que eu quero renderizar" e "dentro de qual elemento eu quero renderizar a informação0"
render(<App/>, document.getElementById('root'))
