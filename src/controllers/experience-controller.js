const Experience = require('../models/experience');
const { validationResult } = require('express-validator');
const Hello = require('../models/hello');
const get = async (req, res) => {
    const data = await Experience.find({});
    res.json(data);
}

const store = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.json(errors);
    }

    try {
        const add = await Experience.create(req.body);
        return res.json(add)
    } catch (e) {
        return res.json({ message: "Failed" });
    }

}

const update = async (req, res) => {
    try {
        const data = await Experience.findOne({ _id: req.params.id })
        if (!data) {
            return res.sendStatus(404)
        }
    } catch (e) {
        res.sendStatus(404);
    }
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json(errors);
    }

    try {
        const update = await Experience.updateOne({ _id: req.params.id }, req.body);
        return res.json({ message: "success" })
    } catch (e) {
        return res.json({ message: "data gagal di update" });
    }

}

const destroy = async (req, res) => {
    try {
        const data = await Experience.findOne({ _id: req.params.id })
        if (!data) {
            return res.sendStatus(404)
        }
    } catch (e) {
        res.send(e)
    }

    const deleted = await Experience.deleteOne({ _id: req.params.id });
    return res.json({ message: "success" })
}

module.exports = { get, store, update, destroy };