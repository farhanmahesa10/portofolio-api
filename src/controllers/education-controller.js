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

const update = async (req, res) => {

    try {
        const update = await Education.updateOne({ _id: req.params.id }, req.body);
        return res.json({ message: "success" })
    } catch (e) {
        return res.json({ message: "data gagal di update" });
    }

}
const destroy = async (req, res) => {
    try {
        await Education.deleteOne({ _id: req.params.id });
        return res.json({ message: "success" })
    } catch (e) {
        res.send(e)
    }
}

module.exports = { store, get, update, destroy };