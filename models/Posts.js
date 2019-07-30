const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const PostsSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    story: {
      type: String,
      required: true
    },
    video: {
      type: Url,
      default: "https://via.placeholder.com/200x200"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  });



  // This creates our model from the above schema, using mongoose's model method
var Posts = mongoose.model("Posts", PostsSchema);

// Export the Note model
module.exports = Posts;
