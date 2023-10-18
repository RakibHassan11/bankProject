//Step1:add click handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //Step2:Get the email address inside email input field
    //always remember to use .value to get text from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //Step3: Get password
    //3.a Set id on the html element
    //3.b Get the element
    //3.c Get the value of the element
    const passwordField =document.getElementById('user-password');
    const password = passwordField.value;
    //Do not verify email password on the client side!!!
    //Step4: Verify email and password
    if(email=='rakibhassan552@gmail.com'&& password=='1234'){
        window.location.href='bank.html';
    }
    else{
        alert('Invalid User');
    }



})