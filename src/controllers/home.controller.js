import home from "../views/home.html";
//import el html de view y lo retorna en un div con el html
export default () => {
    //creando y agregando la vista del home al div
  const div = document.createElement("div");
  div.innerHTML = home;
  const btn = div.querySelector('#btn');
  btn.addEventListener('click',()=>{
      alert('works')
  })
  return div;
};
