import React from "react";
import "./joblist.css";
function Joblist(){
    return(
       <div className="joblist-page-container">

      <aside className="joblist-sidebar">

        <h1 className="sidebar-logo-text">IntelliHire</h1>

        <nav className="sidebar-navigation-menu">
          <div className="sidebar-navigation-item sidebar-active-item">🏠 Home</div>
          <div className="sidebar-navigation-item">📄 My Applications</div>
          <div className="sidebar-navigation-item">📁 Resume Upload</div>
          <div className="sidebar-navigation-item">🎯 AI Match Results</div>
          <div className="sidebar-navigation-item">⚙ Settings</div>
          <div className="sidebar-navigation-item">🚪 Logout</div>
        </nav>

      </aside>



      <main className="joblist-main-section">

        <header className="joblist-navbar">

          <div className="navbar-left-section">
            <h2 className="navbar-page-title">Job Listings</h2>
          </div>

          <div className="navbar-right-section">
            <div className="navbar-notification-icon">🔔</div>
            <div className="navbar-user-avatar">AS</div>
            <div className="navbar-user-name">Alice Smith</div>
          </div>

        </header>
        <div className="joblist-content-section">

          <div className="job-search-container">

            <input
              className="job-search-input"
              placeholder="Search for job titles, keywords, or companies..."
            />

            <button className="job-search-button">
              🔍 Search
            </button>

          </div>
          <div className="job-filter-chips">

            <span className="filter-chip active-chip">All Jobs</span>
            <span className="filter-chip">Full-time</span>
            <span className="filter-chip">Remote</span>
            <span className="filter-chip">Senior Level</span>
            <span className="filter-chip">Engineering</span>
            <span className="filter-chip">$100k+</span>

          </div>
          <div className="job-results-header">

            <h3>124 Jobs Found</h3>

            <select className="job-sort-dropdown">
              <option>Best Match</option>
              <option>Most Recent</option>
              <option>Salary</option>
            </select>

          </div>
          <div className="job-cards-container">
                        <div className="job-card">

              <div className="job-card-header">

                <div className="company-logo">🚀</div>

                <div className="job-title-section">
                  <h3>Senior Full Stack Developer</h3>
                  <p className="company-name">TechCorp Inc.</p>

                  <div className="job-meta-info">
                    <span>📍 San Francisco, CA</span>
                    <span>💼 Full-time</span>
                    <span>💰 $120K - $150K</span>
                    <span>🌐 Hybrid</span>
                  </div>
                </div>

                <div className="job-posted-date">2 days ago</div>

              </div>


              <p className="job-description">
                We are seeking an experienced Senior Full Stack Developer to join our innovative
                engineering team. You'll work with React, Node.js, and cloud technologies to build
                scalable applications that serve millions of users.
              </p>
              <div className="job-skills-tags">

                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">MongoDB</span>

              </div>
              <div className="job-card-footer">

                <span className="match-score">95% Match</span>

                <div className="job-actions">
                  <button className="apply-button">Apply Now</button>
                  <button className="save-button">Save</button>
                </div>

              </div>

            </div>
            <div className="job-card">

              <div className="job-card-header">

                <div className="company-logo">💼</div>

                <div className="job-title-section">
                  <h3>Frontend Developer</h3>
                  <p className="company-name">Digital Solutions Co.</p>

                  <div className="job-meta-info">
                    <span>🌍 Remote</span>
                    <span>💼 Full-time</span>
                    <span>💰 $100K - $130K</span>
                  </div>
                </div>

                <div className="job-posted-date">5 days ago</div>

              </div>


              <p className="job-description">
                Join our team to create beautiful responsive interfaces using modern frontend
                technologies and help build products used by thousands of customers daily.
              </p>


              <div className="job-skills-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">Figma</span>
              </div>


              <div className="job-card-footer">

                <span className="match-score">88% Match</span>

                <div className="job-actions">
                  <button className="apply-button">Apply Now</button>
                  <button className="save-button">Save</button>
                </div>

              </div>

            </div>


          </div>

        </div>

      </main>

    </div>
    )
}
export default Joblist;