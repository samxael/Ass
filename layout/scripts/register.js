$document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('regUsername').value;
    var email = document.getElementById('regEmail').value;
    alert('You have successfully registered: ' + username + ', ' + email);
});