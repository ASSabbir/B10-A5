function calculate(price, money,parent) {
    const number = /\d/;
    const string = /[a-zA-Z]/;
    
    if (number.test(money) && string.test(money)) {
        alert('this is not money')
    }
    else if (number.test(money)) {
        const temp=parseInt(price.innerText);
        price.innerText=parseInt(money)+temp;
        const myAccount=document.querySelector('#total-Account');
        myAccount.innerText=myAccount.innerText-money;
        const output=document.querySelector('#output')
        const date=new Date()
        
        const h1=parent.children[1].innerText;
        
        let apent=document.createElement('div')
        apent.innerHTML =`<div class="border-[1px] border-zinc-600 p-5 rounded-2xl">
            <h1 class="text-xl font-bold grotesk "> ${money} Taka is ${h1}</h1> 
            <p class="text-zinc-400">Date : ${date.toDateString()}</p>
        </div>`;
        output.appendChild(apent)
        
    }
    else if (string.test(money)) {
        alert('this is not money')
    }

}


const btn1= document.querySelector('#donet-btn')
btn1.addEventListener('click', function (event) {
    const donetion = document.querySelector('#price span')
    const inputField = document.querySelector('.card-text input').value;
    const inputFieldcontainer = document.querySelector('.card-text input');
    inputFieldcontainer.value=''
    const parent=event.target.parentElement.parentElement;
    calculate(donetion, inputField,parent)
    
})
document.querySelector('#donet-btn2').addEventListener('click', function (event) {
    const donetion = document.querySelector('#price2 span')
    const inputField = document.querySelector('.card-text2 input').value;
    const inputFieldcontainer2 = document.querySelector('.card-text2 input');
    inputFieldcontainer2.value=''
    const parent=event.target.parentElement.parentElement
    calculate(donetion, inputField,parent)
    
})
document.querySelector('#donet-btn3').addEventListener('click', function (event) {
    const donetion = document.querySelector('#price3 span')
    const inputField = document.querySelector('.card-text3 input').value;
    const inputFieldcontainer2 = document.querySelector('.card-text3 input');
    inputFieldcontainer2.value=''
    const parent=event.target.parentElement.parentElement
    calculate(donetion, inputField,parent)
    
})

