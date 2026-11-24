
import mongoose from "mongoose";

const participationSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    stream: {
      type: String,
      required: true,
      trim: true,
    },

    year: {
      type: String,
      required: true,
      enum: ["FY", "SY", "TY"],
    },

    division: {
      type: String,
      required: true,
      enum: ["A", "B", "C"],
    },

    roll: {
      type: String,
      required: true,
      trim: true,
    },

    sport: {
      type: String,
      required: true,
      trim: true,
    },

    level: {
      type: String,
      required: true,
      enum: ["College", "State", "District", "Intercollegiate"],
    },

    event_date: {
      type: Date,
      required: true,
    },

    isSent: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Participation = mongoose.model(
  "Participation",
  participationSchema
);

export default Participation;
