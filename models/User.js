import { model, models, Schema } from "mongoose";

const UserScema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  imgUrl: {
    type: String,
    required: [true, "Image URL is required"],
  },
});

const User = models.User || model("User", UserScema);

export default User;
