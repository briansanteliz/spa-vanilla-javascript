import vista404 from '../views/404.html'
export default ()=>{
    const div = document.createElement('div')
    div.innerHTML = vista404;
    return div
}