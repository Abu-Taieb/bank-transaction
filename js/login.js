document.getElementById('loginBtn').addEventListener('click', function(){
    // Get email 
    const emailInputField = document.getElementById('emailInput');
    const emailInputValue = emailInputField.value;
    console.log(emailInputValue);

    // Get password
    const passInputField = document.getElementById('passInput');
    const passInputValue = passInputField.value;
    console.log(passInputValue);
    
    // Log in Condition 
    if(emailInputValue === 'admin@gmail.com' && passInputValue === 'admin'){
        window.location.href = '/htmlFile/bank.html';
        document.getElementById('loginBtn').style.backgroundColor="green";
        document.getElementById('loginBtn').style.color="white";
    }else{
        alert('Invalid !')
    }
})

// Reset Button Action 
document.getElementById('resetBtn').addEventListener('click', function(){
    const resetBtnActionToEmail = document.getElementById('emailInput');
    resetBtnActionToEmail.value = '';

    const resetBtnActionToPass = document.getElementById('passInput');
    resetBtnActionToPass.value = '';
})