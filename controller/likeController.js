const Post = require("../models/likeModel");
const Like = require("../models/likeModel");

exports.likePost = async (req,res) => {

    try {
        const {post,user} = req.body;
        const like =  new Like({post,user})
        const savedLike = await like.save();

        const updatePost = await Post.findByIdAndUpdate(post, {$push: {likes:savedLike._id}}, {new:true}).populate("likes").exec() ;

        res.json({post:updatePost})
    }

    catch {
        return res.status(500).json({
            error: "Error While geting Post"
        });
    }
}

exports.unlikePost = async(req,res) => {

    try {
        const {post,like} = req.body;
        const deleteLike = await Like.findByIdAndUpdate({post:post,_id:like});
        const updatePost = await Post.findByIdAndUpdate(post, {$pull: {likes:deleteLike._id}},{new:true});

        res.json({post:updatePost})
    }

    catch {
        return res.status(500).json({
            error: "Error While Fetching Post"
        });
    }
}