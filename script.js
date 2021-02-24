var todoInput = document.getElementById('todo');
var allTodos = document.getElementById ('all-todos');
var html = '';
document.getElementById('add-todo').onclick = function(){

    var todo = todoInput.value;
    html += '<div class="todos"><div class="todo"> '+todo+' ';
    html += '<i onclick="removeTodo(this)"class="fa fa-times"></i>'
    html += '<i onclick="markAsComplete(this)"class="fa fa-check"></i>';
    html += '</div></div>';

    todoInput.value = '';
    allTodos.innerHTML = html;
}


function markAsComplete(elem){
    elem.parentElement.parentElement.classList.add('completed');
    elem.previousSibling.remove();
    elem.remove();
}


function removeTodo(elem){

    elem.parentElement.parentElement.remove();
}