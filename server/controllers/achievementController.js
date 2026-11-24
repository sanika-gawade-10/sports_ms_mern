
import Achievement from "../models/Achievement.js";

// Get all achievements of a student
export const getAchievements = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({
        message: "Student name is required."
      });
    }

    const achievements = await Achievement.find({ name }).sort({
      createdAt: -1
    });

    res.status(200).json({ achievements });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new achievement
export const addAchievement = async (req, res) => {
  try {
    const {
      name,
      stream,
      year,
      division,
      roll,
      sport,
      level,
      event_date,
      description
    } = req.body;

    if (
      !name || !stream || !year || !division ||
      !roll || !sport || !level || !event_date ||
      !description
    ) {
      return res.status(400).json({
        message: "Please fill all required fields."
      });
    }

    const images = (req.files || []).map(file => file.filename);

    const achievement = await Achievement.create({
      name,
      stream,
      year,
      division,
      roll,
      sport,
      level,
      event_date,
      description,
      images,
      status: "Pending"
    });

    res.status(201).json({
      message: "Achievement submitted successfully.",
      achievement
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
