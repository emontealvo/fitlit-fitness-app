const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const data = require('../data/users');

describe ('User Repository', function() {

  it('should be a function', function() {
    const userRepository = new UserRepository();

    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate a new user repository', function() {
    const userRepository = new UserRepository();

    expect(userRepository).to.be.an.instanceof(UserRepository);
  })

  it('should hold on to users and their information ', function() {
    const userRepository = new UserRepository(data);

    expect(userRepository.userGroup).to.be.an('array');
  });

  it('should hold onto instances of user', function() {
    const userRepository = new UserRepository(data)
  })
})