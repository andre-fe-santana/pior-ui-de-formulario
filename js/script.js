let telInput = document.querySelector('#telField')
let telValue = document.querySelector('.telValue')
telValue.innerHTML = telInput.value

telInput.addEventListener('input', function(){
    telValue.innerHTML = telInput.value
})