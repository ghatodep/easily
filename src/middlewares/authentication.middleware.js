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
  if (request.session.usertype == "recruiter") {
    next();
  } else {
    response.redirect("/jobs");
  }
};
