let telInput = document.querySelector('#telFieldInput')
let telValue = document.querySelector('.telValue')
telValue.innerHTML = telInput.value

telInput.addEventListener('input', function(){
    telValue.innerHTML = telInput.value
})

let password = document.querySelector('#userPassword')
let passwordInput = document.querySelector('#userPasswordInput')

let confirmPassword = document.querySelector('#confirmPassword')
let confirmPasswordInput = document.querySelector('#confirmPasswordInput')

confirmPassword.addEventListener('input', function checarFonte() {

    let errorMsg = confirmPassword.querySelector('.errorMsg')
    console.log(errorMsg)
    console.log(passwordInput.value, confirmPasswordInput.value)

    if (passwordInput.value != confirmPasswordInput.value) {
        errorMsg.style.display = "flex"
        errorMsg.textContent = "As senhas não coincidem"
        console.log("As senhas não coincidem")
    } else {
        errorMsg.style.display = "none"
        errorMsg.textContent = ''
        console.log('ta certo agora')
    }

})

passwordInput.addEventListener('focusout', (event) => {

    let errorMsg = password.querySelector('.errorMsg')

    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    if (regex.test(passwordInput.value) === false) {
        
        errorMsg.style.display = "flex"   
        errorMsg.textContent = "Essa senha não é suficiente"

    }

})