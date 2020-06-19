//importando el boostrap desde node_modules
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
import  {router} from  './router/index.routes'

//cuando inicie la app se ejecuta el switch con la vista home
router(window.location.hash)

//evento para cuando cambia la url del navegador
window.addEventListener('hashchange', ()=>{
     router(window.location.hash)

})