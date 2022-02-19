export function RepositoryItem(props){
    return( <li>
    {/* Verifica se o argumento não está vazio, se estiver coloca default */}
    <strong>{props.repository ?? 'Default'} </strong>                 
    <p>Forms in React</p>
    <a href="">
        Acessar repositório
    </a>
</li>
)
}