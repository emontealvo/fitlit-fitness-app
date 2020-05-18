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
    testUser = new User(userRepo.userGroup[0].id, userRepo.userGroup[0].name, userRepo.userGroup[0].address, userRepo.userGroup[0].email, userRepo.userGroup[0].strideLength, userRepo.userGroup[0].dailyStepGoal, userRepo.userGroup[0].friends);
    userSleep = new Sleep(testUser, sleepData);
  });

  it('should be a function', () =>
  expect(Sleep).to.be.a('function')),

  it('should be an instance of Sleep Class', () => {
    expect(userSleep).to.be.an.instanceof(Sleep);
  });

  it('should have an id associated with an user', () => {
    expect(userSleep.userId).to.equal(1)
  });

  it('should have a date', () => {
    expect(userSleep).to.have.property('date')
  });

  it('should find the last available data point', () => {
    expect(userSleep.findLastDataInput(sleepData)).to.equal("2019/06/30");
  });

  it('should have a default date of the last available data point', () => {
    expect(userSleep.date).to.equal("2019/06/30");
  });

  it('should be able to change the current date', () => {
    userSleep.changeDate("2019/06/28");
    expect(userSleep.date).to.equal("2019/06/28");
  });

  it('should check that date parameter is in "YYYY/MM/DD" format', () => {
    expect(userSleep.changeDate("Invalid/Date")).to.equal('Please, use "YYYY/MM/DD" format');
  });

  it('should find the hours slept for a given day', () => {
   
    expect(userSleep.findHoursSlept("2019/06/30")).to.equal(6.9);
  });

  it('should return a message if date is not found', () => {
    expect(userSleep.findHoursSlept("2019/08/15")).to.equal("Sorry, could not find day")
  })

  it('should store the hours slept for a given day', () => {
    userSleep.changeDate("2019/06/28");
    userSleep.findHoursSlept(userSleep.date)
    expect(userSleep.hoursSlept).to.equal(7.6);

    userSleep.changeDate("2019/06/30");
    userSleep.findHoursSlept(userSleep.date)
    expect(userSleep.hoursSlept).to.equal(6.9);
  });

  it('should find the quality of sleep for a given day', () => {
    expect(userSleep.findSleepQuality("2019/06/28")).to.equal(4.7);
  });

  it('should return a message if date is not found', () => {
    expect(userSleep.findSleepQuality("2019/08/15")).to.equal("Sorry, could not find day")
  })

  it('should store the quality of sleep for a given day', () => {
    userSleep.changeDate("2019/06/28");
    userSleep.findSleepQuality(userSleep.date)
    expect(userSleep.sleepQuality).to.equal(4.7);
  });

  it('should find the amount of hours slept each day over the course of a week', () => {
    const hrsSleptOverWeek = userSleep.findHrsSleptOverWeek("2019/06/30")
    expect(hrsSleptOverWeek).to.deep.equal([8, 5.1, 7.7, 9.4, 7.6, 5.3, 6.9])
  });

  it('should display "N/A" for incomplete week information', () => {
    const hrsSleptOverWeek = userSleep.findHrsSleptOverWeek("2019/06/17");
    expect(hrsSleptOverWeek).to.deep.equal(["N/A", "N/A", "N/A", "N/A", 6.1, 4.1, 8])
  });

  it('should find the quality of sleep for each day over the course of a week', () => {
    const sleepQualityOverWeek = userSleep.findSleepQualityOverWeek("2019/06/30")
    expect(sleepQualityOverWeek).to.deep.equal([1.3, 3.7, 2.4, 4.6, 4.7, 1.2, 2.5])
  });

  it('should find the quality of sleep for each day over the course of a week', () => {
    const sleepQualityOverWeek = userSleep.findSleepQualityOverWeek("2019/06/17")
    expect(sleepQualityOverWeek).to.deep.equal(["N/A", "N/A", "N/A", "N/A", 2.2, 3.8, 2.6])
  });

  it('should calculate the average sleep quality for a single user', () => {
    expect(userSleep.calculateUserAvgSleepQuality()).to.equal(2.7)
  });

  it('should only display two decimal points when calculatin average sleep quality', () => {
    let user2Sleep = new Sleep(userRepo.userGroup[1], sleepData)
    expect(user2Sleep.calculateUserAvgSleepQuality()).to.equal(3.14)
  });

  it('should calculate the average hours slept for a single user', () => {
    expect(userSleep.calculateUserAvgHoursSlept()).to.equal(7.57)
  });
});

describe('User Repository methods involving Sleep Data', () => {

  let userRepo, testUser, userSleep
  beforeEach(() => {
    userRepo = new UserRepository(userData)
    testUser = new User(userRepo.userGroup[0]);
    userSleep = new Sleep(testUser, sleepData);
  });

  it('should find the average sleep quality for all user for all time', () => {
    expect(userRepo.calculateAllUserAvgSleepQuality(sleepData)).to.equal(3.00)
  });

  it('should throw an error if no data is present', () => {
    expect(() => userRepo.calculateAllUserAvgSleepQuality()).to.throw(TypeError, 'No Sleep Data Present')
  });

  it('should find all users with quality of sleep raiting of 3 or higher', () => {
    expect(userRepo.findHighQualitySleepers(sleepData)).to.deep.equal([userRepo.userGroup[1], userRepo.userGroup[2]])
  });

  it('should find all users with quality of sleep raiting of 3 or higher', () => {
    expect(userRepo.findHighQualitySleepers(sleepData)).to.deep.equal([userRepo.userGroup[1], userRepo.userGroup[2]])
  });

  it('should find the user(s) that slept the most hours for a given date', () => {
    expect(userRepo.findLongestTimeSleeper("2019/06/30", sleepData)).to.equal(userRepo.userGroup[1]);
  });

  it('should find the user(s) that slept the most hours for a given date', () => {
    expect(userRepo.findLongestTimeSleeper("2019/06/24", sleepData)).to.deep.equal([userRepo.userGroup[1], userRepo.userGroup[2]]);
  });
});
