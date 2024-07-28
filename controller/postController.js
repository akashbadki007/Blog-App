const Post = require("../models/postModel")
exports.createPost = async (req,res) => {

    try {
        const {title,body} = req.body;
        const post =  new Post({title,body});
        const savedPost = await post.save();
        res.json({post:savedPost});
    }

    catch {
        return res.status(500).json({
            error: "Error While getting Post"
        });
    }
}

exports.getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find().populate("comments").exec();
        res.json({
            posts,
        })
    }

    catch {
        return res.status(500).json({
            error: "Error While Fetching Post"
        });
    }
}