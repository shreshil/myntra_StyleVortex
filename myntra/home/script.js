
document.getElementById('addProductBtn').addEventListener('click', function() {
    window.location.href = 'choices.html';
});

window.onload = function() {
    const selectedChoices = localStorage.getItem('selectedChoices');
    if (selectedChoices) {
        displaySelectedChoices(selectedChoices.split(', '));
    }
};

function displaySelectedChoices(choices) {
    const placeholderContainer = document.getElementById('placeholderContainer');
    const placeholderText = document.getElementById('placeholderText');
    placeholderContainer.innerHTML = ''; 
    choices.forEach(choice => {
        const choiceBox = document.createElement('div');
        choiceBox.classList.add('choice-box');
        choiceBox.innerText = choice;
        placeholderContainer.appendChild(choiceBox);
    });
    if (choices.length === 0) {
        placeholderContainer.appendChild(placeholderText); // Add placeholder text if no choices
    }
   
}

document.getElementById('mainForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const images = document.getElementById('image-upload').files;
    const description = document.getElementById('add-description').value;
    const code = document.getElementById('enter-code').value;
    const data = {
        choices: localStorage.getItem('selectedChoices'),
        description: description,
        code: code,
        images: []
    };
    for (let i = 0; i < images.length; i++) {
        data.images.push(images[i].name); 
    }

    localStorage.setItem('formData', JSON.stringify(data));
    window.location.href = 'result.html';
});
