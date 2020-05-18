class UserRepository {
  constructor (dataset) {
    this.userGroup = dataset || [];
  }

  findUser(id) { 
    if (this.userGroup.find( user => user.id === id)) {
      return this.userGroup.find( user => user.id === id)
    } else {
      return "User could not be located."
    } 
  }

  calculateAverageStepGoalAllUser() {
    const sumOfUsersStepGoal = this.userGroup.reduce(( (acc, user) => {
      return acc += user.dailyStepGoal
    }), 0);
    return (sumOfUsersStepGoal) ? (sumOfUsersStepGoal / this.userGroup.length) : "No user data present."
  }

  calculateAllUserAvgSleepQuality(sleepData) {
    if (sleepData) {
      let allSleepQuality = sleepData.reduce((acc, data) => {
        return acc += data.sleepQuality
      }, 0) / sleepData.length

      return Number(allSleepQuality.toFixed(2)) 

    } else {
      // eslint-disable-next-line new-cap
      throw TypeError('No Sleep Data Present')
    }
  }

  findHighQualitySleepers(sleepData) {
    let highQualitySleeperIds = []
    let qualityOverThree =  sleepData.filter((data) => data.sleepQuality >= 3)
    qualityOverThree.forEach((quality) => {
      if (!highQualitySleeperIds.includes(quality.userID)) {
        highQualitySleeperIds.push(quality.userID)
      }
    })

    // eslint-disable-next-line max-len
    let highestQualitySleepers = [highQualitySleeperIds[0], highQualitySleeperIds[1]]

    return highestQualitySleepers.map((sleeper) => {
      sleeper = this.userGroup.find((user) => user.id === sleeper)
      return sleeper
    })
  }

  findLongestTimeSleeper(date, sleepData) {
    let sleepDataForDate = sleepData.filter((data) => data.date === date)
    let sortedData = sleepDataForDate.sort((a, b) => b.hoursSlept - a.hoursSlept)
    let highestSleep;

    if (sortedData[0].hoursSlept === sortedData[1].hoursSlept) {
      highestSleep = [sortedData[0], sortedData[1]]
    } else {
      highestSleep = [sortedData[0]]
      return this.userGroup.find((user) => user.id === highestSleep[0].userID)
    }

    return highestSleep.map((sleep) => {
      this.userGroup.forEach((user) => {
        if (user.id === sleep.userID) {
          sleep = user
        }
      })
      return sleep
    })
  }


  
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
};