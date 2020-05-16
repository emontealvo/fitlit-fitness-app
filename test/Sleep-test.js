const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const User = require('../src/User')
const Sleep = require('../src/Sleep')

const sleepData = require('../test-data/sleep-test-data')
const userData = require('../test-data/user-test-data')

describe('Sleep Class', () => {
  
  let userRepo, testUser, userSleep
  beforeEach(() => {
    userRepo = new UserRepository(userData)
    testUser = new User(userRepo.userGroup[0]);
    userSleep = new Sleep(testUser, sleepData);
  });

  it('should be a function', () =>
  expect(Sleep).to.be.a('function')),

  it('should be an instance of Sleep Class', () => {
    userSleep = new Sleep()
    expect(userSleep).to.be.an.instanceof(Sleep);
  });

  it.skip('should have an id associated with an user', () => {
    expect(userSleep.userId).to.equal(1)
  });

  it.skip('should have a date', () => {
    expect(userSleep).to.have.property('date')
  });

  it.skip('should find the last available data point', () => {
    expect(userSleep.findLastDataInput()).to.equal("2019/06/30");
  });

  it.skip('should have a default date of the last available data point', () => {
    expect(userSleep.date).to.equal("2019/06/30");
  });

  it.skip('should be able to change the current date', () => {
    userSleep.changeDate("2019/06/28");
    expect(userSleep.date).to.equal("2019/06/28");
  });

  it.skip('should check that date parameter is in "YYYY/MM/DD" format', () => {
    expect(userSleep.changeDate("Invalid/Date").to.equal('Please, use "YYYY/MM/DD" format'));
  });

  it.skip('should find the hours slept for a given day', () => {
    expect(userSleep.findHoursSlept("2019/06/30")).to.equal(6.9);
  });

  it.skip('should return a message if date is not found', () => {
    expect(userSleep.findHoursSlept("2019/08/15")).to.equal("Sorry, could not find day")
  })

  it.skip('should store the hours slept for a given day', () => {
    expect(userSleep.hoursSlept).to.equal(6.9);
  });

  it.skip('should find the quality of sleep for a given day', () => {
    expect(userSleep.findSleepQuality("2019/06/28")).to.equal(4.7);
  });

  it.skip('should return a message if date is not found', () => {
    expect(userSleep.findSleepQuality("2019/08/15")).to.equal("Sorry, could not find day")
  })

  it.skip('should store the quality of sleep for a given day', () => {
    userSleep.changeDate("2019/06/28");
    expect(userSleep.sleepQuality).to.equal(4.7);
  });

  it.skip('should find the amount of hours slept each day over the course of a week', () => {
    const hrsSleptOverWeek = userSleep.findHrsSleptOverWeek("2019/06/30")
    expect(hrsSleptOverWeek).to.deep.equal([8, 5.1, 7.7, 9.4, 7.6, 5.3, 6.9])
  });

  it.skip('should display "N/A" for incomplete week information', () => {
    const hrsSleptOverWeek = userSleep.findHrsSleptOverWeek("2019/06/17");
    expect(hrsSleptOverWeek).to.deep.equal(["N/A", "N/A", "N/A", "N/A", 6.1, 4.1, 8])
  });

  it.skip('should find the quality of sleep for each day over the course of a week', () => {
    const sleepQualityOverWeek = userSleep.findSleepQualityOverWeek("2019/06/30")
    expect(sleepQualityOverWeek).to.deep.equal([1.3, 3.7, 2.4, 4.6, 4.7, 1.2, 2.5])
  });

  it.skip('should find the quality of sleep for each day over the course of a week', () => {
    const sleepQualityOverWeek = userSleep.findSleepQualityOverWeek("2019/06/17")
    expect(sleepQualityOverWeek).to.deep.equal(["N/A", "N/A", "N/A", "N/A", 2.2, 3.8, 2.6])
  });

  it.skip('should calculate the average sleep quality for a single user', () => {
    expect(userSleep.calculateUserAvgSleepQuality()).to.equal(2.7)
  });

  it.skip('should only display two decimal points when calculatin average sleep quality', () => {
    let user2Sleep = new Sleep(userRepo.userGroup[1])
    expect(user2Sleep.calculateUserAvgSleepQuality()).to.equal(3.13)
  });
});

describe('User Repository methods involving Sleep Data', () => {

  let userRepo, testUser, userSleep
  beforeEach(() => {
    userRepo = new UserRepository(userData)
    testUser = new User(userRepo.userGroup[0]);
    userSleep = new Sleep(testUser, sleepData);
  });

  it.skip('should find the average sleep quality for all user for all time', () => {
    expect(userRepo.calculateAllUserAvgSleepQuality(sleepData)).to.equal(3.00)
  });

  it.skip('should throw an error if no data is present', () => {
    expect(() => userRepo.calculateAllUserAvgSleepQuality()).to.throw(TypeError, 'No Sleep Data Present')
  });

  it.skip('should find all users with quality of sleep raiting of 3 or higher', () => {
    expect(userRepo.findHighQualitySleepers(sleepData)).to.deep.equal([userRepo.userGroup[1], userRepo.userGroup[2]])
  });

  it.skip('should find the user(s) that slept the most hours for a given date', () => {
    expect(userRepo.findLongestTimeSleeper("2019/06/30", sleepData)).to.equal(userRepo.userGroup[1]);
  });

  it.skip('should find the user(s) that slept the most hours for a given date', () => {
    expect(userRepo.findLongestTimeSleeper("2019/06/24", sleepData)).to.deep.equal([userRepo.userGroup[1], userRepo.userGroup[2]]);
  });
});
