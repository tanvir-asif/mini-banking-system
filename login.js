const emailValue= document.getElementById("submit-button").addEventListener('click',function(){
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    if(email == 'demo@mail.com' && password == "password"){
        window.location.href = "banking.html";
    }
    else{
        alert("Wrong credentials");
    }


})