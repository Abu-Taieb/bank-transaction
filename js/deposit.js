document
    .getElementById('depositBtn')
    .addEventListener('click', function () {
        // Deposit Input Field
        const inputField = document.getElementById('depositField');
        const inputFieldValue = inputField.value;
        const inputFieldStrToInt = parseFloat(inputFieldValue);
        
        if(isNaN(inputFieldStrToInt)){
            alert('Please input deposit amount value.')
            return;
        }
        // Input Field Clear
        inputField.value = '';

        // Deposit Field
        const depositVal = document.getElementById('depositTotal');
        const depositFieldValue = depositVal.innerText;
        const depositStrToInt = parseFloat(depositFieldValue);

        const depositTotalVal = depositStrToInt + inputFieldStrToInt;
        depositVal.innerText = depositTotalVal;

        const balanceField = document.getElementById('balanceTotal');
        const getBalanceValue = balanceField.innerText;
        const balanceStrToInt = parseFloat(getBalanceValue);

        const totalValue = balanceStrToInt + inputFieldStrToInt;
        balanceField.innerText = totalValue;
        console.log(totalValue);
    })