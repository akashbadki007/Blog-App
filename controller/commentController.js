// import ModelSchema
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

exports.createComment = async (req,res) => {
    
    try {
        const {post,user,body} = req.body;
        console.log("Your Post, User & Body Details Here -->>",post,user,body);

        const comment = new Comment({post,user,body});
        const savedComment = await comment.save();
        // console.log("savedComment : ", savedComment);

        const updatePost = await Post.findByIdAndUpdate(post, {$push : {Comments:savedComment._id}}, {new:true} ).populate("comments").exec();

        res.json({ post:updatePost } )
    }

    catch {
        return res.status(500).json({
            error: "Error While Creating Comment"
        });
    }
}