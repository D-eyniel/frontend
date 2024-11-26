import React, { useState } from "react";
import "./Admin.css";

function AdminDashboard() {
  const [activePanel, setActivePanel] = useState("Dashboard");

  const handleMenuClick = (panel) => {
    setActivePanel(panel);
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="logo">
          <img src="/cvsu.png" alt="Admin Logo" />
        </div>
        <nav>
          <ul>
            <li
              className={activePanel === "Dashboard" ? "active" : ""}
              onClick={() => handleMenuClick("Dashboard")}
            >
              Dashboard
            </li>
            <li
              className={activePanel === "Overview" ? "active" : ""}
              onClick={() => handleMenuClick("Overview")}
            >
              Students
            </li>
            <li
              className={activePanel === "Users" ? "active" : ""}
              onClick={() => handleMenuClick("Users")}
            >
              Enrollment
            </li>
            <li
              className={activePanel === "Reports" ? "active" : ""}
              onClick={() => handleMenuClick("Reports")}
            >
              Class Schedule
            </li>
            <li
              className={activePanel === "Settings" ? "active" : ""}
              onClick={() => handleMenuClick("Settings")}
            >
              Curriculum
            </li>
          </ul>
        </nav>
        <div className="logout">Log out</div>
      </aside>

      <main className="main-content">
        <section className="panel">
          {activePanel === "Dashboard" && (
            <div>
              <h2>Dashboard</h2>
              <p>Welcome to the main dashboard.</p>
            </div>
          )}
          {activePanel === "Overview" && (
            <div>
              <h2>Students</h2>
              <p>Manage student records.</p>
            </div>
          )}
          {activePanel === "Users" && (
            <div>
              <h2>Enrollment</h2>
              <p>Manage enrolled students.</p>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search enrollment..."
                />
                <select className="filter-dropdown">
                  <option value="all">Filter by All888</option>
                  <option value="name">Filter by Name</option>
                  <option value="course">Filter by Course</option>
                </select>
                <select className="filter-dropdown">
                  <option value="all">Filter by All</option>
                  <option value="Year">Filter by Year Level</option>
                  <option value="regular">Regular</option>
                  <option value="irregular">Irregular</option>
                </select>
              </div>
            </div>
          )}
          {activePanel === "Reports" && (
  <div>
    <h2>Class Schedule</h2>
    <p></p>
    <br></br>
    <form className="class-schedule-form">
      <div className="flex-container">
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            placeholder="Enter course name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="section">Section</label>
          <input
            type="text"
            id="section"
            placeholder="Enter section"
          />
        </div>
        <div className="form-group">
          <label htmlFor="semester">Semester</label>
          <select id="semester">
            <option value="1st">1st Semester</option>
            <option value="2nd">2nd Semester</option>
            <option value="summer">Summer</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="year">Year Level</label>
          <select id="year">
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
        </div>
      </div>
      <button type="submit">Save Schedule</button>
    </form>
  </div>
)}
          {activePanel === "Settings" && (
            <div>
              <h2>Curriculum</h2>
              <p>Manage checklists here.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
