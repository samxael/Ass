$document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('logUsername').value;
  alert('You have successfully logged in: ' + username);
});
