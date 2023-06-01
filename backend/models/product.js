import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    min: [0, "Price cannot be less than 0"],
    max: [100000, "price can't exceed than this"],
  },

  // here we have array of images because one product can have multiple images.
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter Category"],
    //enum are the provided value to choose from we can't get other than that categories.
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptop",
        "Accessories",
        "Headphones",
        "Sports",
      ],
      message: "Please select correct category for product",
    },
  },
  seller: {
    type: String,
    required: [true, "Please enter Seller Name"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter Total Stock Available"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
