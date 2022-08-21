document.getElementById('calculate-btn').addEventListener('click', function(){

    const foodField = document.getElementById('food-field');
    const foodFieldstring = foodField.value;
    const previousFoodField =parseFloat(foodFieldstring);


    const rentField = document.getElementById('rent-field');
    const rentFieldString = rentField.value;
    const previousRentField = parseFloat(rentFieldString);

    const clothField = document.getElementById('cloth-field');
    const clothFieldString = clothField.value;
    const previousClothField = parseFloat(clothFieldString);

    // substraction

    const incomeField = document.getElementById('income-field');
    const incomeFieldString = incomeField.value;
    const previousIncome = parseFloat(incomeFieldString);

// substraction


    const totalField = (previousClothField + previousFoodField + previousRentField) ;
    // console.log(previousIncome, previousClothField, previousRentField, previousFoodField);


    const expencesField = document.getElementById('total-expences');
    const expencesFieldString = expencesField.innerText;
    const previousExpences = parseFloat(expencesFieldString);
    foodField.value = '';

    const totalExpences = totalField + previousExpences;
    expencesField.innerText = totalExpences;


    const balaceTotal = document.getElementById('total-balance');
    const balaceTotalString = balaceTotal.innerText;
    const previousbalance = parseFloat(balaceTotalString);

    const totalBalance = previousIncome - totalExpences;
    balaceTotal.innerText = totalBalance;


    if (isNaN(totalBalance,totalField)) {
        alert("please, provide the valid nummber")
        
    }


    foodField.value = '';
    rentField.value = '';
    clothField.value = '';  
    incomeField.value = '';



})


