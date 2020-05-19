class Sleep {
  constructor(user, sleepData) {
    this.userId = user.id;
    this.date = this.findLastDataInput(sleepData)
    this.userSleepData = this.filterUserSleepData(sleepData)
    this.hoursSlept;
    this.sleepQuality;
    this.hrsSleptOverWeek;
    this.sleepQualityOverWeek;
  }

  findLastDataInput(sleepData) {
    let lastIndex = sleepData.length - 1
    return sleepData[lastIndex].date
  }

  changeDate(date) {
    const re = /\d{4}\/\d{2}\/\d{2}/;
    if (re.test(date)) {
      this.date = date

    } else {
      return 'Please, use "YYYY/MM/DD" format'
    }
  }

  filterUserSleepData(sleepData) {
    const userSleepData = sleepData.filter((data) => data.userID === this.userId)
    return userSleepData
  }

  findHoursSlept(date) {
    const findHoursForDate = this.userSleepData.find((data) => data.date === date)
    return findHoursForDate ? this.hoursSlept = findHoursForDate.hoursSlept : 'Sorry, could not find day'
  }

  findSleepQuality(date) {
    const findDataForDate = this.userSleepData.find((data) => data.date === date)
    return findDataForDate ? this.sleepQuality = findDataForDate.sleepQuality : 'Sorry, could not find day'
  }

  findSleepDataOverWeek(date) {
    const dateIndex = this.userSleepData.findIndex( day => day.date === date)
    const weekData = new Array(7);
    for (let i = 0; i < 7; i++) {
      //going to need to return the date as well
      weekData[6 - i] = (this.userSleepData[dateIndex - i]) ? this.userSleepData[dateIndex - i] : "N/A";
    }
    console.log(weekData)
    return weekData
  }

  // findSleepQualityOverWeek(date) {
  //   const dateIndex = this.userSleepData.findIndex( day => day.date === date)
  //   const weekData = new Array(7);
  //   for (let i = 0; i < 7; i++) {
  //     //going to need to return the date as well
  //     weekData[6 - i] = (this.userSleepData[dateIndex - i]) ? this.userSleepData[dateIndex - i].sleepQuality : "N/A";
  //   }
  //   return weekData
  // }

  calculateUserAvgSleepQuality() {
    let averageQuality = this.userSleepData.reduce((acc, data) => {
      return acc += data.sleepQuality
    }, 0) / this.userSleepData.length

    return Number(averageQuality.toFixed(2))
  }

  calculateUserAvgHoursSlept() {
    let averageHours = this.userSleepData.reduce((acc, data) => {
      return acc += data.hoursSlept
    }, 0) / this.userSleepData.length

    return Number(averageHours.toFixed(2))
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}