/* eslint-disable max-len */
console.log("Hello World");

let user;
let userRepository;


window.onload = () => {
  userRepository = new UserRepository(userData)
  instantiateUser()
  greetUser()
  displayUserInfo()
  displayUserFriends()
  displayAverageStepGoalForAllUsers()
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
  let userInformationSection = document.querySelector('.user-information')
  userInformationSection.insertAdjacentHTML('beforeend', 
    `<p>Address: ${user.address}</p>
     <p>Email: ${user.email}</p>
     <p>Daily Step Goal: ${user.dailyStepGoal}</p>
     <p>Stride Length: ${user.strideLength}</p>`)
}

const displayUserFriends = () => {
  let friendsSection = document.querySelector('.friend-list')
  let foundFriend
  user.friends.forEach((friend) => {
    foundFriend = userRepository.findUser(friend)
    friendsSection.insertAdjacentHTML('beforeend',
    `<p>Name: ${foundFriend.name}</p>
     <p>Email: ${foundFriend.email}</p>
     <p>Saily Step Goal: ${foundFriend.dailyStepGoal}</p>
     <p>Stride Length: ${foundFriend.strideLength}</p>`)
  })
}

const displayAverageStepGoalForAllUsers = () => {
  let allUsersAverageStepGoalSection = document.querySelector('.all-users-average-step-goal')
  let allUsersAverageStepGoal = userRepository.calculateAverageStepGoalAllUser()
  allUsersAverageStepGoalSection.innerText = `Average Step Goal for All Users: ${allUsersAverageStepGoal}`
}



