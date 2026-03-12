import React from "react";
import "./jobdetail.css";
function Jobdetails(){
    return(
       <div className="jobdetail-page-container">

      {/* SIDEBAR */}
      <aside className="jobdetail-sidebar">

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



      {/* MAIN */}
      <main className="jobdetail-main-section">

        {/* NAVBAR */}
        <header className="jobdetail-navbar">

          <h2 className="navbar-page-title">Job Details</h2>

          <div className="navbar-right-section">
            <div className="navbar-notification-icon">🔔</div>
            <div className="navbar-user-avatar">AS</div>
            <div className="navbar-user-name">Alice Smith</div>
          </div>

        </header>



        {/* PAGE CONTENT */}
        <div className="jobdetail-content-section">

          {/* BACK LINK */}
          <div className="back-link">
            ← Back to Job Listings
          </div>


          {/* JOB HEADER CARD */}
          <div className="job-header-card">

            <div className="job-header-left">

              <div className="company-logo">
                🚀
              </div>

              <div className="job-title-section">

                <h2 className="job-title">
                  Senior Full Stack Developer
                </h2>

                <p className="company-name">
                  TechCorp Inc.
                </p>

                <div className="job-meta-info">

                  <span>📍 San Francisco, CA (Hybrid)</span>
                  <span>💼 Full-time</span>
                  <span>💰 $120K – $150K</span>
                  <span>📅 Posted 2 days ago</span>

                </div>

              </div>

            </div>



            {/* ACTION BUTTONS */}
            <div className="job-action-buttons">

              <button className="apply-button">
                Apply Now
              </button>

              <button className="secondary-button">
                Save Job
              </button>

              <button className="secondary-button">
                Share
              </button>

            </div>

          </div>



          {/* MAIN GRID */}
          <div className="jobdetail-main-grid">


            {/* LEFT COLUMN */}
            <div className="jobdetail-left-column">


              {/* DESCRIPTION */}
              <div className="jobdetail-card">

                <h3 className="section-title">
                  📄 Job Description
                </h3>

                <p>
                  We are seeking an experienced Senior Full Stack Developer to join our innovative engineering team.
                  In this role you will design, develop and maintain scalable web applications used by millions of users.
                </p>

                <p>
                  You will work closely with product managers, designers and other engineers to deliver high quality
                  features that delight customers and help scale our platform.
                </p>

              </div>



              {/* RESPONSIBILITIES */}
              <div className="jobdetail-card">

                <h3 className="section-title">
                  ✅ Key Responsibilities
                </h3>

                <ul className="job-list">

                  <li>Design and implement scalable full-stack applications</li>
                  <li>Collaborate with cross-functional teams</li>
                  <li>Write clean, maintainable code</li>
                  <li>Mentor junior developers</li>
                  <li>Participate in code reviews</li>
                  <li>Optimize performance and troubleshoot issues</li>

                </ul>

              </div>



              {/* REQUIREMENTS */}
              <div className="jobdetail-card">

                <h3 className="section-title">
                  🎯 Requirements
                </h3>

                <ul className="job-list">

                  <li>5+ years professional software development experience</li>
                  <li>Strong proficiency in JavaScript, React, Node.js</li>
                  <li>Experience with REST APIs and microservices</li>
                  <li>Experience with SQL and NoSQL databases</li>
                  <li>Experience with cloud platforms (AWS / GCP / Azure)</li>

                </ul>

              </div>

            </div>



            {/* RIGHT COLUMN */}
            <div className="jobdetail-right-column">


              {/* MATCH SCORE */}
              <div className="match-score-card">

                <p className="match-label">
                  Your AI Match Score
                </p>

                <h1 className="match-score">
                  95%
                </h1>

                <p className="match-subtitle">
                  Excellent match for this position
                </p>

              </div>



              {/* JOB OVERVIEW */}
              <div className="job-overview-card">

                <h3>Job Overview</h3>

                <div className="overview-item">
                  <span className="overview-label">Job Type</span>
                  <span>Full-time</span>
                </div>

                <div className="overview-item">
                  <span className="overview-label">Experience</span>
                  <span>Senior Level</span>
                </div>

                <div className="overview-item">
                  <span className="overview-label">Salary</span>
                  <span>$120K – $150K</span>
                </div>

                <div className="overview-item">
                  <span className="overview-label">Location</span>
                  <span>San Francisco, CA</span>
                </div>

                <div className="overview-item">
                  <span className="overview-label">Work Mode</span>
                  <span>Hybrid</span>
                </div>

                <div className="overview-item">
                  <span className="overview-label">Applicants</span>
                  <span>47 candidates</span>
                </div>

              </div>



              {/* COMPANY CARD */}
              <div className="jobdetail-card">

                <h3>About TechCorp Inc.</h3>

                <p>
                  TechCorp is a leading technology company focused on building innovative
                  cloud solutions and developer tools used by millions of users worldwide.
                </p>

              </div>

            </div>


          </div>

        </div>

      </main>

    </div>
    )
}
export default Jobdetails;