//Step1:Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
//Step2:Get the deposit amount from the deposit input field
//For input field use .value to the value inside input field
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);

//Step7: Clear deposit field
depositField.value='';

if(isNaN(newDepositAmount)){
    alert('Invalid input');
    return;
}

//Step3: get the current deposit total
//for non-input(element other then input,textarea)use innerText to get the text
const depositTotalElement= document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);

//Step4:ADD numbers to set the total deposit
const currentDepositTotal = previousDepositTotal + newDepositAmount;

//set the deposit total
depositTotalElement.innerText = currentDepositTotal;

//Step5: Get balance total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceSTring = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceSTring);

//Step6: Calculate total balance
const currentBalanceTotal = previousBalanceTotal+ newDepositAmount;
//Set the balance total
balanceTotalElement.innerText = currentBalanceTotal;


})