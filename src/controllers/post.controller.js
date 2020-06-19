import post from '../views/post.html'

//funcion para realizar peticion get 
const getPost = async()=>{
   const res =  await fetch('urlvaaqui')
    return await res.json()
}

export default async()=>{
    const div = document.createElement('div');
    div.innerHTML = post;
    const postElement = div.querySelector('#post')
    const total = div.querySelector('#total')

    const postGet  = await getPost() //funcion asincrona (try this without await)
    total.innerHTML = postGet.length;
    postGet.forEach(element => {
        postElement.innerHTML = `
        <li class="list-group-item border-primary bd-dark text-white">
            <h5>${element.title}</h5>
            <p>${element.body}</p>
        </li>
        `;
    });
    return div
}