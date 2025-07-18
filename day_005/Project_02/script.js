
const height = document.body.querySelector('#height');
const weight = document.body.querySelector('#weight');
const output = document.body.querySelector('#output');
const button = document.body.querySelector('button');


button.addEventListener('click',()=>{
    button.disabled = true;
    button.style.backgroundColor = 'red';
    
    setTimeout(()=>{
      button.style.backgroundColor = 'green';
      button.disabled = false;
      output.value = (weight.value)/(height.value**2);
    },2000);
   

})