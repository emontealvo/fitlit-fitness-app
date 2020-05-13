const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const data = [
  {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4,
      8
    ]
  },
  {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [
      9,
      18,
      24,
      19
    ]
  },
  {
    "id": 3,
    "name": "Herminia Witting",
    "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
    "email": "Elwin.Tromp@yahoo.com",
    "strideLength": 4.4,
    "dailyStepGoal": 5000,
    "friends": [
      19,
      11,
      42,
      33
    ]
  },
  {
    "id": 4,
    "name": "Mae Connelly",
    "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
    "email": "Marcos_Pollich@hotmail.com",
    "strideLength": 3.1,
    "dailyStepGoal": 4000,
    "friends": [
      48,
      7,
      44,
      8
    ]
  }
];

describe ('User Repository Blueprint', function() {

  it('should be a function', function() {
    const userRepository = new UserRepository();

    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate a new user repository', function() {
    const userRepository = new UserRepository();

    expect(userRepository).to.be.an.instanceof(UserRepository);
  })

  it('should hold on to users and their information ', function() {
    const userRepository = new UserRepository();

    expect(userRepository.userGroup).to.be.an('array');
  });
});

describe('User Repository behavior', function() {

  it('should hold onto user data', function() {
    const userRepository = new UserRepository(data);
   
    expect(userRepository.userGroup[0].name).to.be.equal("Luisa Hane");
  });

  it('should find an user and return their data given their id number.', function() {
    const userRepository = new UserRepository(data);

    expect(userRepository.findUser(1)).to.deep.equal(userRepository.userGroup[0])
  });

  it('should return a message when user does not exist', function() {
    const userRepository = new UserRepository(data);

    expect(userRepository.findUser(62)).to.equal('User could not be located.')
  });

  it('should return a message if user group is empty', function() {
    const emptyData = []
    const userRepository = new UserRepository(emptyData);

    expect(userRepository.findUser(1)).to.equal('User could not be located.')
  });

  it('should be able to calculate average step goal of all users', function() {
    const userRepository = new UserRepository(data);

    expect(userRepository.calculateAverageStepGoalAllUser()).to.equal(6000)
  });

  it('should return a message when user group is empty', function() {
    const emptyData = []
    const userRepository = new UserRepository(emptyData);

    expect(userRepository.calculateAverageStepGoalAllUser()).to.equal("No user data present.")
  });
});

