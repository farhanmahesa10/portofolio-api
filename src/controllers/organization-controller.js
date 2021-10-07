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
        return res.json({ message: "Failed" });
    }
}
const update = async (req, res) => {

    try {
        const update = await Organization.updateOne({ _id: req.params.id }, req.body);
        return res.json({ message: "success" })
    } catch (e) {
        return res.json({ message: "data gagal di update" });
    }

}
const destroy = async (req, res) => {
    try {
        await Organization.deleteOne({ _id: req.params.id });
        return res.json({ message: "success" })
    } catch (e) {
        res.send(e)
    }
}

module.exports = { store, get, update, destroy };