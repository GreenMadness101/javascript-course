const todoList = ['make dinner', 'wash dishes'];

for (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];
  const html = ``;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);
  
  inputElement.value = '';
}