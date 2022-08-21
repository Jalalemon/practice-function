document.getElementById('w-btn').addEventListener('click', function(){
    const wField = getFieldValueById('w-input');
    const wOutput = getTexElementId('w-output');
    const totalWithdraw = wField  + wOutput;
    setTextElementValue('w-output', totalWithdraw);
    const newAdd = getTexElementId('total-balance');
    const newAddEqual = newAdd - wField;
    setTextElementValue('total-balance', newAddEqual);
})