// Examine the document object //
// console.dir(document);

// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.images);

// Get element by ID //
// console.log(document.getElementById('header-title'));
// // var headerTitle = document.getElementById('header-title')
// var headerTitle = document.getElementById('main-header')
// // headerTitle.textContent = "Hello";
// // headerTitle.innerText = "Goodbye";
// // headerTitle.innerHTML = "<h3>Hello</h3>";
// headerTitle.style.borderBottom = "solid 3px red"

// Get elements by class name //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1])
// items[1].textContent = "Hello 2"
// items[1].style.backgroundColor = "yellow"

// for (i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "grey"
// }

// Get elements by Tag name //
// var li = document.getElementsByTagName('li');
// console.log(li)
// console.log(li[1])
// li[1].textContent = "Hello 2"
// li[1].style.backgroundColor = "yellow"

// for (i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = "grey"
// }

// Queryselector //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px black'

// var input = document.querySelector('input')
// input.value = "Hello world"

// var submit = document.querySelector('input[type = "submit"]')
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral'

// Query selector all //
// var titles = document.querySelectorAll('.title');
// console.log(titles)
// titles[0].textContent = "Hello"

// var odd = document.querySelectorAll('li:nth-child(odd)')
// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'red'
// }

// var even = document.querySelectorAll('li:nth-child(even)')
// for (var i = 0; i < even.length; i++) {
//     even[i].style.backgroundColor = 'grey'
// }

// Traversing the DOM //
// var itemList = document.querySelector('#items');
// parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "grey"
// console.log(itemList.parentNode.parentNode.parentNode);

// Parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "grey"
// console.log(itemList.parentElement.parentElement);

// Child Nodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// // First Child
// console.log(itemList.firstChild);
// // First element child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";
// // Last element child
// itemList.lastElementChild.textContent = "Hello 4"

// Next Sibling
// console.log(itemList.nextElementSibling)

// Previous Sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "red";

// Create Element
// let newDiv = document.createElement('div');
// // add class
// newDiv.className = "hello"
// // add ID
// newDiv.id = "hello1";
// // add attribute
// newDiv.setAttribute('title', 'hello div');
// // create text node
// let newDivText = document.createTextNode('Hello world');
// // add text to div
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1)

// let buttonClick = (event) => {
//     // console.log("Button clicked")
//     // document.getElementById('header-title').textContent = "Text changed"
//     // document.querySelector('#main').style.backgroundColor = "#f4f4f4"
//     // console.log(e)
//     // console.log(event.target);
//     // console.log(event.target.id);
//     // console.log(event.target.className);
//     // console.log(event.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+event.target.id+'</h3>';

//     // console.log(event.type)

//     // console.log(event.clientX);
//     // console.log(event.clientY);
//     // console.log(event.offsetX);
//     // console.log(event.offsetY);

//     // console.group(event.altKey);
//     // console.group(event.ctrlKey);
//     // console.group(event.shiftKey);
// }




var button = document.getElementById("button")
var box = document.getElementById("box")


// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

// box.addEventListener('mousemove', runEvent)
let itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('keyup', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);


// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent)


function runEvent(event) {
    console.log('Event Type: '+event.type);

    // document.body.style.display = "none"

    console.log(event.target.value);

    event.preventDefault();

    // document.getElementById('output').innerHTML = '<h3>' + event.target.value + '</h3>';

    // output.innerHTML = '<h3>MouseX: ' + event.offsetX + ' </h3><h3>MouseY: ' + event.offsetY + '</h3>'
    // document.body.style.backgroundColor = "rgb(" + event.offsetX + ", " + event.offsetY + ", 40)" 
}

