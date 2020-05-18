/* eslint-disable max-len */
console.log("Hello World");

let user;
const userRepository = new UserRepository(userData);


window.onload = () => {
  instantiateUser()
  instantiateUserHydration()
  displayUserInfo()
  displayUserFriends()
  displayAverageStepGoalForAllUsers()
  instantiateUserSleep()
}

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 49 + 1)
}

const instantiateUser = () => {
  let randomUser = userRepository.findUser(generateRandomNumber())
  user = new User (randomUser.id, randomUser.name, randomUser.address, 
    randomUser.email, randomUser.strideLength, randomUser.dailyStepGoal, randomUser.friends);
  greetUser();
}

const instantiateUserHydration = () => {
  let userHydration = new Hydration(user, hydrationData);
  displayUserHydration(userHydration);
}

const greetUser = () => {
  let greetingSection = document.querySelector('.greeting')
  greetingSection.innerText = `Howdy, ${user.name}!`
}

const displayUserInfo = () => {
  let userInformationSection = document.querySelector('.user-information')
  userInformationSection.insertAdjacentHTML('beforeend', 
    `<div class="user-data">
      <p>Address: ${user.address}</p>
      <p>Email: ${user.email}</p>
      <p>Daily Step Goal: ${user.dailyStepGoal}</p>
      <p>Stride Length: ${user.strideLength}</p>
    </div>`)
}

const displayUserFriends = () => {
  let friendsSection = document.querySelector('.friend-list')
  let foundFriend
  user.friends.forEach((friend) => {
    foundFriend = userRepository.findUser(friend)
    friendsSection.insertAdjacentHTML('beforeend',
      `<div class="friend">
      <p>Name: ${foundFriend.name}</p>
      <p>Daily Step Goal: ${foundFriend.dailyStepGoal}</p>
    </div>`)
  })
}

const displayAverageStepGoalForAllUsers = () => {
  let allUsersAverageStepGoalSection = document.querySelector('.all-users-average-step-goal')
  let allUsersAverageStepGoal = userRepository.calculateAverageStepGoalAllUser()
  allUsersAverageStepGoalSection.insertAdjacentHTML('beforeend', 
    `<h5>Average Step Goal:</h5>
   <h4>${allUsersAverageStepGoal}<h4>`)
}

const displayUserHydration = (userHydration) => {
  displayDayHydration(userHydration);
  displayWeekHydration(userHydration);
};

const displayDayHydration = (userHydration) => {
  const userDayHydrationWidget = document.querySelector('.daily-hydration');
  userDayHydrationWidget.innerHTML = 
    `<h5> Daily Hydration: </h5>
    <h4> ${userHydration.flOzConsumed} fl. Oz </h4>`
};

const displayWeekHydration = (userHydration) => {
  const userWeekdayHydration = document.querySelector('.weekday-hydration-display');
  const userWeekHydrationData = userHydration.weekHydrationData
  userWeekHydrationData.forEach( day => {
    let dayDisplay = new Date(day.date);
    userWeekdayHydration.insertAdjacentHTML('beforeend', 
      `<section class="weekday-hydration">
        <div> ${dayDisplay.toDateString()}</div>
        <div> ${day.numOunces} fl. Oz</div>
      </section>`)
  });
}

const instantiateUserSleep = () => {
  let userSleep = new Sleep(user, sleepData)
  displaySleepInformation(userSleep)
}

const displaySleepInformation = (sleepObject) => {
  displayDailySleepInfo(sleepObject)
  displayWeeklySleepInfo(sleepObject)
  let allTimeSleepQuality = sleepObject.calculateUserAvgSleepQuality()
  let allTimeHoursSlept = sleepObject.calculateUserAvgHoursSlept()
  console.log(allTimeHoursSlept)
}

const displayDailySleepInfo = (sleepObject) => {
  let hoursSleptForDate = sleepObject.findHoursSlept(sleepObject.date)
  let sleepQualityForDate = sleepObject.findSleepQuality(sleepObject.date)
  const userDaySleepWidget = document.querySelector('.daily-sleep');
  userDaySleepWidget.innerHTML = 
  `<h5> Daily Sleep: </h5>
  <h5> Hours Slept: ${hoursSleptForDate}</h5>
  <h5> Sleep Quality: ${sleepQualityForDate}</h5>`
}

const displayWeeklySleepInfo = (sleepObject) => {
  const userWeekdaySleep = document.querySelector('.sleep-information');
  let hoursSleptForWeek = sleepObject.findHrsSleptOverWeek(sleepObject.date)
  let sleepQualityForWeek = sleepObject.findSleepQualityOverWeek(sleepObject.date)
  hoursSleptForWeek.forEach( day => {
    console.log(sleepObject.date)
    userWeekdaySleep.insertAdjacentHTML('beforeend', 
      `<section class="weekday-hydration">
        <div> ${day}</div>
      </section>`)
  });
}



// For a user, their sleep data for the latest day (hours slept and quality of sleep)
// For a user, their sleep data over the course of the latest week (hours slept and quality of sleep)
// For a user, their all-time average sleep quality and all-time average number of hours slept
