// Add event listener to the button 
document.getElementById('button').addEventListener('click', comparison)

// Compares the age of the user, and determines the rating of the movie
function comparison () {
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  if (userInput >= 18) {
    document.getElementById('answer').innerHTML = 'You can watch a R rated movie.'
  } else if (userInput >= 13) {
    document.getElementById('answer').innerHTML = 'You can watch a PG-13 rated movie.'
  } else if (userInput >= 5) {
    document.getElementById('answer').innerHTML = 'You can watch a PG rated movie.'
  } else {
    document.getElementById('answer').innerHTML = 'You are too young to watch movies.'
  }
}
