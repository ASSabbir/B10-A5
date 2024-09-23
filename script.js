

document.querySelector('#donet-btn').addEventListener('click', function () {
    const donetion = parseInt(document.querySelector('#price span').innerText);
    const inputField = document.querySelector('.card-text input').value;
    const number=/\d/;
    const string=/[a-zA-Z]/;
    if(number.test(inputField) && string.test(inputField)){
       
    }
    else if(number.test(inputField)){
        alert('this is not money')
    }
    else if(string.test(inputField)){
        alert('this is not money')
    }
})