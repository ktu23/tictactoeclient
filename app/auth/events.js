'use strict'

// require the getFormFields function, to get data from our forms
const getFormFields = require('../../lib/get-form-fields')

// require our api auth functions
const api = require('./api')
// require our ui functions to update the page
const ui = require('./ui')

const onSignUp = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()

  // event.target is the form that caused the 'submit' event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)

  // we pass in the formData because it will need the info like email, password etc
  // make a POST /sign-up request, pass it the email/password/confirmation
  api
    .signUp(formData)
    // if our sign up request is successful, run the signUpSuccess function
    .then(ui.signUpSuccess)
    // otherwise, if an error occurred, run a signUpFailure function
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()

  // event.target is the form that caused the 'submit' event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)

  // we pass in the formData because it will need the info like email, password etc
  // make a POST /sign-up request, pass it the email/password/confirmation
  api.signIn(formData)
    // if our sign up request is successful, run the signUpSuccess function
    .then(ui.signInSuccess)
    // otherwise, if an error occurred, run a signUpFailure function
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()

  // we pass in the formData because it will need the info like email, password etc
  // make a POST /sign-up request, pass it the email/password/confirmation
  api
    .signOut()
    // if our sign up request is successful, run the signUpSuccess function
    .then(ui.signOutSuccess)
    // otherwise, if an error occurred, run a signUpFailure function
    .catch(ui.signOutFailure)
}

const checkWinner = function () {
  console.log($('.play1').text())
  if ($('.play1').text() === ($('.play2').text() && $('.play3').text())) {
    console.log('win')
  }
}

let firstPlay = 'O'
const onClick = function (event) {
  // console.log('event is ', event)
  // console.log(firstPlay)
  checkWinner()
  if (firstPlay === 'O') {
    $(event.target).text('X')
    firstPlay = 'X'
  }
  else {
    $(event.target).text('O')
    firstPlay = 'O'
  }
}



// export our event handler functions, so we can use them
// in app.js
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onClick,
  checkWinner
}
