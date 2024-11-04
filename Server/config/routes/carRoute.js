const router = require("express").Router();

const { CarController } = require("../../app/controllers");

router.get("/", CarController.getAllCars);
router.post("/", CarController.getFilterCars);

module.exports = router;