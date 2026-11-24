
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const studentSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxlength: 7
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false
    }
  },
  { timestamps: true }
);

// Hash password before saving
studentSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

// Method for checking password during login
studentSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

const Student = mongoose.model("Student", studentSchema);

export default Student;
