
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import "../../styles/AdminPanel/AdminParticipation.css";

const API = "http://localhost:5000/api/participation/all";

const initialFilters = {
  stream: "",
  year: "",
  division: "",
  roll: "",
  sport: "",
  level: "",
  time_filter: ""
};

function AdminParticipation() {
  const [filters, setFilters] = useState(initialFilters);
  const [searchFilters, setSearchFilters] = useState(initialFilters);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchParticipations = async () => {
      try {
        setLoading(true);
        setError("");

        const params = new URLSearchParams();
        Object.entries(searchFilters).forEach(([key, value]) => {
          if (value) params.append(key, value);
        });

        const res = await fetch(`${API}?${params.toString()}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Unable to load records.");

        setRecords(data.participations || []);
      } catch (err) {
        setError(err.message || "Unable to connect to server.");
      } finally {
        setLoading(false);
      }
    };

    fetchParticipations();
  }, [searchFilters]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchFilters({ ...filters });
  };

  const formatDate = (date) =>
    date
      ? new Date(date).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          timeZone: "UTC"
        })
      : "-";

  return (
    <div className="admin-participation">
      <h2>Student Participations</h2>

      <section className="admin-participation-card">
        <form className="admin-participation-filters" onSubmit={handleSearch}>
          <select name="stream" value={filters.stream} onChange={handleChange}>
            <option value="">All Streams</option>
            {["BSc", "BMS", "BCom", "BAF", "BA", "BMMS", "IT"].map(v =>
              <option key={v} value={v}>{v}</option>
            )}
          </select>

          <select name="year" value={filters.year} onChange={handleChange}>
            <option value="">All Years</option>
            {["FY", "SY", "TY"].map(v =>
              <option key={v} value={v}>{v}</option>
            )}
          </select>

          <select name="division" value={filters.division} onChange={handleChange}>
            <option value="">All Divisions</option>
            {["A", "B", "C"].map(v =>
              <option key={v} value={v}>{v}</option>
            )}
          </select>

          <input
            name="roll"
            value={filters.roll}
            onChange={handleChange}
            placeholder="Roll Number"
          />

          <select name="sport" value={filters.sport} onChange={handleChange}>
            <option value="">All Sports</option>
            {["Cricket", "Football", "Kabaddi", "Basketball", "Volleyball", "Athletics"].map(v =>
              <option key={v} value={v}>{v}</option>
            )}
          </select>

          <select name="level" value={filters.level} onChange={handleChange}>
            <option value="">All Levels</option>
            {["College", "State", "District", "Intercollegiate"].map(v =>
              <option key={v} value={v}>{v}</option>
            )}
          </select>

          <select name="time_filter" value={filters.time_filter} onChange={handleChange}>
            <option value="">All Time</option>
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>

          <button type="submit" className="admin-participation-search">
            <Search size={16} />
            Search
          </button>
        </form>
      </section>

      <section className="admin-participation-card">
        <div className="admin-participation-table-wrapper">
          <table className="admin-participation-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll</th>
                <th>Division</th>
                <th>Stream</th>
                <th>Year</th>
                <th>Sport</th>
                <th>Level</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="8" className="admin-participation-empty">
                    Loading participation records...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="8" className="admin-participation-error">{error}</td>
                </tr>
              ) : records.length ? (
                records.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.roll}</td>
                    <td>{item.division}</td>
                    <td>{item.stream}</td>
                    <td>{item.year}</td>
                    <td>{item.sport}</td>
                    <td>{item.level}</td>
                    <td>{formatDate(item.event_date)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="admin-participation-empty">
                    No participation records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default AdminParticipation;
