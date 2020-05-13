const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
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

describe('User class blueprint', function() {
  
  it('should be a function', function() {
    const user = new User();

    expect(User).to.be.a('function');
  });

  it('should initiate a new User', function() {
    const user = new User();

    expect(user).to.be.an.instanceof(User);
  });

  it('should have an id, name, address, email, stride length, daily step goal, and friends', function() {
    const user = new User();

    expect(user).to.have.all.keys('id', 'name', 'address', 'email', 'strideLength', 'dailyStepGoal', 'friends');
  });

  it('should have default values for ommitted information', function() {
    const mysteryUser = {
      id: null,
      name: 'No name on file',
      address: 'No address on file',
      email: 'No email on file', 
      strideLength: 'None on file',
      dailyStepGoal: 'No goal set',
      friends: 'No friends on file'
    }
    const user = new User();

    expect(user).to.deep.equal(mysteryUser)
  });

  it('should hold all of a user\'s information', function() {
    const user = new User (data[0])

    expect(user.name).to.equal('"Luisa Hane"')
  })

  it('should be able to have different user information', function() {
    const user1 = new User(data[0]);
    const user2 = new User(data[1]);

    expect(user1.email).to.equal('Diana.Hayes1@hotmail.com')
    expect(user2.email).to.equal("Dimitri.Bechtelar11@gmail.com")
  })

  it('should have the ability to return only the user\'s name', function() {
    const user = new User(data[0]);

    expect(user.getUserName()).to.equal(user.name)
  });

  it('should return a message when user is not named', function() {
    const user = new User();

    expect(user.getUserName()).to.equal("No name on file")
  })
});
