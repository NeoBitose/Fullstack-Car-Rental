const { Op } = require("sequelize");
const { Car } = require("../models");

async function getAllCars(req, res) {
    try {
        const cars = await Car.findAll({order: ['id']});

        if (cars.length === 0) {
            return res.status(404).json({
                status: "Failed",
                message: "No data cars found",
                isSuccess: false,
                data: null,
            });
        }

        res.status(200).json({
            status: "Success",
            message: "Success get cars data",
            isSuccess: true,
            data: {
                cars,
            },
        });
    }
    catch (error) {
        if (error.name === "SequelizeValidationError") {
            const errorMessage = error.errors.map((err) => err.message);
            return res.status(400).json({
                status: "Failed",
                message: errorMessage[0],
                isSuccess: false,
                data: null,
            });
        } else if (error.name === "SequelizeDatabaseError") {
            return res.status(400).json({
                status: "Failed",
                message: error.message || "Database error",
                isSuccess: false,
                data: null,
            });
        } else {
            return res.status(500).json({
                status: "Failed",
                message: error.message,
                isSuccess: false,
                data: null,
            });
        }
    }
}

async function getFilterCars(req, res) {
    try {
        const { driverType, date, timeRent, passanger } = req.body;
        let type = ""
        if (driverType == "true") {
            type = true
        } else {
            type = false
        }
        const condition = {};

        if (driverType) {
            condition.available = type;
        }   
        if (date && !timeRent) {
            condition.availableAt = {
                [Op.lte]: `${date}T23:59:59.000Z`
            };
        } else if (date && timeRent) {
            condition.availableAt = {
                [Op.lte]: `${date}T${timeRent}Z`
            };
        }        
        if (passanger) {
            condition.capacity = {
                [Op.gte]: passanger
            };
        }
        const cars = await Car.findAll({
            where: condition,  
            order: ['id']
        });

        if (cars.length === 0) {
            return res.status(404).json({
                status: "Failed",
                message: "No data cars found",
                isSuccess: false,
                data: null,
            });
        }

        res.status(200).json({
            status: "Success",
            message: "Success get cars data",
            isSuccess: true,
            data: {
                cars,
            },
        });
    }
    catch (error) {
        if (error.name === "SequelizeValidationError") {
            const errorMessage = error.errors.map((err) => err.message);
            return res.status(400).json({
                status: "Failed",
                message: errorMessage[0],
                isSuccess: false,
                data: null,
            });
        } else if (error.name === "SequelizeDatabaseError") {
            return res.status(400).json({
                status: "Failed",
                message: error.message || "Database error",
                isSuccess: false,
                data: null,
            });
        } else {
            return res.status(500).json({
                status: "Failed",
                message: error.message,
                isSuccess: false,
                data: null,
            });
        }
    }
}

module.exports = {
    getAllCars,
    getFilterCars
}