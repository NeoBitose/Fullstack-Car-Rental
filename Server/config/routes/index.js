const router = require("express").Router();

const { SystemController } = require("../../app/controllers");

const Car = require("./carRoute");

router.use("/api/v1/cars", Car);

router.use("/api/v1/health-check", SystemController.healtcheck)
router.use(SystemController.onLost);
router.use(SystemController.onError);

module.exports = router
