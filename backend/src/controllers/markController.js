const markController = {};
import markModel from "../models/Mark.js";

markController.getMark = async (req, res) => {
    const mark = await markModel.find();
    res.json(mark);
};

// Insert (POST)
markController.createMark = async (req, res) => {
    const { Mark } = req.body;
    const newMark = new markModel({ Mark });
    await newMark.save();
    res.json({ message: "Mark saved" });
};

// Delete (DELETE)
markController.deleteMark = async (req, res) => {
    await markModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Mark deleted" });
};

// Update (PUT)
markController.updateMark = async (req, res) => {
    const { Mark } = req.body;
    await markModel.findByIdAndUpdate(req.params.id, { Mark }, { new: true });
    res.json({ message: "Mark updated" });
};

export default markController;