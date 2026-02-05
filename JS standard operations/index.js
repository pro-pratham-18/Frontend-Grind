// {
//     let a=10;
//     console.log(a);
// }
// console.log(a); 
// let x ="Prathamesh Joshi";
// console.log(typeof(x));

// let a=Symbol("id");
// let b=Symbol("id");
// const c=Symbol(56);
// console.log(typeof(a));
// console.log(a);
// console.log(c); 

// let a='prathamesh';
// console.log(typeof(a));

// let a=50;
// let b="50";
// console.log(a==b);                    True
// console.log(a===b);                   False

 
//ternary operator

// let age=20;   
// (age>18)?console.log("you can vote"):console.log("you cannnot vote");  ternary operator

//logical op same as cpp

//operators in Js

// bitwise and or not xor , & | ~ 

// left shift << 
// right shift >>

// console.log(5<<2);       multiply by 2 ki power 2
// console.log(16>>2);      divide by 2 ki power 2

// let age=76;


// conditionals in js

// if(age>=18 && age<45 ){
//     console.log("you can vote")
// }
// else if(age>=45){
//     console.log("you are uncle,ofc you can vote")
// }
// else{
//     console.log("you can't vote")
// }


// switch case in js

// let a = 2;
// switch(a){
//     case 1:console.log('A');
//     break;
//     case 2:console.log('B');
//     break;
//     case 3:console.log('C');
//     break;
//     default: console.log('D');
// }

// for(let i=1;i<=10;i++){
//     console.log("hello there")
// }

// arr=["hello","are","you"];
// console.log(arr.join(","));

// function alter(a){
//     a+=4;
//     console.log("altered",a);
// }
// alter(6);

// function add(num1,num2){
//     return num1+num2;
    
// }
 
// console.log(add(4,5));

// function for string concatenation and dynapically typing{adjusting of the variable type as per the input}

// function concat(k1,k2){
//     return k1+k2;
// }
// console.log(concat("hello","there"));
// console.log(concat(7,5));

// function concat(k1,k2){
//     return k1+k2+"hi";
// }
// console.log(concat("hello","there"));
// console.log(concat(7,5));

// let power1 = (x,y)=>{             arrow function in js 
//     return x**y;
// }
// console.log(power1);


// let square = (a)=>{
//     return a**2;
// }

// let a=square(5);
// console.log(a);


// console.log(sum1(3,4));
// function sum1(a,b){
//     return a+b;
// }

// sum1();

// obj={
//     name:"prathamesh joshi",
//     age:20,
//     height:"5'11",
//     // sum: function add(a,b){
//     //     return a+b;
//     // }
//     address:{
//         city:"indoore"
//     }
// };
// obj2={...obj};                     shallow copy
// obj2=obj;                          full reference copy
// obj2=structuredClone(obj);            //deep copy
// obj2.name="Umesh Joshi";
// obj2.address.city="mumbai";
// console.log(obj);

// console.log(obj.name);
// console.log(obj.sum);
// console.log(obj.height);
// console.log(typeof(obj));

// arr=["hello",56];

// arr=new Array("hello",'there',65,45);
// let a=arr1.shift();
// console.log(arr1,a);
// console.log(arr);

// console.log(arr.slice(1));        //from index 1 to last
// console.log(arr.slice(1,2));        //from index 1 to 1 , ek pehle tak

// obj={
//     name:"prathamesh",
//     age:20,
//     array: [1,3,5,7,9]
// }

// obj2={...obj};
// obj2.array[3]=11;
// console.log(obj);

// arr= [1,3,52,7,9];
// // arr.splice(1,3,"hello");         //ndex 1 aur uske baad se 3 values remove kr do aur waha hell insert kr do
// arr.splice(2,0,"hello");            //index 2 se kuch mat hatao aur waha hello add kr doo
// console.log(arr)   

// let a=Number.MIN_SAFE_INTEGER;


// count=0;
// arr.map((num)=>{
//     count+=num;                          //array sum usinng map function
// })
// console.log(count);

// arr= [1,3,52,7,5];
// let array=arr.filter((num)=>{
//     return num%2==0;
// })

// let array=arr.filter((num)=>{
//     if(typeof(num)==='number'){
//         return num;
//     }
// })
// console.log(array);

// let a=arr.reduce((acc,curr)=>{            //multiplication using reduce
//     return acc*curr;
// })
// console.log(a);

// let a=arr.reduce((acc,curr)=>{            //addition using reduce
//     return acc+curr; 
// })
// arr= [1,3,52,7,5];

// console.log(arr.sort());                          // lexicographical
// console.log(arr.sort((a,b)=>a-b));                // ascending
// console.log(arr.sort((a,b)=>b-a));                // descneding

// let arr=[2,3,4,5,6,76];
// count=0;
// for(val of arr){
//     count+=val;
// }
// console.log(count);

// obj={
//     name:"prathamesh",
//     age:20
// }
// for(i in obj ){
//     console.log(i," ",obj[i]);
// }
// console.log(obj.name)


// a=[57,65,2,9,3];
// sum=0;
// a.forEach(num => {
//     sum+=num;                       //array sum using for each
// });

// console.log(sum);


// console.log(a);
// var a="hello";

// class Student{
//     name;
//     age;
//     rollno;

    // constructor(){
    //     console.log("non-para-meterized Constructor");
    // }

//     constructor(name,age,rollno){
//         this.name=name;
//         this.age=age;
//         this.rollno=rollno;
//     }

//     printInfo(){
//         console.log("Name:",this.name);
//         console.log("Age:",this.age);
//         console.log("Roll No :",this.rollno);
//     }

//     printInfo1(s){
//         console.log("Name:",s.name);               //function with object
//         console.log("Age:",s.age);
//         console.log("Roll No :",s.rollno);
//     }



// }

//  s1=new Student("rohan",20,48);
//  s2=new Student("sohan",22,49);
//  s3=new Student("mohan",25,50);
//  s4=new Student();

//  s1.printInfo();
//  s2.printInfo1(s2);                             //object as an argument
// console.log(typeof(s1));
// //  s4.printInfo();









