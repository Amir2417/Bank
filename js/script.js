document.getElementById('submitBtn').addEventListener('click',function(){
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;
    const passField = document.getElementById('password');
    const userPass = passField.value;

    if(userEmail =='akash@gmail.com' && userPass =='akash'){
        window.location.href = 'bank.html';
    }
})