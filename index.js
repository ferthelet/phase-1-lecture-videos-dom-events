let form = document.querySelector('#todo_form')
.addEventListener('click', (e) => console.log(e));

document.querySelector('#alert')
.addEventListener('click', () => alert('alerted'));

function handleDelete(e) {
    e.target.parentNode.remove();
}

let buttons = document.getElementsByClassName('btn-del');

/* no fn works the same
for (let button of buttons) {
    button.addEventListener('click', () => button.parentNode.remove());
} */

for (let button of buttons) {
    button.addEventListener('click', handleDelete);
}

