    function register()
            {
                //Get the name from the form input field with id "myname"
                const name= document.getElementById("Register").myname.value;
                const email= document.getElementById("Register").myemail.value;
                const username = document.getElementById("Register").myusername.value;
                const password = document.getElementById("Register").mypassword.value;
                
                // Retrieve the list of users from local storage. If it doesn't exist, use an empty array
                const theUsers = JSON.parse(localStorage.getItem('theUsers')) || [];
                // Check if a user with the same username or email already exists
                const existingUser = theUsers.find(user => user.theUsername === username || user.theEmail === email);


                // If a user with the same username or email exists, shows an error message 
                if (existingUser) {
                    document.getElementById("feedback").innerText = "Username or email already exists, choose another";
                    console.log("User details already taken"); 
                    return false;
                }

                // If any of the fields are empty, show an alert and return false
                if (name === '' || email === '' || username === '' || password === '') {
                    alert('Fill all the fields.');
                    return false;
                }

                theUsers.push({
                    theName: name,
                    theEmail: email,
                    theUsername: username,
                    thePassword: password,
                    score: 0
                });

                // Save the updated list of users to local storage
                localStorage.setItem('theUsers', JSON.stringify(theUsers));

                alert("Registration successful! Please login.");
                location.replace('Login.html');
                return false;

            }

        

        