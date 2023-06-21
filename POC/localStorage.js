//set data
localStorage.setItem("name", "Arya");
localStorage.setItem("lastName", "Gairola");
localStorage.setItem("Branch", "Computer Application");
localStorage.setItem("place", "Dehradun");
localStorage.hobby = "reading";

//getdata
let data = localStorage.getItem("name");


let data1 = localStorage.name;   
console.log(data);
console.log(data1);
// length of local storage
let l = localStorage.length;
console.log(l);
//remove data/delete data
//method ki tara delete karna ha toh aise karna hoga
// let a = localStorage.removeItem("name");
// console.log(a);
//object ki tara delete karna ha toh aise karna hoga
delete localStorage.name;

//getkey by index
let d = localStorage.key(2);
console.log(d);