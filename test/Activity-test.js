/* eslint-disable max-len */

const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const User = require('../src/User')
const Activity = require('../src/Activity')

const activityTestData = require('../test-data/activity-test-data')
const userData = require('../test-data/user-test-data')

describe('Activity Class', () => {
  
  let userRepo, testUser, userActivity

  beforeEach(() => {
    userRepo = new UserRepository(userData)
    testUser = new User(userRepo.userGroup[0].id, userRepo.userGroup[0].name, userRepo.userGroup[0].address, userRepo.userGroup[0].email, userRepo.userGroup[0].strideLength, userRepo.userGroup[0].dailyStepGoal, userRepo.userGroup[0].friends);
    userActivity = new Activity(testUser, activityTestData);
  });

  it('should be a function', () =>
    expect(Activity).to.be.a('function')),

  it('should be an instance of Activity Class', () => {
    expect(userActivity).to.be.an.instanceof(Activity);
  });

  it('should have a current user', () => {

    expect(userActivity.currentUser).to.equal(testUser)
  });

  it('should store all activity data for current user', () => {
    
    expect(userActivity.allUserActivity[0]).to.equal(activityTestData[0])
  })

  it('should display a message when no activity data for current user is present', () => {
    userActivity = new Activity(testUser)
    expect(userActivity.allUserActivity).to.deep.equal([])
  })

  it('should have a date', () => {

    expect(userActivity).to.have.property('date')
  });

  it('should be able to find the last available date', () => {

    expect(userActivity.findLastAvailableDate(activityTestData)).to.equal("2019/06/30");
  });

  it('date should default to the last available date', () => {
    expect(userActivity.date).to.equal("2019/06/30");
  });

  it('should be able to change the current date', () => {
    
    userActivity.changeDate("2019/06/28");
    expect(userActivity.date).to.equal("2019/06/28");
  });

  it('should check that date parameter is in "YYYY/MM/DD" format', () => {
    expect(userActivity.changeDate("Invalid/Date")).to.equal('Please, use "YYYY/MM/DD" format');
  });

  it('should return the steps taken on a given day', () => {
   
    expect(userActivity.findStepsForGivenDay("2019/06/30")).to.equal(14880);
  });

  it('should return a message if date is not found', () => {

    expect(userActivity.findStepsForGivenDay("2016/06/30")).to.equal("Sorry, could not find day")
  });

  it('return user\'s active munutes for a given day', () => {
      
    expect(userActivity.returnActiveMinutesForGivenDay("2019/06/28")).to.equal(169);
    expect(userActivity.returnActiveMinutesForGivenDay("2019/06/30")).to.equal(21);
  });

  it('should return an error message if user\'s active minutes for a given day are not found', () => {

    expect(userActivity.returnActiveMinutesForGivenDay("2015/06/30")).to.equal('No activity data found for this date');
  });
    
    
  it('return user\'s distance walked in miles for a given day', () => {

    expect(userActivity.calculateMilesWalkedOnDay("2019/06/29")).to.equal("5.69");
    expect(userActivity.calculateMilesWalkedOnDay("2019/06/30")).to.equal("12.12");
  });

  it('should find and store activity data for a given week', () => {

    userActivity.findUserActivityForGivenWeek('2019/06/30');
    expect(userActivity.infoForGivenWeek).to.be.an('array').that.has.lengthOf(7)
  });

  it('should store N/A if a date is not found for a given week', function() {
    userActivity.findUserActivityForGivenWeek('2019/06/15');
    expect(userActivity.infoForGivenWeek).to.deep.equal(["N/A", "N/A", "N/A", "N/A", "N/A", "N/A", activityTestData[0]])
  })

  it('should return average of user\'s active minutes for a given week', () => {

    expect(userActivity.returnAverageMinutesActiveForWeek("2019/06/30")).to.equal("104.43");
  });

  it('should return average of user\'s active minutes for a given week even if incomplete', () => {
    
    userActivity.findUserActivityForGivenWeek('2019/06/15');
    expect(userActivity.returnAverageMinutesActiveForWeek("2019/06/15")).to.equal("140.00");
  });

  it('should return a message whether user reaches step goal for given day or not', () => {
    
    expect(userActivity.didUserReachDailyStepGoal('2019/06/15')).to.equal('Sorry, you did not reach your step goal on 2019/06/15');
    expect(userActivity.didUserReachDailyStepGoal('2019/06/30')).to.equal('WooHoo! You reached your step goal on 2019/06/30');
  });

  it('should return an error message if date does not exist', () => {

    expect(userActivity.didUserReachDailyStepGoal("2015/06/30")).to.equal('No activity data found for this date');
  });

  it('should return all dates where user reached their step goal', () => {

    expect(userActivity.allDaysUserReachedStepGoal()).to.deep.equal(['2019/06/17', '2019/06/20', '2019/06/22', '2019/06/23', '2019/06/28', '2019/06/30']);
  });

  it('should be able to return user all time stair climbing record', function() {

    expect(userActivity.allTimeStairClimbingRecord()).to.equal(39)
  });

  it('should calculate user\'s speed for given date', function() {


    expect(userActivity.calculateSpeedForGivenDate('2019/06/17')).to.equal('On 2019/06/17 you walked 4.17 miles per hour!')
  });
});

describe('User Repository methods involving Activity Data', () => {

  let userRepo, testUser, userActivity
  beforeEach(() => {
    userRepo = new UserRepository(userData)
    testUser = new User(userRepo.userGroup[0].id, userRepo.userGroup[0].name, userRepo.userGroup[0].address, userRepo.userGroup[0].email, userRepo.userGroup[0].strideLength, userRepo.userGroup[0].dailyStepGoal, userRepo.userGroup[0].friends);
    userActivity = new Activity(testUser, activityTestData);
  });

  it('should find the average stairs climbed for all user for a given date', () => {

    expect(userRepo.calculateAllUserAverages('2019/06/30', activityTestData).stairsClimbed).to.equal(26.25)
  });

  it('should return an error message if arguments aren\'t passed in', () => {

    expect(userRepo.calculateAllUserAverages('2019/06/30')).to.equal('Sorry, incomplete information, cannot return data')
  });

  it('should find the average steps taken for all user for a given date', () => {

    expect(userRepo.calculateAllUserAverages('2019/06/30', activityTestData).stepsTaken).to.equal(11799.50)
  });

  it('should return an error message if arguments aren\'t passed in', () => {

    expect(userRepo.calculateAllUserAverages(activityTestData)).to.equal('Sorry, incomplete information, cannot return data')
  });

  it('should find the average minutes active for all user for a given date', () => {

    expect(userRepo.calculateAllUserAverages('2019/06/30', activityTestData).minutesActive).to.equal(144.75)
  });

  it('should return an error message if arguments aren\'t passed in', () => {

    expect(userRepo.calculateAllUserAverages('2019/06/30')).to.equal('Sorry, incomplete information, cannot return data')
  });
});
