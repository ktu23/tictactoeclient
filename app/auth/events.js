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
// make a variable to check the winner of the game
// we will have to do this for every possible winning combo - so 8 total
const checkWinner = function () {
  console.log($('.play1').text())
  if ($('.play1').text() === ($('.play2').text() && $('.play3').text())) {
    console.log('win')
  }
  // else if ($('.play1').text() === ($('.play4').text() && $('.play7').text())) {
  //   console.log('win')
  // }
  // else if ($('.play2').text() === ($('.play5').text() && $('.play8').text())) {
  //   console.log('win')
  // }
  // else if ($('.play3').text() === ($('.play6').text() && $('.play9').text())) {
  //   console.log('win')
  // }
  // else if ($('.play4').text() === ($('.play5').text() && $('.play6').text())) {
  //   console.log('win')
  // }
  // else if ($('.play7').text() === ($('.play8').text() && $('.play9').text())) {
  //   console.log('win')
  // }
  // else if ($('.play1').text() === ($('.play5').text() && $('.play9').text())) {
  //   console.log('win')
  // }
  // else if ($('.play3').text() === ($('.play5').text() && $('.play7').text())) {
  //   console.log('win')
  // }
}

const onNewGame = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()

  // we pass in the formData because it will need the info like email, password etc
  // make a POST /sign-up request, pass it the email/password/confirmation
  api
    .newGame()
    // if our sign up request is successful, run the signUpSuccess function
    .then(ui.newGameStart)
    // otherwise, if an error occurred, run a signUpFailure function
    // .catch(ui.signOutFailure)
}

// define a variable for the first move, but make it the opposite so the first move is X
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
  checkWinner,
  onNewGame
}
