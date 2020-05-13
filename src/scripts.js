/* eslint-disable max-len */
console.log("Hello World");

let user;
let userRepository;


window.onload = () => {
  userRepository = new UserRepository(userData)
  instantiateUser()
  greetUser()
}

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 49 + 1)
}

const instantiateUser = () => {
  let randomUser = userRepository.findUser(generateRandomNumber())
  user = new User (randomUser.id, randomUser.name, randomUser.address, randomUser.email, randomUser.strideLength, randomUser.dailyStepGoal, randomUser.friends)
  return user
}

const greetUser = () => {
  let greetingSection = document.querySelector('.greeting')
  greetingSection.innerText = `Howdy ${user.name}`
}