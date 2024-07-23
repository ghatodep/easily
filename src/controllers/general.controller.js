export default class GeneralController {
  constructor() {
    console.log("General Controller Activated !");
  }

  rootHomeRender(request, response) {
    // redering common home page
    console.log("Welcome to Easily !");
    response.render("home-landing", { usertype: null });
  }

  rootHomePost(request, response) {
    // to receive the user choice for job seeker or recruiter and then
    // rendering user specific home page
    request.session.usertype = request.body["radioInput"];
    console.log(`Home Page for - ${request.session.usertype}`);
    response.render("home-" + request.session.usertype, {
      usertype: request.session.usertype,
    });
  }
}
