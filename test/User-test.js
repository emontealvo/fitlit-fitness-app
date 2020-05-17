const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
const UserRepository = require('../src/userRepository');

const data = require('../test-data/user-test-data')

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
    const emptyUserInfo = {};
    const user = new User(emptyUserInfo);

    expect(user).to.have.all.keys('id', 'name', 'address', 'email', 'strideLength', 'dailyStepGoal', 'friends');
  });

  it('should have default values for ommitted information', function() {
    const mysteryUser = {
      id: "No valid id on file",
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
    let userRepository = new UserRepository(data)
    const foundUser = userRepository.findUser(1)
    const user = new User (foundUser.id, foundUser.name, foundUser.address, 
      foundUser.email, foundUser.strideLength, foundUser.dailyStepGoal, foundUser.friends)
    

    expect(user.name).to.equal("Luisa Hane")
  })

  it('should be able to have different user information', function() {
    let userRepository = new UserRepository(data)
    const foundUser = userRepository.findUser(1)
    const foundUser2 = userRepository.findUser(2)
    const user1 = new User (foundUser.id, foundUser.name, foundUser.address, 
      foundUser.email, foundUser.strideLength, foundUser.dailyStepGoal, foundUser.friends);
    const user2 = new User (foundUser2.id, foundUser2.name, foundUser2.address, 
      foundUser2.email, foundUser2.strideLength, foundUser2.dailyStepGoal, foundUser2.friends);

    expect(user1.email).to.equal('Diana.Hayes1@hotmail.com')
    expect(user2.email).to.equal("Dimitri.Bechtelar11@gmail.com")
  })

  it('should have the ability to return only the user\'s name', function() {
    let userRepository = new UserRepository(data)
    const foundUser = userRepository.findUser(1)
    const user = new User (foundUser.id, foundUser.name, foundUser.address, 
      foundUser.email, foundUser.strideLength, foundUser.dailyStepGoal, foundUser.friends);

    expect(user.getUserName()).to.equal(user.name)
  });

  it('should return a message when user is not named', function() {
    const emptyUserInfo = {};
    const user = new User(emptyUserInfo);

    expect(user.getUserName()).to.equal("No name on file")
  })
});
