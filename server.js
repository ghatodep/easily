import { server } from "./index.js";

server.listen(3100, () => {
  console.log("easily is running on port number 3100.");
  console.log("Access at - http://localhost:3100/");
});
