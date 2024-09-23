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
        console.log(h1)
        output.innerHTML=`<h1 class="text-xl font-bold grotesk "> ${money} Taka is ${h1}</h1> 
                <p class="text-zinc-400">Date : ${date.toDateString()}</p>`
        
    }
    else if (string.test(money)) {
        alert('this is not money')
    }

}


document.querySelector('#donet-btn').addEventListener('click', function (event) {
    const donetion = document.querySelector('#price span')
    const inputField = document.querySelector('.card-text input').value;
    const parent=event.target.parentElement.parentElement
    calculate(donetion, inputField,parent)
    
})

