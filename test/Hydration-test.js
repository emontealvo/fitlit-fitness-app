const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const User = require('../src/User')
const Hydration = require('../src/Hydration')

const data = ('../test-data/hydration-test-data')


describe('Hydration Class', function() {

  it.skip('should be a function', function() {
    
    expect(Hydration).to.be.a('function');
  });
  
  it.skip('should be an instance of Hydration', function() {
    const hydration = new Hydration()
  
    expect(hydration).to.be.an.instanceof(Hydration);
  });
  
  it.skip('should be able to hold an array of hydration data', function () {
    const hydration = new Hydration(data)
  
    expect(hydration.allHydrationInfo).to.be.an('array')
  })
  
  it.skip('should be an empty array if no hydration data is present', function() {
    const hydration = new Hydration()
  
    expect(hydration.allHydrationInfo).to.equal([]);
  });

  it.skip('should have a current date', function() {
    const hydration = new Hydration()

    expect(hydration.currentDate).to.equal(hydration.returnDate())
  })

  it.skip('should have a current user', function() {
    const user = new User(1)
    const hydration = new Hydration(data, user)
  
    expect(hydration.currentUser.id).to.equal(1);
  });

  it.skip('should return an error message if no user is present', function() {
    const hydration = new Hydration(data)
  
    expect(hydration.currentUser).to.equal('Sorry, user not found.');
  });
  

  it.skip('should be able to return a user\'s hydration info', function() {
    const user = new User(1)
    const hydration = new Hydration(data, user)
  
    expect(hydration.returnUserHydrationInfo()).to.be.an('array');
  });

  it.skip('should return a message if no hydration data is found', function() {
    const user = new User(100)
    const hydration = new Hydration(data, user)
  
    expect(hydration.returnUserHydrationInfo()).to.equal('Sorry, no hydration data found for this user.');
  });


  it.skip('should be able to return a user\'s daily ounces for a specific date', function() {
    const user = new User(1)
    const hydration = new Hydration(data, user)
  
    expect(hydration.filterHydrationInfoByDate('2019/06/15')).to.equal(37);
  });

  it.skip('should return a message if user\'s daily ounces for a specific date are not found', function() {
    const user = new User(1)
    const hydration = new Hydration(data, user)
  
    expect(hydration.filterHydrationInfoByDate('2020/06/15')).to.equal('Sorry, no hydration data found for this date!');
  });

  it.skip('should return an error if date is not is YYYY/MM/DD format', function() {
    const user = new User(1)
    const hydration = new Hydration(data, user)
  
    expect(hydration.filterHydrationInfoByDate('May 3, 1996')).to.equal('Sorry, please use YYYY/MM/DD format');
  });

  it.skip('should return user\'s water intake for a 7 week', function() {
    const user = new User(1)
    const hydration = new Hydration(data, user)
  
    expect(hydration.findWeeklyOunces('2019/06/23')).to.deep.equal([39, 43, 50, 50, 91, 61, 96]);
  });

  it.skip('should return a message if user\'s weekly ounces for a week are not found', function() {
    const user = new User(1)
    const hydration = new Hydration(data, user)
  
    expect(hydration.findWeeklyOunces('2020/06/15')).to.equal('Sorry, no hydration data found for this week');
  });

  it.skip('should return an error if date is not is YYYY/MM/DD format', function() {
    const user = new User(1)
    const hydration = new Hydration(data, user)
  
    expect(hydration.findWeeklyOunces('May 3, 1996')).to.equal('Sorry, please use YYYY/MM/DD format');
  });
});
  