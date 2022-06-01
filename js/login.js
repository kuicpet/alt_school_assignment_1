let form = document.getElementById('form')
let username = document.getElementById('username')
let password = document.getElementById('password')
let submitBtn = document.querySelector('.submit_btn')

function checkInputs() {
  // trim to remove whitespaces
  let usernameVal = username.value.trim()
  let passwordVal = password.value.trim()

  // conditions
  if (usernameVal === '') {
    showError(username, 'Username cannot be empty')
  } else if (username.value.length < 3) {
    showError(username, 'Username is too short')
  } else {
    showSuccess(username)
  }

  if (passwordVal === '') {
    showError(password, 'Password cannot be empty')
  } else if(password.value.length < 8 || password.value.length > 20){
    showError(password, 'Password should be within 8 and 20 characters')
  }
  else {
    showSuccess(password)
  }
}

// Show input error messages
function showError(input, message) {
  let formControl = input.parentElement
  formControl.className = 'form_control error'
  let small = formControl.querySelector('.small')
  small.innerText = message
  small.style.visibility = 'inherit'
}

// Show success messages
function showSuccess(input) {
  let formControl = input.parentElement
  formControl.className = 'form_control success'
  let small = formControl.querySelector('.small')
  small.innerText = ''
  small.style.visibility = 'hidden'
}
// Submit Form
const url = ''
async function submitForm() {
  const x = {
    username: document.getElementById('username').value.trim(),
    password: document.getElementById('password').value.trim(),
  }
  console.log(x)
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(x),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const jsonR = await res.json()
    console.log(jsonR)
    if (jsonR.status === 200) {
      alert(jsonR.message)
      // redirect user to dashboard
      window.location = '/dashboard'
    } else {
      alert(jsonR.message)
    }
  } catch (error) {
    console.error(error)
    alert(error)
  }
}

// Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault()
  checkInputs()
  // submitForm()
})
