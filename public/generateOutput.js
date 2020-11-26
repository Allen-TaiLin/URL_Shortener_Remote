// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateOutput function
function generateOutput(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  //const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'  

  // create a collection to store things user picked up
  let collection = []

  collection = collection.concat(...lowerCaseLetters).concat(...upperCaseLetters).concat(numbers.split(''))

  // start generating output
  let output = ''
  for (let i = 0; i < 5; i++) {
    output += sample(collection)
  }

  //console.log(output)
  // return the generated output
  return output
}

// invoke generateOutput function
//generateOutput()

// export generateOutput function for other files to use
module.exports = generateOutput