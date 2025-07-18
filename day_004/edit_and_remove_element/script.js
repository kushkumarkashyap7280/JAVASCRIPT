// get parent class
const parent = document.querySelector(".parent");

console.log(parent);

function addLang(lang) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(lang));

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.style.marginLeft = "8px";
  editBtn.onclick = function () {
    const newLang = prompt("Edit language:", li.firstChild.textContent);
    if (newLang !== null && newLang.trim() !== "") {
      li.firstChild.textContent = newLang;
    }
  };

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "4px";
  deleteBtn.onclick = function () {
    parent.removeChild(li);
  };

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  parent.appendChild(li);
}

let arr = ["python", "java", "c++", "rust", "solidity"];

arr.forEach((val) => addLang(val));
