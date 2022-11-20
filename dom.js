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
// var item = document.getElementsByClassName('list-group-item');
// console.log(item[0]);
// console.log(item[1]);
// console.log(item[2]);
// item[1].style.backgroundColor = "yellow";
// item[1].textContent = "yo1";
// item[1].style.fontWight = "bold";

// for(var i = 0;i < item.length;i++){
//     item[1].style.backgroundColor = '#f4f4f4';
// }

// Get Element by Tag name
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].style.backgroundColor = "yellow";
// li[1].textContent = "yo1";
// li[1].style.fontWight = "bold";

// for(var i = 0;i < li.length;i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QuerySelector
var head = document.querySelector('#main-header');
head.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = "Yo Bro";

var sub = document.querySelector('input[type = "submit"]');
sub.value = "Send";

var item = document.querySelector('.list-group-item');
item.style.color = "red";

var item1 = document.querySelector('.list-group-item:last-child');
item1.style.color = "blue";


var item2 = document.querySelector('.list-group-item:last-child');
item2.style.color = "blue";

var item2 = document.querySelector('.list-group-item:nth-child(2)');
item2.style.color = "green";

var item3 = document.querySelector('.list-group-item:nth-child(3)');
item2.style.visibility = hidden;

// QuerySelectorALL
var ti = document.querySelectorAll('.title');
ti[0].textContent = 'Yo';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0;v < odd.length;i++){
    odd[i].style.backgroundColor = '#f4f4f4';
}

var odd = document.querySelectorAll('li:nth-child(even)');
for(var i = 0;v < even.length;i++){
    even[i].style.backgroundColor = '#ccc';
}

var item2 = document.querySelector('.list-group-item:nth-child(2)');
item2.style.color = "green";

var item3 = document.querySelector('.list-group-item:nth-child(3)');
item2.style.visibility = hidden;