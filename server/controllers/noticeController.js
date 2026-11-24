import Notice from "../models/Notice.js";

// GET all notices
export const getNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      notices,
    });
  } catch (error) {
    console.error("Error fetching notices:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch notices",
    });
  }
};


// CREATE a notice
export const createNotice = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Notice title is required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Notice file is required",
      });
    }

    const notice = await Notice.create({
      title,
      file: `/uploads/notices/${req.file.filename}`,
    });

    res.status(201).json({
      success: true,
      message: "Notice created successfully",
      notice,
    });
  } catch (error) {
    console.error("Error creating notice:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create notice",
    });
  }
};


// DELETE a notice
export const deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;

    const notice = await Notice.findByIdAndDelete(id);

    if (!notice) {
      return res.status(404).json({
        success: false,
        message: "Notice not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Notice deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting notice:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete notice",
    });
  }
};