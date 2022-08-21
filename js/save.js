document.getElementById('save-btn').addEventListener('click', function(){

    const saveField = document.getElementById('save-field');
    const saveFieldString = saveField.value;
    const previousSave = parseFloat(saveFieldString);

    const saveAmount = document.getElementById('save-amount');
    const saveAmountString = saveAmount.innerText;
    const previousAmount = parseFloat(saveAmountString);

    console.log(previousAmount);

    const incomeField = document.getElementById('income-field');
    const incomeFieldString = incomeField.value;
    const previousIncome = parseFloat(incomeFieldString);

    const currentsave = previousIncome * previousSave / 100;
    saveAmount.innerText = currentsave;



    const balaceTotal = document.getElementById('total-balance');
    const balaceTotalString = balaceTotal.innerText;
    const previousbalance = parseFloat(balaceTotalString);

    const remainBalance = document.getElementById('remain-balance');
    const remainBalanceString = remainBalance.innerText;
    const previousRemain = parseFloat(remainBalanceString);
    console.log (previousRemain)
    const totalRemainBalance = previousbalance - currentsave;
    remainBalance.innerText = totalRemainBalance;
    
    saveField.value = '';
})