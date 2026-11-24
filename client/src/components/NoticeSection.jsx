import { useEffect, useState } from "react";

function NoticeSection() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/notices"
        );

        const data = await response.json();

        if (data.success) {
          setNotices(data.notices);
        }
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) {
    return (
      <section className="notice-section">
        <h2>Notices</h2>
        <p>Loading notices...</p>
      </section>
    );
  }

  return (
    <section className="notice-section">
      <h2>Notices</h2>

      {notices.length === 0 ? (
        <p>No notices available.</p>
      ) : (
        <div className="notice-list">
          {notices.map((notice) => (
            <div className="notice-item" key={notice._id}>
              <h3>{notice.title}</h3>

              <a
                href={`http://localhost:5000${notice.file}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Notice
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default NoticeSection;