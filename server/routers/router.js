const express = require("express");
const { bookAppointments } = require("../controller/Appointmentbook");

const routers = express.Router();


routers.post("/user/book/Appointments",bookAppointments)


module.exports = routers