import mongoose from "mongoose";
import slugify from "slugify";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    images: {
      type: Array,
      default: [],
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.pre("save", function (next) {
  let shortenedName = this.name.slice(0, 40);
  this.slug = slugify(shortenedName, { lower: true });
  next();
});

export default mongoose.model("Product", productSchema);
