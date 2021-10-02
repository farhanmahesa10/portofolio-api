const Workskill = require('../models/workskill');
const { validationResult } = require('express-validator');
const get = async (req, res) => {
    const data = await Workskill.find({});
    res.json(data);
}

const store = async (req, res) => {
    console.log(req.body);
    try {
        req.body.map(async (r) => {
            await Workskill.create(r);
        })

        return res.json({ message: "Success" });
    } catch (e) {
        // console.log(e);
        return res.json({ message: "Failed" });
    }

}

const update = async (req, res) => {
    try {
        const data = await Workskill.findOne({ _id: req.params.id })
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
        const update = await Workskill.updateOne({ _id: req.params.id }, req.body);
        return res.json({ message: "success" })
    } catch (e) {
        return res.json({ message: "data gagal di update" });
    }

}

const destroy = async (req, res) => {
    try {
        const data = await Workskill.findOne({ _id: req.params.id })
        if (!data) {
            return res.sendStatus(404)
        }
    } catch (e) {
        res.send(e)
    }

    const deleted = await Workskill.deleteOne({ _id: req.params.id });
    return res.json({ message: "success" })
}

module.exports = { get, store, update, destroy };