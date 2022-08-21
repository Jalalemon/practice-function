function getFieldValueById (valueId){
    const DepositField = document.getElementById(valueId);
    const DepositFieldString = DepositField.value;
    const previousDepositField = parseFloat(DepositFieldString);

    DepositField.value = '';
    return previousDepositField;
}

function getTexElementId (elementId){
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textElementId = parseFloat(textElementString);

    return textElementId;
}

function setTextElementValue (elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}