let form = document.getElementById('form')
let first_name = document.getElementById('first_name')
let last_name = document.getElementById('last_name')
let phone = document.getElementById('phone')
let gender = document.getElementById('gender')
let country = document.getElementById('country')
let state = document.getElementById('state')
let username = document.getElementById('username')
let password = document.getElementById('password')
let confirm_password = document.getElementById('confirm_password')
let submitBtn = document.querySelector('.submit_btn')

const checkInputs = () => {
  // trim to remove whitespaces
  let first_nameVal = first_name.value.trim()
  let last_nameVal = last_name.value.trim()
  let phoneVal = phone.value.trim()
  let countryVal = country.value.trim()
  let stateVal = state.value.trim()
  let usernameVal = username.value.trim()
  let passwordVal = password.value.trim()
  let confirmPasswordVal = confirm_password.value.trim()
  let getGenderVal = gender.value

  // conditions
  if (first_nameVal === '') {
    showError(first_name, 'First name cannot be empty')
  } else if (first_name.value.length < 3) {
    showError(first_name, 'First name is too short')
  } else {
    showSuccess(first_name)
  }

  if (last_nameVal === '') {
    showError(last_name, 'Last name cannot be empty')
  } else if (last_name.value.length < 3) {
    showError(last_name, 'Last name is too short')
  } else {
    showSuccess(last_name)
  }

  if (phoneVal === '') {
    showError(phone, 'Phone no cannot be empty')
  } else if (phone.value.length < 11) {
    showError(phone, 'Phone no format is wrong')
  } else {
    showSuccess(phone)
  }

  if (getGenderVal === '') {
      showError(gender, 'Select a gender')
  } else {
      showSuccess(gender)
  }

  if (countryVal === '') {
    showError(country, 'Country no cannot be empty')
  } else {
    showSuccess(country)
  }

  if (stateVal === '') {
    showError(state, 'State no cannot be empty')
  } else {
    showSuccess(state)
  }

  if (usernameVal === '') {
    showError(username, 'Username cannot be empty')
  } else if (username.value.length < 3) {
    showError(username, 'Username is too short')
  } else {
    showSuccess(username)
  }

  if (passwordVal === '') {
    showError(password, 'Password cannot be empty')
  } else if (password.value.length < 8 || password.value.length > 20) {
    showError(password, 'Password should be within 8 and 20 characters')
  } else {
    showSuccess(password)
  }

  if (confirmPasswordVal === '') {
    showError(confirm_password, 'Password cannot be empty')
  } else if (confirm_password.value !== password.value) {
    showError(confirm_password, 'Passwords don"t match')
  } else {
    showSuccess(confirm_password)
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
    first_name: document.getElementById('first_name').value.trim(),
    last_name: document.getElementById('last_name').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    gender: document.getElementById('gender').value,
    country: document.getElementById('country').value.trim(),
    state: document.getElementById('state').value.trim(),
    username: document.getElementById('username').value.trim(),
    password: document.getElementById('password').value.trim(),
    confirm_password: document.getElementById('confirm_password').value.trim(),
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
      window.location = '/login'
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
