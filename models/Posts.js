require("mongoose-type-url")
const mongoose = require("mongoose");

const { Schema } = mongoose
const { Url } = mongoose.SchemaTypes

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
    },
    theUser: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    date: {
      type: Date,
      default: Date.now
    }
  });



  // This creates our model from the above schema, using mongoose's model method
var Posts = mongoose.model("Posts", PostsSchema);

// Export the Note model
module.exports = Posts;
