document.getElementById('depoBtn').addEventListener('click',function(){
    const inputValue = document.getElementById('deposit-amount');
    const newValue = inputValue.value;

    const depoText = document.getElementById('depoAmount');
    const totalValue = depoText.innerText + newValue;
    depoText.innerText = totalValue;
});