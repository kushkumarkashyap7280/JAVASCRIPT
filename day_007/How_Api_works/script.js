const url = "https://api.github.com/users/kushkumarkashyap7280";

const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState == 4) {
    const data = JSON.parse(this.responseText);
    // console.log(data);
    // console.log(data.followers);
    console.log(data.name);
    console.log(data.avatar_url);
    console.log(data.bio);
    document.body.innerHTML = `<img src="${data.avatar_url}" alt="">
   <h1>${data.name}</h1>
   <h2>${data.bio}</h2>`;
  }
};
xhr.send();
