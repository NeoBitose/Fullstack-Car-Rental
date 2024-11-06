const router = require("express").Router();

const { SystemController } = require("../../app/controllers");

const Auth = require("./authRoute");
const Car = require("./carRoute");

router.use("/api/v1/cars", Car);
router.use("/api/v1/auth", Auth);

router.use("/api/v1/health-check", SystemController.healtcheck)
router.use(SystemController.onLost);
router.use(SystemController.onError);

module.exports = router
