
// FIRST LETS  select all necessary nodes
const main = document.querySelector('#main');

console.log(main);
console.log(main.children);

for(let i = 0 ; i < main.children.length; i++){
 const colur = document.querySelector('#main').children[i];
 colur.style.backgroundColor = `${colur.id}`;
  
 document.querySelector('#main').children[i].addEventListener('click',()=>{
  document.body.style.backgroundColor = `${colur.id}`;
 })
  
}