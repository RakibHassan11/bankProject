/*
1.add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5. make sure to convert input into a number using parseFloat
3.Get previous withdrawTotal
4.set the total withdraw amount
5.get the previous balance total
6.Calculate new balance total
6.5.set the new balance total


7.Clear the input field
*/

//Step:1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    console.log('withdraw button clicked');
//Step:2
const withdrawField =  document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
console.log(newWithdrawAmount);

//Step:7
withdrawField.value='';

if(isNaN(newWithdrawAmount)){
    alert('Invalid input');
    return;
}
//Step:3
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
console.log(previousWithdrawTotal);


//Step:5
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);


if(newWithdrawAmount>previousBalanceTotal){
    alert('Poor dude LOL!');
    return;
}
//Step:4
const currentWithdrawTotal = previousWithdrawTotal+ newWithdrawAmount;
withdrawTotalElement.innerText=currentWithdrawTotal; 
//Step:6
const newBalanceTotal= previousBalanceTotal-newWithdrawAmount;
balanceTotalElement.innerText=newBalanceTotal;



})
