const button = document.getElementById('mybtn');
const newContent = document.getElementById('new');

function changeContent() {
    newContent.innerHTML = '<p>new element!</p>';
}

button.addEventListener('click', changeContent);



