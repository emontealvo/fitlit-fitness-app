class User {
  constructor(userInfo) {
    if (userInfo) {
      this.id = (userInfo.id) ? userInfo.id : "No valid id on file"; 
      this.name = (userInfo.name) ? userInfo.name : 'No name on file';
      this.address = (userInfo.address) ? userInfo.address : 'No address on file'; 
      this.email = (userInfo.email) ? userInfo.email : 'No email on file';
      this.strideLength = (userInfo.strideLength) ? userInfo.strideLength : 'None on file'; 
      this.dailyStepGoal = (userInfo.dailyStepGoal) ? userInfo.dailyStepGoal : 'No goal set';
      this.friends = (userInfo.friends) ? userInfo.friends : 'No friends on file'
    }
  }

  getUserName() {
    return this.name
  }
}
if (typeof module !== 'undefined') {
    module.exports = User;
  }