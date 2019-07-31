require("mongoose-type-url")
const mongoose = require("mongoose");

const { Schema } = mongoose
const { Url } = mongoose.SchemaTypes
// Save a reference to the Schema constructor
// const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const UserSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },

    firstname: {
      type: String,
      required: true
    },

    lastname: {
      type: String,
      required: true
    },

    email: {
      type: String,
      unique: true
    },

    address1: {
      type: String,
      required: true

    },

    address2: {
      type: String,
    },

    city: {
      type: String,
      required: true
    },

    state: {
      type: String,
    },

    zip: {
      type: String,
      required: true
    },

    picture: {
      type: Url,
      default: "https://via.placeholder.com/200x200"
    }

    // post: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Post"
    // }
  });

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Article model
module.exports = User;
