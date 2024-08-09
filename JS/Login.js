// Function to check if a user is registered
function isRegistered (){
    const theusername = document.getElementById("Signin").myUsername.value;
    const thepassword = document.getElementById("Signin").myPassword.value;
    
    // Get the users from local storage or set to an empty array if there are none
    const theUsers = JSON.parse(localStorage.getItem('theUsers'))||[];
    const regUser = theUsers.find(user => user.theUsername === theusername);

    if (!regUser){
        alert("Not a registered user!")
        return false;
    }

    // If the entered password matches the user's password
    if(thepassword === regUser.thePassword){
        // Show an alert that the user is logged in
        alert ("You're logged in " + regUser.theUsername);
        sessionStorage.setItem("loggedinuser", theusername);
        window.location.replace('Play.html');     
    } else{
        alert ("Wrong password");
    }
    return false;
}




