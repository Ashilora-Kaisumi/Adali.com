function checkLogin()
{
    var EmailInput = document.getElementById("email").value;
    var PasswordInput = document.getElementById("password").value;
    if (EmailInput.trim() !== "" && PasswordInput.trim() !== "" )
    {
        alert("Login Successful.");
    }

    else
    {
        alert("Login Unsuccessful. Please Enter An Email And A Password.");
    }
}

function checkLocation()
{
    var locationInput = document.getElementById("location").value;
    var destinationInput = document.getElementById("destination").value;
    if(locationInput.trim().toLowerCase() == destinationInput.trim().toLowerCase())
    {
        window.location.href = "SameLocation.html";
    }

    else if(locationInput.trim().toLowerCase() !== destinationInput.trim().toLowerCase())
    {
        window.location.href = "DifferentLocation.html";
    }
}

function refreshPage(){
    location.reload();
}