export const loadPosts = async () => { // não é um componente, uma classe e nem uma função construtora por isso está em letra minuscula

    const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts")
    const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos")
    
    // resolvendo tudo de uma vez usando .all
    const [ posts, photos ] = await Promise.all([ postsResponse, photosResponse ])
    
    const postsJSON = await posts.json() // as informações recebidas e trasformando em json
    const photosJSON = await photos.json()
    
    const postsAndPhotos = postsJSON.map((post, index) => { // percorrendo o postsJSON e pegando o indice e o post
        return { ...post, cover: photosJSON[index].url } // retornando um objeto que tem o post atual da iteração e colocando uma outra propriedade nesse objeto que é a url da foto
    })

    return postsAndPhotos

}