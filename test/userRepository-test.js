const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const data = require('../data/users');

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

    expect(userRepository.calculateAverageStepGoalAllUser()).to.equal(6700)
  });

  it('should return a message when user group is empty', function() {
    const emptyData = []
    const userRepository = new UserRepository(emptyData);

    expect(userRepository.calculateAverageStepGoalAllUser()).to.equal("No user data present.")
  });
});

