document.addEventListener("DOMContentLoaded",() => {

    document.getElementById("addItem").onclick = function() {
        const row = document.createElement("li");
        const cb = document.createElement('input');
        cb.setAttribute('type', 'checkbox');
        row.appendChild(cb);
        const addItem = document.getElementById("todoList");
        let newButton = document.createElement('button');
        newButton.innerHTML = '❌';
        newButton.addEventListener("click", del);
        newButton.id = 'button-delete';
        if (addItem.value === '') {
            alert('Вы не ввели текст')
        } else {
            row.appendChild(document.createTextNode(addItem.value));
            row.appendChild(newButton);
            row.id = 'element';

            document.getElementById("list").appendChild(row);

            document.getElementById("todoList").value = "";
        }

    }
    function del(event){
        const but = event.target;
        but.parentElement.remove();
    }
})