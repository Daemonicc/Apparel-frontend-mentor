
function validateEmail(e)
{
    let emailField = document.querySelector(`input[type="email"]`)
    let error = document.querySelector(".error")
    let button = document.querySelector('button')
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailField.value))
  {
    error.style.display = 'none'
    button.disabled = false
  }
    else{
        
        error.style.display = 'inline'
        button.disabled = true
        
    }
}
