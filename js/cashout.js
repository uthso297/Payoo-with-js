document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const addMoneyInput = document.getElementById('input-add-cash-out').value;
    console.log(addMoneyInput);


    // get the pin number provided
    const pinNumberInput = document.getElementById('input-cash-out-pin').value;

    if(pinNumberInput === '1234'){

        const balance = document.getElementById('account-balance').innerText;
        const cashOutMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber-cashOutMoneyNumber;
        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out!Please try again.');
    }
});