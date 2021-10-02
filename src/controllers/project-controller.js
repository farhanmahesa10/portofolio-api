const Project = require('../models/project');
const fs = require('fs');


const get = async (req, res) => {
    const data = await Project.find({});
    res.json(data);
}
const store = async (req, res) => {

    try {
        await Project.create(req.body);
        return res.json({ message: "Success" });
    } catch (e) {
        console.log(e);
        return res.json({ message: "Failed" });
    }
}

const changeImage = async (req, res) => {
    //belum ini masuh hasil copas
    if (req.file) {
        const isData = await Project.find({});
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
            const update = await Project.updateOne({ _id: isData[0]._id }, { $set: { "image": req.file.path } });
            res.json([update, { message: "success" }]);
        } else {
            const save = await Project.create({ image: req.file.path });
            res.json([save, { message: 'success' }]);
        }
    } else {
        res.json({ message: "error" })
    }

}



module.exports = { store, get }