class Activity {
  constructor(currentUser, activityData) {
    this.currentUser = currentUser;
    this.allUserActivity = this.findAllUserActivity(activityData);
    this.date = this.findLastAvailableDate(activityData);
    this.infoForGivenWeek = this.findUserActivityForGivenWeek(this.date)
  }


  findAllUserActivity(activityData) {
    return activityData ? activityData.filter((data) => data.userID === this.currentUser.id) : [];
  }

  findLastAvailableDate() {
    if (this.allUserActivity.length !== 0) {
      let lastIndex = this.allUserActivity.length - 1
      return this.allUserActivity[lastIndex].date
    }
  }

  changeDate(date) {
    const re = /\d{4}\/\d{2}\/\d{2}/;
    if (re.test(date)) {
      this.date = date

    } else {
      return 'Please, use "YYYY/MM/DD" format'
    }
  }

  findStepsForGivenDay(date) {
    if (this.allUserActivity.find((day) => day.date === date)) {
      let stepsForDay = this.allUserActivity.find((day) => day.date === date)
      return stepsForDay.numSteps
    } else {
      return "Sorry, could not find day"
    }
  }

  returnActiveMinutesForGivenDay(date) {
    if (this.allUserActivity.find((day) => day.date === date)) {
      let activeMinutesForDay = this.allUserActivity.find((day) => day.date === date)
      return activeMinutesForDay.minutesActive
    } else {
      return 'No activity data found for this date'
    }
  }

  calculateMilesWalkedOnDay(date) {
    let stepsTaken = this.allUserActivity.find( entry => entry.date === date).numSteps;
    let strideLength = this.currentUser.strideLength
    return ((stepsTaken * strideLength)/5280).toFixed(2)
  }

  didUserReachDailyStepGoal(date) {
    if (this.allUserActivity.find((day) => day.date === date)) {
      let foundDate = this.allUserActivity.find((day) => day.date === date)
      return foundDate.numSteps > this.currentUser.dailyStepGoal ? `WooHoo! You reached your step goal on ${date}` : `Sorry, you did not reach your step goal on ${date}`
    } else {
      return 'No activity data found for this date'
    }
  }

  findUserActivityForGivenWeek(date) {
    const dateIndex = this.allUserActivity.findIndex( entry => entry.date === date);
    const weekData = new Array(7);
    for (let i = 0; i < 7; i++) {
      weekData[6 - i] = (this.allUserActivity[dateIndex - i]) ? this.allUserActivity[dateIndex - i] : "N/A";
    }
    return this.infoForGivenWeek = weekData;
  }

  allTimeStairClimbingRecord() {
   return this.allUserActivity.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)[0].flightsOfStairs
  }

  returnAverageMinutesActiveForWeek(date) {
    const weekData = this.findUserActivityForGivenWeek(date).filter( entry => entry !== "N/A")
    let totalMinutesActive = weekData.reduce(((acc, entry) => acc += entry.minutesActive), 0)
    return (totalMinutesActive / weekData.length).toFixed(2)
  }

  allDaysUserReachedStepGoal() {
    const daysGoalAchieved = this.allUserActivity.filter ( entry => entry.numSteps >= this.currentUser.dailyStepGoal)
    return daysGoalAchieved.map( entry => entry.date)
  }

  calculateSpeedForGivenDate(date) {
    const speed = this.calculateMilesWalkedOnDay(date)/(this.returnActiveMinutesForGivenDay(date) / 60)
    return `On ${date} you walked ${speed.toFixed(2)} miles per hour!`
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}