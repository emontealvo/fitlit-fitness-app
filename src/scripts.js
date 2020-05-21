/* eslint-disable max-len */

let user;
const userRepository = new UserRepository(userData);


window.onload = () => {
  instantiateUser()
  instantiateUserHydration()
  instantiateUserSleep()
  instantiateUserActivity()
  displayUserInfo()
  displayUserFriends()
  displayStepGoals();
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
      <p><span>Address:</span> ${user.address}</p>
      <p><span>Email:</span> ${user.email}</p>
      <p><span>Daily Step Goal:</span> ${user.dailyStepGoal}</p>
      <p><span>Stride Length:</span> ${user.strideLength}</p>
    </div>`)
}

const displayUserFriends = () => {
  let friendsSection = document.querySelector('.friend-list')
  let foundFriend
  user.friends.forEach((friend) => {
    foundFriend = userRepository.findUser(friend)
    let friendID = new Activity (foundFriend, activityData)
    friendsSection.insertAdjacentHTML('beforeend',
    `<div class="friend">
      <p><span>Name:</span> ${foundFriend.name}</p>
      <p><span>Daily Step Goal:</span> ${foundFriend.dailyStepGoal}</p>
      <h5>${friendID.friendTotalStepsComparedToUser(user, activityData, friendID.date)}</h5>
    </div>`)
  })
}

const displayStepGoals = () => {
  displayUserStepGoal();
  displayAverageStepGoalForAllUsers();
}

const displayUserStepGoal = () => {
  const userStepGoalDisplay = document.querySelector('.user-step-goal');
  userStepGoalDisplay.insertAdjacentHTML('beforeend', `<h4>${user.dailyStepGoal}</h4>`) 
}

const displayAverageStepGoalForAllUsers = () => {
  let allUsersAverageStepGoalDisplay = document.querySelector('.all-users-average-step-goal')
  let allUsersAverageStepGoal = userRepository.calculateAverageStepGoalAllUser()
  allUsersAverageStepGoalDisplay.insertAdjacentHTML('beforeend', `<h4>${allUsersAverageStepGoal}<h4>`)
}

const displayUserHydration = (userHydration) => {
  displayDayHydration(userHydration);
  displayWeekHydration(userHydration);
};

const displayDayHydration = (userHydration) => {
  const userDayHydrationWidget = document.querySelector('.daily-hydration');
  userDayHydrationWidget.innerHTML = 
    `<h4> Daily Hydration: </h4>
    <h4> ${userHydration.flOzConsumed} fl. Oz </h4>`
};

const displayWeekHydration = (userHydration) => {
  const userWeekdayHydration = document.querySelector('.weekday-hydration-display');
  const userWeekHydrationData = userHydration.weekHydrationData;
  userWeekHydrationData.forEach( day => {
    let dayDisplay = new Date(day.date);
    userWeekdayHydration.insertAdjacentHTML('beforeend', 
      `<div class="weekday-hydration">
        <h5> ${dayDisplay.toDateString()}</h5>
        <h4> ${day.numOunces} fl. Oz</h4>
      </div>`)
  });
}

const instantiateUserSleep = () => {
  let userSleep = new Sleep(user, sleepData)
  displaySleepInformation(userSleep)
}

const displaySleepInformation = (sleepObject) => {
  displaySleepInfo(sleepObject)
  displayWeeklySleepInfo(sleepObject)
}

const displaySleepInfo = (sleepObject) => {
  const userDaySleepWidget = document.querySelector('.daily-sleep');
  userDaySleepWidget.innerHTML = 
  `<h5> Hours Slept: </h5>
  <h5>${sleepObject.findHoursSlept(sleepObject.date)}</h5>
  <h5> Sleep Quality:</h5>
  <h5>${sleepObject.findSleepQuality(sleepObject.date)}</h5>
  <h5> Average Hours Slept:</h5>
  <h5>${sleepObject.calculateUserAvgHoursSlept()}</h5>
  <h5> Average Sleep Quality:</h5>
  <h5>${sleepObject.calculateUserAvgSleepQuality()}</h5>`
}

const displayWeeklySleepInfo = (sleepObject) => {
  const userWeekdaySleep = document.querySelector('.whole-week-sleep-data-display');
  let hoursSleptForWeek = sleepObject.findSleepDataOverWeek(sleepObject.date)
  hoursSleptForWeek.forEach( day => {
    let dayDisplay = new Date(day.date);
    userWeekdaySleep.insertAdjacentHTML('beforeend', 
      `<div class="weekday-sleep-display">
        <h5> ${dayDisplay.toDateString()}</h5>
        <h5> ${day.sleepQuality} / 5 </h5>
        <h5> ${day.hoursSlept} hrs.</h5>
      </div>`)
  });
}

const instantiateUserActivity = () => {
  const userActivity = new Activity (user, activityData)
  displayActivityInformation(userActivity)
}

const displayActivityInformation = (userActivity) => {
  displayUserActivity4Day(userActivity);
  displayUserActivity4Week(userActivity);
}

const displayUserActivity4Day = (userActivity) => {
  const userDayActivityDisplay = document.querySelector('.day-activity-record');
  const date = userActivity.date
  userDayActivityDisplay.insertAdjacentHTML('beforeend',
    `<h5>Steps Taken:</h5>
    <h5>${userActivity.findStepsForGivenDay(date)}</h5>
    <h5>Miles Walked:</h5>
    <h5>${userActivity.calculateMilesWalkedOnDay(date)}</h5>
    <h5>Minutes Active:</h5>
    <h5>${userActivity.returnActiveMinutesForGivenDay(date)}</h5>
    <h5>Average Speed:</h5>
    <h5>${userActivity.calculateSpeedForGivenDate(date)}</h5>`
  )
}

const displayUserActivity4Week = (userActivity) => {
  const userWeekActivityDisplay = document.querySelector('.week-activity-record');
  const userWeekActivity = userActivity.infoForGivenWeek;
  userWeekActivity.forEach( entry => {
    let dayDisplay = new Date(entry.date);
    userWeekActivityDisplay.insertAdjacentHTML('beforeend', 
      `<div class="weekday-activity-info">
      <h5> ${dayDisplay.toDateString()} </h5>
      <h5> ${entry.numSteps} </h5>
      <h5> ${entry.minutesActive} </h5>
      <h5> ${entry.flightsOfStairs} </h5>
      </div> `
      )
  })
} 




