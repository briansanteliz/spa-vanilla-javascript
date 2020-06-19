import {pages} from '../controllers/index'
let section = document.getElementById('root')
export const router = async(ruta)=>{
    section.innerHTML = '' //limpio el contenido anterior
    switch(ruta){
        case '#/':  
             section.appendChild(pages.home()) //agrego el html del home en el root
             break;
        case '#/posts':
            section.appendChild(await pages.post())
            break;
        case '#/productos':
            console.log('productos')
            break;
        default:
            section.appendChild(pages.notFound())
            break
    }
}