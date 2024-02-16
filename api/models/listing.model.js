import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    address: {
      type: "string",
      required: true,
    },
    regularPrice: {
      type: "Number",
      required: true,
    },
    discountprice: {
      type: "Number",
      required: true,
    },
    bathrooms: {
      type: "Number",
      required: true,
    },
    bedrooms: {
      type: "Number",
      required: true,
    },
    furnished: {
      type: "Boolean",
      required: true,
    },
    parking: {
      type: "Boolean",
      required: true,
    },
    type: {
      type: "string",
      required: true,
    },
    offer: {
      type: "Boolean",
      required: true,
    },
    imageUrls: {
      type: "Array",
      required: true,
    },
    userRef: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
