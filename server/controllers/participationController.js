
import mongoose from "mongoose";
import Participation from "../models/Participation.js";
import Student from "../models/Student.js";

// ADD PARTICIPATION
export const addParticipation = async (req, res) => {
  try {
    const {
      studentId, name, stream, year, division,
      roll, sport, level, event_date,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(studentId)) {
      return res.status(400).json({ message: "Invalid student ID." });
    }

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    if (!name || !stream || !year || !division || !roll ||
        !sport || !level || !event_date) {
      return res.status(400).json({
        message: "Please fill in all participation details.",
      });
    }

    const eventDate = new Date(`${event_date}T00:00:00.000Z`);

    if (Number.isNaN(eventDate.getTime()) || eventDate > new Date()) {
      return res.status(400).json({
        message: "Please enter a valid past or present event date.",
      });
    }

    const participation = await Participation.create({
      student: student._id,
      name: student.name,
      stream,
      year,
      division,
      roll,
      sport,
      level,
      event_date: eventDate,
      isSent: true,
    });

    return res.status(201).json({
      message: "Participation submitted successfully!",
      participation,
    });
  } catch (error) {
    console.error("Add Participation Error:", error);
    return res.status(500).json({
      message: "Unable to submit participation details.",
    });
  }
};

// GET STUDENT PARTICIPATIONS
export const getMyParticipations = async (req, res) => {
  try {
    const { studentId } = req.query;

    if (!mongoose.Types.ObjectId.isValid(studentId)) {
      return res.status(400).json({ message: "Invalid student ID." });
    }

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    const participations = await Participation.find({
      student: student._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Participation records fetched successfully.",
      participations,
    });
  } catch (error) {
    console.error("Fetch Participation Error:", error);
    return res.status(500).json({
      message: "Unable to fetch participation records.",
    });
  }
};

// GET ALL PARTICIPATIONS (ADMIN)
export const getAllParticipations = async (req, res) => {
  try {
    const { stream, year, division, roll, sport, level, time_filter } = req.query;
    const filter = {};

    if (stream) filter.stream = stream;
    if (year) filter.year = year;
    if (division) filter.division = division;
    if (roll) filter.roll = { $regex: roll, $options: "i" };
    if (sport) filter.sport = sport;
    if (level) filter.level = level;

    const now = new Date();
    let startDate;

    if (time_filter === "day") {
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (time_filter === "week") {
      startDate = new Date(now);
      startDate.setHours(0, 0, 0, 0);
      startDate.setDate(startDate.getDate() - ((startDate.getDay() + 6) % 7));
    } else if (time_filter === "month") {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    } else if (time_filter === "year") {
      startDate = new Date(now.getFullYear(), 0, 1);
    }

    if (startDate) {
      filter.event_date = { $gte: startDate, $lte: now };
    }

    const participations = await Participation.find(filter)
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Participation records fetched successfully.",
      participations,
    });
  } catch (error) {
    console.error("Fetch All Participations Error:", error);
    return res.status(500).json({
      message: "Unable to fetch participation records.",
    });
  }
};
