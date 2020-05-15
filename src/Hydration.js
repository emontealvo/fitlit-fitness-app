class Hydration {
  constructor(user, hydrationData) {
    this.currentUserId = (user) ? user.id : 'Sorry, user not found.';
    this.userHydrationInfo = (hydrationData) ? this.filterHydrationData(hydrationData) : [];
    this.currentDate = (this.userHydrationInfo.length) 
      ? this.userHydrationInfo[this.userHydrationInfo.length - 1].date : 'YYYY/MM/DD';
    this.flOzConsumed = this.findFlOzConsumed(this.currentDate)
  }

  filterHydrationData(hydrationData) {
    const userHydrationData = hydrationData.filter( data => data.userID === this.currentUserId);
    return userHydrationData;
  }

  testDateInput(date) {
    const re = /\d{4}\/\d{2}\/\d{2}/
    return re.test(date)
  }

  findFlOzConsumed(date) {
    return (this.testDateInput(date) && this.findDay(date)) ? this.findDay(date).numOunces
      : (!this.testDateInput(date)) ? 'Sorry, please use YYYY/MM/DD format'
        : "Sorry, no hydration data found for this date!"
  };

  findDay(date) {
    return this.userHydrationInfo.find( day => day.date === date);
  };

  getWeeklyOuncesConsumed(date) {
    if (this.testDateInput(date)) {
      console.log(this.getWeekData(date).map( day => day.numOunces))
      return this.getWeekData(date).map( day => day.numOunces)
    };
  };

  getWeekData(date) {
    const dateIndex = this.userHydrationInfo.findIndex( day => day.date === date);
    return this.userHydrationInfo.slice((dateIndex - 6), (dateIndex + 1))
  };
};



if (typeof module !== 'undefined') {
    module.exports = Hydration;
  }