

// // M1 with less reflow and repaint


// let t1=performance.now();

// let mydiv=document.createElement("div");


// for(let i=1;i<=10000;i++){
//     let para =document.createElement("p");
//     para.textContent="This is para No."+i;
//     mydiv.appendChild(para);
// }

// document.body.appendChild(mydiv);

// let t2 = performance.now();
// console.log("performance time taken by code 1 is:"+(t2-t1));



// //M2 with more reflow and repaints

// let t3=performance.now();

// for(let i=1;i<=10000;i++){
//     let para =document.createElement("p");
//     para.textContent="This is para No."+i;
//     document.body.appendChild(para);
// }

// let t4=performance.now();

// console.log("the execution time for the code 2 is"+(t4-t3));

//document fragment

let fragment=document.createDocumentFragment();

// let t1=performance.now();

let mydiv=document.createElement("div");


for(let i=1;i<=10000;i++){
    let para =document.createElement("p");
    para.textContent="This is para No."+i;
    mydiv.appendChild(para);
}

fragment.appendChild(mydiv);  // no reflows and repaints

document.body.append(fragment)   // this involves 1 reflow and 1 repaint

let t2 = performance.now();
console.log("performance time taken by code 1 is:"+(t2-t1));






