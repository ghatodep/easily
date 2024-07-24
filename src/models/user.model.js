export default class UserModel {
  constructor(_id, _userName, _userEmail, _userPass) {
    this.id = _id ? _id : UserModel.idGenerator++;
    this.userName = _userName;
    this.userEmail = _userEmail;
    this.userPassword = _userPass;
    console.log(`user created - ${this.userName} ~ ${this.userEmail}`);
  }

  static idGenerator = 1;

  static checkCredentials(emailId, password) {
    let ind = UserModel.checkValidEmail(emailId);
    if (ind != -1) {
      return password == users[ind].userPassword;
    } else {
      console.error(`Invalid User Email Id - ${emailId}`);
      return -1;
    }
  }

  static checkValidEmail(emailId) {
    const ind = users.findIndex((u) => {
      return u.userEmail == emailId;
    });
    return ind;
  }

  static addNewUser(name, email, password) {
    const user = new UserModel(null, name, email, password);
    try {
      users.push(user);
    } catch (error) {
      console.error(error);
    }
  }

  static getNameByEmail(email) {
    let ind = UserModel.checkValidEmail(email);
    if (ind != -1) {
      return users[ind].userName;
    }
    return "Recruiter";
  }
}

var users = [
  new UserModel(null, "Ramesh", "ramesh@gmail.com", "ramesh@123"),
  new UserModel(null, "Admin", "admin@easily.com", "admin@123"),
];
