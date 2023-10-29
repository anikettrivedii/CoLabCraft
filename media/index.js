
    const form = document.querySelector('.fr');
    const usernameInput = document.getElementById('fname');
    const passwordInput = document.getElementById('lname');
    const submitButton = document.querySelector('.submit-btn');
    const button=document.querySelector('.google');

    // Event listener for the "Sign in" button
    submitButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the form from submitting by default

        // Get the values entered by the user
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Simple validation example (you can customize this)
        if (!username || !password) {
            alert('Please fill in both username and password fields.');
            return;
        }

        // You can send the username and password to a server for authentication here
        // For a client-only example, you can just show an alert like this:
        alert('You are signed in as ' + username);
    });
    
    // for sign up option
    google.addEventListener('click',function(e){
        e.preventDefault();
        function onSignIn(googleUser) {
            // The ID token you need to send to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
           
            // The Google User's ID:
            var googleUserID = googleUser.getBasicProfile().getId();
           
            // The Google User's Name:
            var googleUserName = googleUser.getBasicProfile().getName();
           
            // The Google User's Email:
            var googleUserEmail = googleUser.getBasicProfile().getEmail();
           
            // Now you can send the token to your server for verification:
            // ...
           }
           if(!id_token||!googleUserEmail){
            alert("User not found!")
           }
    });
