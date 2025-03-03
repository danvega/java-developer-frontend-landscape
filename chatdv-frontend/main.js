const chatForm = document.getElementById('chatForm');

chatForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const messageInput = document.getElementById('message');
    const message = messageInput.value;

    const response = document.getElementById('response');
    fetch(`http://localhost:8080/api/generate?message=${message}`)
        .then((response) => response.text())
        .then((data) => {
            response.innerHTML = '<pre class="whitespace-pre-wrap break-words">' + data + '</pre>';
        });
});