const reviewsController = {};
import reviewsModel from "../models/Review.js";
 
//Select
reviewsController.getReviews = async (req, res) => {
   const reviews = await reviewsModel.find().populate("idClient")
   res.json(reviews)
}
 
//Insert
reviewsController.createReviews = async (req, res) => {
    const {comment, Rating, idClient} = req.body;
    const newReviews = new reviewsModel({comment, Rating, idClient});
    await newReviews.save()
    res.json({ message: "reviews saved" });
}
 
//Delete
reviewsController.deleteReviews = async (req, res) =>{
    await reviewsModel.findByIdAndDelete(req.params.id)
    res.json({message: "reviews deleted"})
}
 
//Update
reviewsController.updateReviews = async (req, res) =>{
    const {comment, Rating, idClient} = req.body;
    await reviewsController.findByIdAndUpdate(req.params.id, {
        comment,
        Rating,
        idClient
    }, {new: true});
 
res.json({message: "Reviews update"});
};
 
export default reviewsController;
 