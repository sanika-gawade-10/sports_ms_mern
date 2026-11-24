
import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    stream: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    division: {
      type: String,
      required: true
    },
    roll: {
      type: String,
      required: true
    },
    sport: {
      type: String,
      required: true
    },
    level: {
      type: String,
      required: true
    },
    event_date: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    images: {
      type: [String],
      default: []
    },
    status: {
      type: String,
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

const Achievement = mongoose.model("Achievement", achievementSchema);

export default Achievement;
