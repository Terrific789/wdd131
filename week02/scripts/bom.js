const li = document.createElement('li');
const addButton = document.querySelector('#addButton');
const deleteButton = document.createElement('button');
const list = document.querySelector('#list');
let inputT = document.querySelector('#favchap');
inputT.focus()
deleteButton.textContent = '❌';


addButton.addEventListener("click", function () {
    if (inputT.value.trim() !== '') {
        const newLi = document.createElement('li');
        const newDeleteButton = document.createElement('button');
        newDeleteButton.textContent = '❌';
        
        newLi.textContent = inputT.value;
        newLi.appendChild(newDeleteButton);
        list.appendChild(newLi);
        
        newDeleteButton.addEventListener("click", function () {
            list.removeChild(newLi);
            inputT.focus();
        });

        inputT.value = '';
        inputT.focus();
    }
});

deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    inputT.focus()
})

