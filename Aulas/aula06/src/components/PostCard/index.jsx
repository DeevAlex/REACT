// padrão caso a função que estiver sendo exportada seja um jsx então esse arquivo atual a extensão dele será .jsx caso retorne um codigo JS normal coloque somente .js (convenção)

// Pode ser um componente de função ou classe que tenha o metodo render

// props são propriedades que passamos para dentro de componentes
export const PostCard = (props) => { // podemos fazer destructuring diretamente no parametro ou dentro da funcão, fazendo assim {props} ou pegar cada um {title, cover, body, id}

    // Essas props vai ser um objeto, essas propriedades são os atributos que tem no elemento, Ex.: <(nome do componente) src='Ola' ou pode ser title={elemento.title} />, esse src e o atributo, e fica assim no objeto: {src: 'Ola'}

    const { elemento } = props; // aqui devemos colocar do mesmo nome do atributo lá

    return (
        <div className='post'>
            <img src={elemento.cover} alt={elemento.title}/>
            <div key={elemento.id} className='postContent'> 
            <h1>{elemento.title}</h1>
            <p>{elemento.body}</p>
            </div>
        </div>
    )

}

// a key ali em cima não faz sentido por que não está dentro de um map por exemplo