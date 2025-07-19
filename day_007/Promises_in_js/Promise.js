// ============================== PROMISES IN JAVASCRIPT ================================

// promise  is an obj in js  which works  async and have to state first  resolve and seoncd is reject ;
// it is helps you to make custom promise and little feel of how apis works



// first way of using promises

// const mypromise = new Promise((resolve , reject)=>{
//    setTimeout(()=>{
//     console.log("data from backend has come");
//     resolve();
//    },2000);
// });

// mypromise.then(()=>{
//   console.log("promise fullfilled")
// })


// ===================  then and catch ==============

// 2nd way to do same thing;
// new Promise((resolve , reject)=>{
//   setTimeout(()=>{
//    console.log("data from backend has come");
//    reject();
//   },2000);
// }).then(()=>{
//   console.log("promise fullfilled")
// }).catch(()=>{
//   console.log("not  fullfilled");
// }).finally(()=>{
//   console.log("i will always execute");
// })

//3rd way when you see something returning

// new Promise((resolve , reject)=>{
//   setTimeout(()=>{
//    console.log("data from backend has come");
//    resolve({name : "kush", class : "12th"});
//   },2000);
// }).then((data)=>{
//   console.log(data);
//   console.log("promise fullfilled")
// }).catch(()=>{
//   console.log("not  fullfilled");
// }).finally(()=>{
//   console.log("i will always execute");
// })

// 4th way  chaining

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("data from backend has come");
//     resolve({ name: "kush", class: "12th" });
//   }, 2000);
// })
//   .then((data) => {
//     console.log(data);
//     console.log("promise fullfilled");
//     return data.name;
//   }).then((name)=>{
//     console.log("name is :", name)
//   })
//   .catch(() => {
//     console.log("not  fullfilled");
//   })
//   .finally(() => {
//     console.log("i will always execute");
//   });


  // ======= using async await =======

//   const mypromise = new Promise((resolve , reject)=>{
//    setTimeout(()=>{
//     console.log("data from backend has come");
//     resolve({name : "kush"});
//    },2000);
// });

// async function get() {
//    try {
//     const response = await mypromise;
//   //  console.log(response);
//     console.log(kush);  // this will show error
    
//    } catch (error) {
//      console.log("error is :" ,error);
//    }
// }

// get();


async function getRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    console.log(typeof response);  // always check is it json type or not first convert then use
    const data  = await response.json();   // it also a aysnc funtion json also take time
    console.log(data);
    
  } catch (error) {
    console.log("error is  :" , error);
  }
  
}

getRandomUser();

// output :
/*
Response {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    date: 'Sat, 19 Jul 2025 16:04:23 GMT',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    server: 'cloudflare',
    nel: '{"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}',
    'x-powered-by': 'Express',
    'access-control-allow-origin': '*',
    'cache-control': 'no-cache',
    etag: 'W/"489-m5WNoMDUGQVXTvoDR91FX7yrXvw"',
    vary: 'Accept-Encoding',
    'content-encoding': 'gzip',
    'cf-cache-status': 'DYNAMIC',
    'report-to': '{"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=eGGO2gXtK3VXCGlTsL7wCt%2FBwS8T%2FSMNxe%2F5gZBYu2fRt8yaxb5%2By8zCnrPubwjuYpwqj2WqGPdX9lIse1fNy0Sek6jwCB8F7GvbwDh%2FtH261PuutvldWdY%3D"}]}',
    'cf-ray': '961b744df952e1c1-MRS',
    'alt-svc': 'h3=":443"; ma=86400'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'https://randomuser.me/api/'
}


data : 
object
{
  results: [
    {
      gender: 'female',
      name: [Object],
      location: [Object],
      email: 'mayya.gradovskiy@example.com',
      login: [Object],
      dob: [Object],
      registered: [Object],
      phone: '(097) U05-3189',
      cell: '(068) O25-4405',
      id: [Object],
      picture: [Object],
      nat: 'UA'
    }
  ],
  info: { seed: 'dc98919991f4aecd', results: 1, page: 1, version: '1.4' }
}
 */

