let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
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
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);


    itemList.appendChild(li);
}

// Remove item function
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
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