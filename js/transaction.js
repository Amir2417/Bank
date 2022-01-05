document.getElementById('depoBtn').addEventListener('click',function(){
    const inputValue = document.getElementById('deposit-amount');
    const newValue = parseFloat(inputValue.value);
    
    const depoText = document.getElementById('depoAmount');
    const previousValue = parseFloat(depoText.innerText);
    const totalValue = previousValue + newValue;
    depoText.innerText = totalValue;
    inputValue.value ='';

});