    
let todoList= [
   {
        item: 'hello',
        dueDate:'10-12-2023',
   },
   {
    item: 'add something',
    dueDate:'1-10-2023',
},
];
displayItem();


function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date')
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    
    displayItem();
}

function displayItem() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for(let i=0; i < todoList.length; i++){
        let {item, dueDate} = todoList[i];
        newHtml += `
            <div>
                <span>${item}</span>
                <span>${dueDate}</span>
                <button onclick="todoList.splice(${i},1)
                displayItem()
                ">Delete</button>
            </div>
        `;
    }
    containerElement.innerHTML = newHtml;
}