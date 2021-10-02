const Hello = require('../models/hello');
const fs = require('fs');
const save = async (req, res) => {


    const isData = await Hello.find({});
    if (isData.length > 0) {
        const update = await Hello.updateOne({ _id: isData[0]._id }, req.body);
        res.json([update, { message: "success" }]);
    } else {
        // const insert =  new Hello(req.body);
        const save = await Hello.create(req.body);
        res.json([save, { message: 'success' }]);
    }

}

const changeImage = async (req, res) => {

    if (req.file) {
        const isData = await Hello.find({});
        if (isData.length > 0) {
            if (isData[0].image) {
                fs.unlink(isData[0].image, (err => {
                    if (err) console.log(err);
                    else {
                        console.log("\nDeleted file: example_file.txt");

                        // Get the files in current directory
                        // after deletion
                    }
                }));

            }
            const update = await Hello.updateOne({ _id: isData[0]._id }, { $set: { "image": req.file.path } });
            res.json([update, { message: "success" }]);
        } else {
            const save = await Hello.create({ image: req.file.path });
            res.json([save, { message: 'success' }]);
        }
    } else {
        res.json({ message: "error" })
    }

}

const get = async (req, res) => {
    const data = await Hello.find({});
    res.json(data[0]);
}

module.exports = { save, get, changeImage }