const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const Hydration = require('../src/Hydration')

const data = ('../test-data/hydration-test-data')


describe('Hydration Class', function() {

  it('should be a function', function() {
    
    expect(Hydration).to.be.a('function');
  });
  
  it('should be an instance of Hydration', function() {
    const hydration = new Hydration()
  
    expect(hydration).to.be.an.instanceof(Hydration);
  });
  
  it.skip('should be able to hold an array of hydration data', function () {
    const hydration = new Hydration()
  
    expect(hydration.allHydrationInfo).to.be.an('array')
  })
  
  it.skip('should be an empty array if no hydration data is present', function() {
   
  
    expect(user).to.have.all.keys('id', 'name', 'address', 'email', 'strideLength', 'dailyStepGoal', 'friends');
  });
  
  it.skip('should have default values for ommitted information', function() {
    const emptyUserInfo = {};
    const mysteryUser = {
      id: "No valid id on file",
      name: 'No name on file',
      address: 'No address on file',
      email: 'No email on file', 
      strideLength: 'None on file',
      dailyStepGoal: 'No goal set',
      friends: 'No friends on file'
    }
    const user = new User(emptyUserInfo);
  
    expect(user).to.deep.equal(mysteryUser)
  });
  
  it.skip('should hold all of a user\'s information', function() {
    let userRepository = new UserRepository(data)
    const foundUser = userRepository.findUser(1)
    const user = new User (foundUser)
      
  
    expect(user.name).to.equal("Luisa Hane")
  })
  
  it.skip('should be able to have different user information', function() {
    let userRepository = new UserRepository(data)
    const foundUser = userRepository.findUser(1)
    const foundUser2 = userRepository.findUser(2)
    const user1 = new User (foundUser);
    const user2 = new User (foundUser2);
  
    expect(user1.email).to.equal('Diana.Hayes1@hotmail.com')
    expect(user2.email).to.equal("Dimitri.Bechtelar11@gmail.com")
  })
  
  it.skip('should have the ability to return only the user\'s name', function() {
    let userRepository = new UserRepository(data)
    const foundUser = userRepository.findUser(1)
    const user = new User (foundUser);
  
    expect(user.getUserName()).to.equal(user.name)
  });
  
  it.skip('should return a message when user is not named', function() {
    const emptyUserInfo = {};
    const user = new User(emptyUserInfo);
  
    expect(user.getUserName()).to.equal("No name on file")
  })
});
  