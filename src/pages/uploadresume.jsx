import React from "react";
import "./uploadresume.css";
function Uploadresume(){
    return(
       <div className="upload-resume-page-container">
      <aside className="upload-resume-sidebar">

        <h1 className="sidebar-logo-text">IntelliHire</h1>

        <nav className="sidebar-navigation-menu">
          <div className="sidebar-navigation-item">🏠 Home</div>
          <div className="sidebar-navigation-item">📄 My Applications</div>
          <div className="sidebar-navigation-item sidebar-active-item">📁 Resume Upload</div>
          <div className="sidebar-navigation-item">🎯 AI Match Results</div>
          <div className="sidebar-navigation-item">⚙ Settings</div>
          <div className="sidebar-navigation-item">🚪 Logout</div>
        </nav>

      </aside>

      <main className="upload-resume-main-section">

        <header className="upload-resume-navbar">

          <div className="navbar-left-section">
            <h2 className="navbar-page-title">Upload Resume</h2>
          </div>

          <div className="navbar-right-section">
            <div className="navbar-notification-icon">🔔</div>
            <div className="navbar-user-avatar">AS</div>
            <div className="navbar-user-name">Alice Smith</div>
          </div>

        </header>



        <div className="upload-resume-page-content">


          <section className="resume-upload-main-card">

            <h2 className="resume-upload-title">Upload Your Resume</h2>

            <p className="resume-upload-subtitle">
              Let our AI analyze your resume and match you with the perfect opportunities
            </p>


            <div className="resume-drag-drop-area">

              <div className="upload-icon-circle">📄</div>

              <h3 className="drag-drop-text">
                Drag & Drop Your Resume Here
              </h3>

              <p className="drag-drop-subtext">
                or click to browse from your computer
              </p>

              <button className="select-file-button">
                Select File
              </button>

            </div>

          </section>



          <section className="file-requirements-card">

            <h3 className="requirements-title">📋 File Requirements</h3>

            <ul className="requirements-list">

              <li>✔ Accepted formats: PDF, DOC, DOCX</li>
              <li>✔ Maximum file size: 5MB</li>
              <li>✔ Clear, readable text (avoid scanned images)</li>
              <li>✔ Include contact information and work history</li>
              <li>✔ One file per upload</li>

            </ul>

          </section>



          <section className="resume-feature-highlights">

            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h4>AI Analysis</h4>
              <p>Our AI extracts and analyzes your skills and experience</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>Smart Matching</h4>
              <p>Get matched with jobs that fit your profile perfectly</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Instant Results</h4>
              <p>Receive your match score and recommendations instantly</p>
            </div>

          </section>

        </div>

      </main>

    </div>
    )
}
export default Uploadresume;