import multer from "multer";
import path from "path";

const storageConfig = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, path.resolve(path.join("public", "uploadedfiles")));
  },
  filename: (request, file, cb) => {
    let tempFileName =
      Date.now() + "_" + file.fieldname + "_" + file.originalname;
    cb(null, tempFileName);
  },
});

const uploadFile = multer({ storage: storageConfig });
export default uploadFile;
