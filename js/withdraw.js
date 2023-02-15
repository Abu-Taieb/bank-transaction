document
    .getElementById('withdrawBtn')
    .addEventListener('click', function () {
        const withdrawInput = document.getElementById('withdrawField');
        const withdrawInputVal = withdrawInput.value;
        const withdrawInpStrToInt = parseFloat(withdrawInputVal);
        withdrawInput.value = '';

        if (isNaN(withdrawInpStrToInt)) {
            alert('Please input withdraw amount value.')
            return;
        }

        const withdrawField = document.getElementById('withdrawTotal');
        const withdrawFieldVal = withdrawField.innerText;
        const withdrawStrToInt = parseFloat(withdrawFieldVal);
        
        

        const balanceField = document.getElementById('balanceTotal');
        const getBalanceStr = balanceField.innerText;
        const balanceStrToInt = parseFloat(getBalanceStr);

        if(withdrawInpStrToInt > balanceStrToInt){
            alert("You don't have enough money !")
            return;
        }

        const withdraw = withdrawInpStrToInt + withdrawStrToInt;
        withdrawField.innerText = withdraw;

        const balanceAmount = balanceStrToInt - withdrawInpStrToInt;
        balanceField.innerText = balanceAmount;
        
        
    })