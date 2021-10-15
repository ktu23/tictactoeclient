// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Whenever our #sign-up form is submitted, call the `onSignUp` function
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  // select the button with the id sign out and call the onSightOut
  // function anytime the button is clicked
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('submit', authEvents.onNewGame)
  $('#resetGame').on('submit', authEvents.onNewGameReset)

  // $('#change-password').on('submit', authEvents.onChangePassword)

  // put all of the boxes separately
  $('.play1').on('click', authEvents.onClick)
  $('.play2').on('click', authEvents.onClick)
  $('.play3').on('click', authEvents.onClick)
  $('.play4').on('click', authEvents.onClick)
  $('.play5').on('click', authEvents.onClick)
  $('.play6').on('click', authEvents.onClick)
  $('.play7').on('click', authEvents.onClick)
  $('.play8').on('click', authEvents.onClick)
  $('.play9').on('click', authEvents.onClick)
})
