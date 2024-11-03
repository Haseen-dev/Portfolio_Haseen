const multer = require("multer");

const storage=multer.diskStorage({
    destination:
})

const upload = multer({
  dest: "./uploads",
});

module.exports = upload;
