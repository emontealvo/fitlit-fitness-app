/* eslint-disable max-len */
console.log("Hello World");

let user;
let userRepository;


window.onload = () => {
  userRepository = new UserRepository(userData)
  instantiateUser()
  greetUser()
  displayUserInfo()
}

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 49 + 1)
}

const instantiateUser = () => {
  let randomUser = userRepository.findUser(generateRandomNumber())
  user = new User (randomUser.id, randomUser.name, randomUser.address, randomUser.email, randomUser.strideLength, randomUser.dailyStepGoal, randomUser.friends)
}

const greetUser = () => {
  let greetingSection = document.querySelector('.greeting')
  greetingSection.innerText = `Howdy, ${user.name}!`
}

const displayUserInfo = () => {
  let userInformation = document.querySelector('.user-information')
  userInformation.insertAdjacentHTML('beforeend', 
    `<p>Address: ${user.address}</p>
     <p>Email: ${user.email}</p>
     <p>Daily Step Goal: ${user.dailyStepGoal}</p>
     <p>Stride Length: ${user.strideLength}</p>`)
}



