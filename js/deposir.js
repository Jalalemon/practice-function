document.getElementById('d-btn').addEventListener('click', function(){
    const dField = getFieldValueById('d-field');
    const dOutput = getTexElementId('d-output');
    const newTotalDeposit = dField + dOutput;
    setTextElementValue('d-output', newTotalDeposit);

    const totalBalance = getTexElementId('total-balance');
    const addBalance = dField + totalBalance;
    setTextElementValue('total-balance', addBalance);

    if(isNaN(dField))
    alert('please! input the valid number');
})