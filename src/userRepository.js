class UserRepository {
  constructor (dataset) {
    this.userGroup = dataset || [];
  };

  findUser(id) { 
    if(this.userGroup.find( user => user.id === id)) {
      return this.userGroup.find( user => user.id === id)
    } else {
      return "User could not be located."
    }; 
  };

  calculateAverageStepGoalAllUser() {
    const sumOfUsersStepGoal = this.userGroup.reduce(( (acc, user) => {
      return acc += user.dailyStepGoal
      }), 0);
    return (sumOfUsersStepGoal) ? (sumOfUsersStepGoal / this.userGroup.length) : "No user data present."
  };
};


if (typeof module !== 'undefined') {
    module.exports = UserRepository;
};