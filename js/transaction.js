document.getElementById('depoBtn').addEventListener('click',function(){
    const inputValue = document.getElementById('deposit-amount');
    const newValue = parseFloat(inputValue.value);
    
    const depoText = document.getElementById('depoAmount');
    const previousValue = parseFloat(depoText.innerText);
    const totalValue = previousValue + newValue;
    depoText.innerText = totalValue;
    inputValue.value ='';

    //balance update
    const balanceText = document.getElementById('balanceTotal');
    const balanceValue = parseFloat(balanceText.innerText) ;
    //calculation

    const TotalBalance = newValue +balanceValue;

    balanceText.innerText = TotalBalance;

});

// withdraw Section part

document.getElementById('withdrawBtn').addEventListener('click',function(){
    const withdrawAmount = document.getElementById('withdraw-amount');

    const withdrawMoney = parseFloat(withdrawAmount.value);

    // pass the value in withdraw section

    const previousWithdraw = document.getElementById('withdrawTotal');

    const withdrawBalance = parseFloat(previousWithdraw.innerText);
    const totalWithdraw = withdrawMoney + withdrawBalance;

    previousWithdraw.innerText = totalWithdraw;
    withdrawAmount.value ='';

    const balanceText = document.getElementById('balanceTotal');
    const balanceValue = parseFloat(balanceText.innerText) ;
    //calculation

    const TotalBalance = balanceValue - withdrawMoney;

    balanceText.innerText = TotalBalance;
});