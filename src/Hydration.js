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

  findFlOzConsumed(date) {
    const re = /\d{4}\/\d{2}\/\d{2}/

    if(re.test(date)) {
      const whichDay = this.userHydrationInfo.find( day => day.date === date);
      return whichDay.numOunces
    } else {
      return "Sorry, no hydration data found for this date!"
    }  
  }

  find
}



if (typeof module !== 'undefined') {
    module.exports = Hydration;
  }