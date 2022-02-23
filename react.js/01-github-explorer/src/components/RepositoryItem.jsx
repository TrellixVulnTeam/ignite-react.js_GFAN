
export function RepositoryItem(props){
    return( 
        <li>
             {/* Verifica se o argumento não está vazio, se estiver coloca default */}
            <strong>{props.repository.name} </strong>                 
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}> 
                Acessar repositório
            </a>
         </li>
    );
}