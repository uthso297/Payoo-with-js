document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('money add button clicked');

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);


    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;

    if(pinNumberInput === '1234'){
        console.log('adding money to your account');

        const balance = document.getElementById('account-balance').innerText;
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber+balanceNumber;
        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money!Please try again.');
    }
});