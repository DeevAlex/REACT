// padrão caso a função que estiver sendo exportada seja um jsx então esse arquivo atual a extensão dele será .jsx caso retorne um codigo JS normal coloque somente .js (convenção)

// Pode ser um componente de função ou classe que tenha o metodo render

// props são propriedades que passamos para dentro de componentes
export const PostCard = ({title, cover, body, id}) => { // podemos fazer destructuring diretamente no parametro ou dentro da funcão, fazendo assim {props} ou pegar cada um {title, cover, body, id}

    return (
        <div className='post'>
            <img src={cover} alt={title}/>
            <div key={id} className='postContent'> 
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )

}

// a key ali em cima não faz sentido por que não está dentro de um map por exemplo