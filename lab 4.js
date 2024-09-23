function alertName() {
    const name = document.getElementById('name').value;
    if (name) {
        alert(`Hi ${name}!`);
    } else {
        alert('Please enter a name.');
    }
}

let isBlue = true;
function changeColor() {
    if (isBlue) {
        document.body.style.backgroundColor = 'green';
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
    isBlue = !isBlue;
}

function validateText() {
    const text = document.getElementById('textInput').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
        alert('Special characters are not allowed!');
    } else {
        alert('Text is valid!');
    }
}

function addText() {
    const heading = document.querySelector('h1');
    heading.textContent += ' Add Text';
}
