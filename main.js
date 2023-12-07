function authenticateUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Simulation of Authication
    if (username === 'IoT NSCC' && password === 'Leeds@ 70367') {
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('fileUploader').style.display = 'block';
  
      document.getElementById('fileInput').addEventListener('change', function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
      
        reader.onload = function() {
          var fileContent = reader.result;
          document.getElementById('fileContent').textContent = fileContent;
        };
      
        reader.readAsText(file);
      });
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  