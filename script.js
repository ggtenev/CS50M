const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'delete',
}

//Variable declaration

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const addTodo = document.querySelector('.button');

let itemCount = 0;
let checkedBoxes = 0;
let boxes = document.querySelectorAll('.checked');

list.addEventListener('click', e => {
  if (e.target.className === classNames.TODO_DELETE) {
    list.removeChild(e.target.parentElement)
    itemCount -= 1;
    countUncheckedBoxes()
    itemCountSpan.textContent = itemCount;
  }
})

// Check the number of unchecked boxes

 function countUncheckedBoxes(){
  checkedBoxes = document.querySelectorAll('.checked:checked').length;
  let uncheckedCount = itemCount - checkedBoxes;
  uncheckedCountSpan.textContent = uncheckedCount;
 }

//Adding a new todo

addTodo.addEventListener('click', e => {

//Counting the todos
  itemCount += 1;
  countUncheckedBoxes();
  itemCountSpan.textContent = itemCount;
  itemCountSpan.value = itemCount;

  //Creating a new todo and appending the children to the parent elements
  let userInput = document.getElementById('add-todo').value;
  document.getElementById('add-todo').value = '';

  const li = document.createElement('li');
  li.className = 'items';
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete';
  deleteButton.textContent = 'Delete';
  const input = document.createElement('input');
  input.type = 'checkbox'
  input.className = 'checked'
  const h3 = document.createElement('h3');
  h3.textContent = userInput;
  li.appendChild(input)
  li.appendChild(h3)
  li.appendChild(deleteButton)

  list.appendChild(li);

  boxes = document.querySelectorAll('.checked');
  boxes.forEach(b => {
    b.addEventListener('click', e => {
      countUncheckedBoxes();
    })
  })
})






