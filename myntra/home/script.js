document.getElementById('addProductBtn').addEventListener('click', function() {
    window.location.href = 'choices.html';
});

window.onload = function() {
    const selectedChoices = localStorage.getItem('selectedChoices');
    if (selectedChoices) {
        document.getElementById('placeholder').innerText = selectedChoices;
    }
};