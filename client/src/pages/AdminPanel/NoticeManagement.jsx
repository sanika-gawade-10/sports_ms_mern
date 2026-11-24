import React, { useState } from "react";
import "../../styles/AdminPanel/NoticeManagement.css";

function NoticeManagement() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !file) {
      setMessage("Please enter a notice title and select a file.");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("file", file);

      const response = await fetch(
        "http://localhost:5000/api/notices",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage("Notice added successfully.");
        setTitle("");
        setFile(null);

        document.getElementById("noticeFile").value = "";
      } else {
        setMessage(data.message || "Failed to add notice.");
      }
    } catch (error) {
      console.error("Error creating notice:", error);
      setMessage("Server error. Please try again.");
    }
  };

  return (
    <div className="notice-management">
      <div className="notice-header">
        <h1>Notice Management</h1>
        <p>Add and manage college notices</p>
      </div>

      <div className="notice-form-card">
        <h2>Add New Notice</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="noticeTitle">
              Notice Title
            </label>

            <input
              type="text"
              id="noticeTitle"
              placeholder="Enter notice title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="noticeFile">
              Notice File
            </label>

            <input
              type="file"
              id="noticeFile"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="notice-submit-btn"
          >
            Add Notice
          </button>
        </form>

        {message && (
          <p className="notice-message">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default NoticeManagement;