const Organization = require('../models/organization');
const fs = require('fs');


const get = async (req, res) => {
    const data = await Organization.find({});
    res.json(data);
}
const store = async (req, res) => {

    try {
        await Organization.create(req.body);
        return res.json({ message: "Success" });
    } catch (e) {
        console.log(e);
        return res.json({ message: "Failed" });
    }
}

module.exports = { store, get };