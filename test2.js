document.getElementById('login-Form').addEventListener('submit', function(event) {
    event.preventDefault(); 
   
    
    var formData = new FormData(event.target);
   
    
    for(var pair of formData.entries()) {
       console.log(pair[0] + ': ' + pair[1]); 
    }
   });