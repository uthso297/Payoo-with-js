document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin');

        if (isNaN(cashOut)) {
            alert('failed to withdraw');
            return;
        }

        if (cashOut > balance) {
            alert('do not have sufficient balance');
            return;
        }

        if (pinNumber === 1234) {
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - cashOut;

            document.getElementById('account-balance').innerText = newBalance;

            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out<h4>
        <p>${cashOut} withdraw. New Balance ${newBalance} Tk. <p>
        `
            document.getElementById('transaction-container').appendChild(div);
        }
        else {
            alert('Wrong pin number');
        }
    });