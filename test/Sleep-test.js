const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const User = require('../src/User')
const Sleep = require('../src/Sleep')

const userData = require('../test-data/user-test-data')

describe('Sleep Class', () => {
  
  let testUser, userSleep
  beforeEach(() => {
    testUser = new User(userData[0]);
    userSleep = new Sleep(testUser);
  });

  it('should be a function', () =>
  expect(Sleep).to.be.a('function')),

  it('should be an instance of Sleep Class', () => {
    userSleep = new Sleep()
    expect(userSleep).to.be.an.instanceof(Sleep);
  });

  it('should have an id associated with an user', () => {
    expect(userSleep.userId).to.equal(1)
  });

  it('should have a date', () => {
    expect(userSleep).to.have.property('date')
  });

  it('should have a default date of the last available data point', () => {
    expect(userSleep.date).to.equal("2019/06/30");
  });

  it('should find the hours slept for a given day', () => {
    expect(userSleep.findHoursSlept("2019/06/30")).to.equal(6.9);
  });

  it('should store the hours slept for a given day', () => {
    expect(userSleep.hoursSlept).to.equal(6.9);
  });

  it('should be able to change the current date', () => {
    userSleep.changeDate("2019/06/28");
    expect(userSleep.date).to.equal("2019/06/28");
  });

  it('should check that date parameter is in "YYYY/MM/DD" format', () => {
    expect(userSleep.changeDate("Invalid/Date").to.equal('Please, use "YYYY/MM/DD" format'));
  });

  it('should find the quality of sleep for a given day', () => {
    expect(userSleep.findSleepQuality("2019/06/28")).to.equal(4.7);
  });

  it('should store the quality of sleep for a given day', () => {
    userSleep.changeDate("2019/06/28");
    expect(userSleep.sleepQuality).to.equal(4.7);
  });
});