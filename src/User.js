class User {
  constructor(id, name, address, email, strideLength, dailyStepGoal, friends) {
    this.id = id || null; 
    this.name = name || 'No name on file';
    this.address = address || 'No address on file'; 
    this.email = email || 'No email on file';
    this.strideLength = strideLength || 'None on file'; 
    this.dailyStepGoal = dailyStepGoal || 'No goal set';
    this.friends = friends || 'No friends on file'
  }

  getUserName() {
    return this.name
  }
}
if (typeof module !== 'undefined') {
    module.exports = User;
  }