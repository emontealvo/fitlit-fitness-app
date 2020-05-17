const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const User = require('../src/User')
const Hydration = require('../src/Hydration')

const hydrationData = require('../test-data/hydration-test-data')
const userData = require('../test-data/user-test-data')


describe('Hydration Class when parameters are missing', function() {

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });
  
  it('should be an instance of Hydration', function() {
    const hydration = new Hydration()
   
    expect(hydration).to.be.an.instanceof(Hydration);
  });
  
  it('should be able to hold an array of hydration data', function () {
    const hydration = new Hydration(hydrationData)
  
    expect(hydration.userHydrationInfo).to.be.an('array')
  })
  
  it('should be an empty array if no hydration data is present', function() {
    const hydration = new Hydration()
  
    expect(hydration.userHydrationInfo).to.deep.equal([]);
  });

  it('should have a current date property with default string of "YYYY/MM/DD"', function() {
    const hydration = new Hydration()

    expect(hydration.currentDate).to.equal("YYYY/MM/DD")
  })

  it('should return an error message if no user is present', function() {
    const hydration = new Hydration()
  
    expect(hydration.currentUserId).to.equal('Sorry, user not found.');
  });
});

describe('Hydration Class when properly initiated', function() {

  const user = new User(userData[0].id);
  const userHydration = new Hydration (user, hydrationData);

  it('should have a current user', function() {
    expect(userHydration.currentUserId).to.equal(1);
  });

  it('should only store a user\'s hydration info', function() { 
    const filteredHydrationData = hydrationData.filter( hydrationStat => hydrationStat.userID === user.id)

    expect(userHydration.userHydrationInfo).to.deep.equal(filteredHydrationData);
  });

  it('should calculater the average fl Oz consumed per day for all time', function() {
    expect(userHydration.calculateAvgFlOzConsumedPerDay()).to.equal("60.22")
  })

  it('should be able to return a user\'s daily ounces for a specific date', function() {
    expect(userHydration.findFlOzConsumed('2019/06/15')).to.equal(37);
  });

  it('should return a message if user\'s daily ounces for a specific date are not found', function() {
   
    expect(userHydration.findFlOzConsumed('2020/06/15')).to.equal('Sorry, no hydration data found for this date!');
  });

  it('should return an error if date is not is YYYY/MM/DD format', function() {  
    expect(userHydration.findFlOzConsumed('May 3, 1996')).to.equal('Sorry, please use YYYY/MM/DD format');
  });

  it('should return user\'s water intake for a 7 week', function() {
  
    expect(userHydration.getWeeklyOuncesConsumed('2019/06/23')).to.deep.equal([96, 61, 91, 50, 50, 43, 39]);
  });

  it('should return user\'s water intake for a 7 week across different months', function() { 
    expect(userHydration.getWeeklyOuncesConsumed('2019/07/02')).to.deep.equal([52, 29, 57, 99, 64, 82, 53]); 
  });

  it('should return a message if user\'s weekly ounces for a week are not found', function() {
  
    expect(userHydration.getWeeklyOuncesConsumed('2020/06/15')).to.deep.equal(['N/A','N/A','N/A','N/A','N/A','N/A','N/A']);
  });

  it('should return user\'s water intake for a 7 day week even if incomplete', function() {
    expect(userHydration.getWeeklyOuncesConsumed('2019/06/18')).to.deep.equal(['N/A', 'N/A', 'N/A', 37, 69, 96, 61]);
  });

  it('should return an error if date is not is YYYY/MM/DD format', function() {

    expect(userHydration.getWeeklyOuncesConsumed('May 3, 1996')).to.equal('Sorry, please use YYYY/MM/DD format');
  });
})

 

  