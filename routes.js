const express = require("express")
const Device = require("./models/devices")
const router = express.Router()

// Get all posts
router.get("/encounters/:deviceId", async (req, res) => {
	const encounters = await Device.findOne({ deviceId: req.params.deviceId })
	res.send(encounters)
})

router.post("/encounters", async (req, res) => {
    let deviceId1 = req.body.deviceId1;
    let deviceId2 = req.body.deviceId2;
    //Check if the device is already in the db
    let device = await Device.findOne({ deviceId: deviceId1 })
    if (device)
        device.encounters.push(deviceId2)
    else{
        device = new Device({
            deviceId: deviceId1,
            encounters: [deviceId2],
        })
    }
	await device.save()
	res.send(device)
})

module.exports = router