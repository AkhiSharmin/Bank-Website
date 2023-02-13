//step--1 add event listener to the deposits button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2 get the deposit amount from the input field
    const depositField = document.getElementById('deposit-field');
    const NewDepositAmountString = depositField.value;
    const NewDepositAmount = parseFloat(NewDepositAmountString);
    // step-4 get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step=4 to set the total deposit
    const currentDepositTotal = previousDepositTotal + NewDepositAmount;
    //set the total deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //step-5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step- 6 total balance 
    const currentTotalBalance = previousBalanceTotal + NewDepositAmount;
    //set the total ballance
    balanceTotalElement.innerText = currentTotalBalance;


    //step-7 clear the deposit field
    depositField.value = '';
})