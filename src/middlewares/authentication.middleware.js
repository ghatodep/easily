import session from "express-session";

export const sessionMiddleware = session({
  secret: "e@sily_",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
  },
});

export const authorize = (request, response, next) => {
  if (request.session.usertype == "job-seeker") {
    response.redirect("/jobs");
  } else if (request.session.usertype == "recruiter") {
    if (request.session.email) {
      next();
    } else {
      response.redirect("/login");
    }
  } else {
    response.redirect("/");
  }
};
