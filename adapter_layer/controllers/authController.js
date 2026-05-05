import * as authAdapter from "../adapters/authAdapter.js";
export const registerStudent = async (req, res) => {
  try {
    const result = await authAdapter.create(req.body);

    res.status(201).json({
      success: true,
      student: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

export const getStudentProfile = async (req, res) => {
  try {
    console.log("Adapter req.params:", req.params);

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Student id is missing from URL"
      });
    }

    const studentProfile = await authAdapter.findById(id);

    res.status(200).json({
      success: true,
      studentProfile
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};