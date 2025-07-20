// const des = Object.getOwnPropertyDescriptor(Math ,"PI");

// console.log(des);


const customer = {
  name : "kush",
  password : 123445,
}

const user = Object.getOwnPropertyDescriptor(customer ,"password");
console.log(user);
Object.defineProperty(customer ,"password",{ writable: false });
const userupdate= Object.getOwnPropertyDescriptor(customer ,"password");
console.log(userupdate);
