const Education = require('../models/education');
const fs = require('fs');


const get = async (req, res) => {
    const data = await Education.find({});
    res.json(data);
}
const store = async (req, res) => {

    try {
        await Education.create(req.body);
        return res.json({ message: "Success" });
    } catch (e) {
        console.log(e);
        return res.json({ message: "Failed" });
    }
}

module.exports = { store, get };