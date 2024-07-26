import UserModel from "../models/user.model.js";
import JobModel from "../models/user.model.js";

export default class UserController {
  constructor() {
    console.log("User Controller Activated !");
  }

  // rendering registration form
  displayRegisterForm(request, response, next) {
    console.log("New User Registration page.");
    response.render("register", { usertype: request.session.usertype });
  }

  // processing registration details of the user
  registerRecruiter(request, response, next) {
    console.log("User Registration details.");
    console.log(request.body);
    const { userName, userEmail, userPassword } = request.body;
    UserModel.addNewUser(userName, userEmail, userPassword);
    response.redirect("/login");
  }

  // rendering login form
  displayLoginForm(request, response, next) {
    console.log("User Login page.");
    response.render("login", {
      usertype: request.session.usertype,
      error: null,
    });
  }

  // processing login details
  loginRecruiter(request, response, next) {
    console.log("User login details.");
    console.log(request.body);
    const { userEmail, userPassword } = request.body;
    let errors = [];
    const status = UserModel.checkCredentials(userEmail, userPassword);
    request.session.userName = UserModel.getNameByEmail(userEmail);

    if (status == -1) {
      errors.push("Invalid Email ID !");
    } else {
      if (status) {
        request.session.usertype = "recruiter";
        request.session.email = request.body.userEmail;
        return response.redirect("/home");
      } else {
        errors.push("Invalid Password !");
      }
    }

    response.render("login", {
      usertype: request.session.usertype,
      error: errors[0],
      userName: request.session.userName,
    });
  }

  // process logout
  logoutRecruiter(request, response, next) {
    console.log(
      `User ${request.session.userName} ~ ${request.session.email} has been logged out !`
    );
    request.session.usertype = null;
    request.session.email = null;
    request.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        response.redirect("/");
      }
    });
  }
}
