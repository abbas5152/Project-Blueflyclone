
  function select(){
    var firstname = document.getElementById("fn").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var lastname= document.getElementById("ln").value;
    if ( firstname == "" && lastname=="" && password == "" && email== "" ){
    alert (" create account successfully");
    window.location = "C:\Users\Digambar\Desktop\login\signin.html" // Redirecting to main page
    return false;
    }
    
    }


