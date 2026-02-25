// https://jsonplaceholder.typicode.com/posts'

// https://pokeapi.co/api/v2/pokemom/1;

// "https://jsonplaceholder.typicode.com/users"


// let cont =document.getElementById('container');

// const x=async function (){
//     let response=await fetch("https://jsonplaceholder.typicode.com/users");
//     let data =await response.json();
//     console.log(data);
//     for(let i=0;i<10;i++){
//         let para=document.createElement('p');                      //for creation and insertion of elemnets where data is from the api
//         para.textContent=data[i].name;
//         cont.appendChild(para);
//     }

// }
// x();

//------------------------------------------------------------------------------------------

// const x=async function (){
//         console.log("hi");
//         console.log("hi");
//         console.log("hi");
//         console.log("hi");                                // sync above async code dont cause promise to get in pemding state
//         console.log("hi");
//         return "hi";
//         console.log("hi");
//         console.log("hi");
//         console.log("hi");
//         console.log("hi");
//         // let response=await fetch("https://jsonplaceholder.typicode.com/users");
//         // let data =await response.json();
//         // console.log(data);


// }
// console.log(x());
// x().then(function(){
//     console.log("fulfilled");
// })

//2nd method for fetch api

// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
//     console.log(data[0].name);
// });

//------------------------------------------fetching using options and methods-------------------------


// using get and post methd sequence wise
// we can use http request like get ,post in an async function using await to make them run sequentially as they both are async codes


url="https://jsonplaceholder.typicode.com/posts";

obj={username:"prathamesh",
    email:"example@gmail.com"
}
 
const options={
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        "Content-Type":"application/json" 
    }
};
async function get_data(){
    response=await fetch(url);
    data= await response.json();                             // pnt: response.json is an sync function , function specifically  always use it as response.json();                            
    console.log("My Data:",data);
}


async function post_data(){
    response=await fetch(url,options);
    data= await response.json();
    console.log("My Data:",data);
}

async function process_data(){
    await post_data();
    await get_data();
}

process_data();
