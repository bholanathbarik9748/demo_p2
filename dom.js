// console.log(document.URL);
// console.log(document.domain);
// console.log(document.title);
// // document.title = "ABC";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);

// Get Element by iD
// var cnt = document.getElementById('header-title');
// var ord_head = document.getElementById('main-header');
// // cnt.textContent = "Yo";
// // cnt.innerText = "Yo1";
// // cnt.innerHTML = '<h1>Yo2<h1>';
// // cnt.style.borderBottom = 'solid 3px #000';
// org_head.style.borderBottom = 'solid 3px #000';


// Get Element by Class Name
var item = document.getElementsByClassName('list-group-item');
console.log(item[0]);
console.log(item[1]);
console.log(item[2]);
item[1].style.backgroundColor = "yellow";
item[1].textContent = "yo1";
item[1].style.fontWight = "bold";

for(var i = 0;i < item.length;i++){
    item[1].style.backgroundColor = '#f4f4f4';
}