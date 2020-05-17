class Hydration {
  constructor(user, hydrationData) {
    this.currentUserId = (user) ? user.id : 'Sorry, user not found.';
    this.userHydrationInfo = (hydrationData) ? this.filterHydrationData(hydrationData) : [];
    this.currentDate = (this.userHydrationInfo.length) 
      ? this.getLastDataInput().date : 'YYYY/MM/DD';
    this.flOzConsumed = this.findFlOzConsumed(this.currentDate);
    this.weekHydrationData= this.findWeekData(this.currentDate);
  }

  filterHydrationData(hydrationData) {
    const userHydrationData = hydrationData.filter( data => data.userID === this.currentUserId);
    return userHydrationData;
  }

  getLastDataInput() {
    return this.userHydrationInfo[this.userHydrationInfo.length - 1];
  }

  testDateInput(date) {
    const re = /\d{4}\/\d{2}\/\d{2}/;
    return re.test(date);
  }

  changeCurrentDate(date) {
    this.currentDate = (testDateInput(date)) ? date : 'Sorry, please use YYYY/MM/DD format';
  }

  calculateAvgFlOzConsumedPerDay() {
    const totalFlOzConsumed = this.userHydrationInfo.reduce(((acc, day) => acc += day.numOunces), 0)
    const avgFlOzConsumed = totalFlOzConsumed/this.userHydrationInfo.length
    return avgFlOzConsumed.toFixed(2)
  }

  findFlOzConsumed(date) {
    return (this.testDateInput(date) && this.findDay(date)) ? this.findDay(date).numOunces
      : (!this.testDateInput(date)) ? 'Sorry, please use YYYY/MM/DD format'
        : "Sorry, no hydration data found for this date!";
  };

  findDay(date) {
    return this.userHydrationInfo.find( day => day.date === date);
  };

  getWeeklyOuncesConsumed(date) {
    return (this.testDateInput(date)) ? this.getWeekNumOunces(date)
      : 'Sorry, please use YYYY/MM/DD format';
  };

  getWeekNumOunces(date) {
    return this.findWeekData(date).map( day => (day.numOunces) ? day.numOunces : 'N/A');
  };

  findWeekData(date) {
    const dateIndex = this.userHydrationInfo.findIndex( day => day.date === date);
    const weekData = new Array(7);
    for(let i = 0; i < 7; i++) {
      weekData[6 - i] = (this.userHydrationInfo[dateIndex - i]) ? this.userHydrationInfo[dateIndex - i] : "N/A";
    };
    return weekData; 
  };
};


if (typeof module !== 'undefined') {
    module.exports = Hydration;
  };