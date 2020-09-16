let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
let deleteIcon = document.getElementsByClassName('list-group-item')
let completeIcon = document.querySelector('.fas.fa-check')

// create list object
let list = []

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
deleteIcon.addEventListener('click', removeOrCompleteItem);
// Complete event
completeIcon.addEventListener('click', removeOrCompleteItem);
// Filter event
filter.addEventListener('keyup', filterItems)

// Add item function
function addItem(e) {
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');
    // Add class name
    li.className = "list-group-item";
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create delete button element
    let deleteBtn = document.createElement('button');
    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    // create delete button logo
    let deleteLogo = document.createElement('i');
    deleteLogo.className = "fas fa-trash-alt"
    deleteLogo.id = "icons"
    // Append logo to delete button
    deleteBtn.appendChild(deleteLogo)

    // create complete button element
    let completeBtn = document.createElement('button');
    // Add classes to delete button
    completeBtn.className = 'btn btn-success btn-sm float-right complete'
    // create complete button logo
    let completeLogo = document.createElement('i');
    completeLogo.className = "fas fa-check"
    completeLogo.id = "icons"
    // Append logo to delete button
    completeBtn.appendChild(completeLogo)

    // Append buttons to li
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);

    itemList.appendChild(li);
    list.push(newItem);
    console.log(list);
}

// Completed item function
function removeOrCompleteItem(e) {
    console.log(e.target.parentElement.innerText);
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);

            // let deletedItem = e.target.parentElement.innerText[0]
            let index = list.indexOf(e.target.parentElement.innerText[0]);
            list.splice(index, 1);
            console.log(list)
        }
    } else {
        let li = e.target.parentElement;
        li.style.opacity = 0.1;
    }
}

// Filter items function
function filterItems(e) {
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // get lists
    let items = itemList.getElementsByTagName('li');
    // covert to an array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}