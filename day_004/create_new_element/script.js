
// parents to child 
const parent = document.querySelector('.parent');

console.log("parent");
console.log(parent);
// output in browser console;
/*
<ul class="parent">
    <li class="child">child 1</li>
    <li class="child">child 2</li>
    <li class="child">child 3</li>
    <li class="child">child 4</li>
    <li class="child">child 5</li>
   </ul>
*/

console.log("parent 's children");
console.log(parent.children);

console.log("now lets see in nodes form");
console.log(parent.childNodes);

console.log("parent first element child means text not consider here ");
console.log(parent.firstElementChild);

console.log("parent first child even it just a txt");
console.log(parent.firstChild);


// output :htmlcollection
/*{
    "0": {},
    "1": {},
    "2": {},
    "3": {},
    "4": {}
}
*/

// iterate and change according  to your wish
for(let i = 0; i < parent.children.length; i++){
 
    parent.children[i].innerText = `hello world ${i}`;
}

// child to parent

const child = document.querySelector('.child');

console.log("child");
console.log(child);

console.log("child's parent");
console.log(child.parentElement);

console.log("child's next");
console.log(child.nextElementSibling);



// now lets create new element

const newElement = document.createElement('div');

newElement.id = "id";
newElement.classList ="class";

// set attribute
newElement.setAttribute("kush" , "kumar");

newElement.style.backgroundColor = "red";
newElement.style.height ="50px";
newElement.style.width = "50px";

// newElement.innerText = "kush kumar"  // tihs is wrong way why

const addtext = document.createTextNode("kush kumar");
newElement.appendChild(addtext); //prefer this


console.log("our div");
console.log(newElement);

// append into body

document.body.appendChild(newElement);
