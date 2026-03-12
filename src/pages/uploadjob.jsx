import React from "react";
import './uploadjob.css';
function Uploadjob(){
    return(
    <div className="post-job-page-container">

      <aside className="post-job-sidebar">
        <h1 className="sidebar-logo-text">IntelliHire</h1>

        <nav className="sidebar-navigation-menu">
          <div className="sidebar-navigation-item">🏠 Home</div>
          <div className="sidebar-navigation-item sidebar-active-item">➕ Post Job</div>
          <div className="sidebar-navigation-item">📄 Applications</div>
          <div className="sidebar-navigation-item">🧠 AI Insights</div>
          <div className="sidebar-navigation-item">⚙️ Settings</div>
          <div className="sidebar-navigation-item">🚪 Logout</div>
        </nav>
      </aside>
      <main className="post-job-main-content">
        <header className="post-job-top-navbar">

          <div className="navbar-left-section">
            <h2 className="navbar-page-title">Post New Job</h2>
          </div>

          <div className="navbar-right-section">
            <div className="navbar-notification-icon">🔔</div>
            <div className="navbar-user-avatar">JD</div>
            <div className="navbar-user-name">John Doe</div>
          </div>

        </header>
        <div className="post-job-page-content">

          <section className="create-job-header-section">
            <h1 className="create-job-heading-text">Create Job Posting</h1>
            <p className="create-job-description-text">
              Fill in the details below to post a new job opening. Our AI will help match the best candidates.
            </p>
          </section>
          <section className="ai-matching-information-box">
            <h3 className="ai-matching-title">💡 AI-Powered Matching</h3>
            <p className="ai-matching-description">
              Our AI will automatically analyze your job posting and match it with the most qualified candidates based on skills, experience, and profile compatibility.
            </p>
          </section>
          <section className="job-form-card-section">

            <div className="form-card-header">
              <h3 className="form-card-title">📄 Basic Information</h3>
            </div>

            <div className="form-grid-two-column">

              <div className="form-field-group full-width-field">
                <label className="form-field-label">Job Title *</label>
                <input className="form-input-field" placeholder="e.g., Senior Full Stack Developer" />
              </div>

              <div className="form-field-group">
                <label className="form-field-label">Department *</label>
                <select className="form-select-field">
                  <option>Select Department</option>
                </select>
              </div>

              <div className="form-field-group">
                <label className="form-field-label">Experience Level *</label>
                <select className="form-select-field">
                  <option>Select Level</option>
                </select>
              </div>

              <div className="form-field-group">
                <label className="form-field-label">Employment Type *</label>
                <select className="form-select-field">
                  <option>Select Type</option>
                </select>
              </div>

              <div className="form-field-group">
                <label className="form-field-label">Work Location *</label>
                <select className="form-select-field">
                  <option>Select Location Type</option>
                </select>
              </div>

            </div>

          </section>
          <section className="job-form-card-section">

            <div className="form-card-header">
              <h3 className="form-card-title">📍 Location & Compensation</h3>
            </div>

            <div className="form-grid-two-column">

              <div className="form-field-group">
                <label className="form-field-label">City *</label>
                <input className="form-input-field" placeholder="e.g., San Francisco" />
              </div>

              <div className="form-field-group">
                <label className="form-field-label">State / Province *</label>
                <input className="form-input-field" placeholder="e.g., California" />
              </div>

              <div className="form-field-group">
                <label className="form-field-label">Minimum Salary ($) *</label>
                <input className="form-input-field" placeholder="e.g., 100000" />
              </div>

              <div className="form-field-group">
                <label className="form-field-label">Maximum Salary ($) *</label>
                <input className="form-input-field" placeholder="e.g., 150000" />
              </div>

            </div>


            <div className="salary-display-options">
              <label className="radio-option">
                <input type="radio" name="salaryDisplay" />
                Show salary range
              </label>

              <label className="radio-option">
                <input type="radio" name="salaryDisplay" />
                Hide salary range
              </label>
            </div>

          </section>
          <section className="job-form-card-section">

            <div className="form-card-header">
              <h3 className="form-card-title">📝 Job Details</h3>
            </div>

            <div className="form-field-group">
              <label className="form-field-label">Job Description *</label>
              <textarea
                className="form-textarea-field"
                placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
              />
            </div>

            <div className="form-field-group">
              <label className="form-field-label">Key Responsibilities *</label>
              <textarea
                className="form-textarea-field"
                placeholder="List the main responsibilities for this role..."
              />
            </div>

          </section>
          <section className="job-form-card-section">

            <div className="form-card-header">
              <h3 className="form-card-title">⚙ Required Skills</h3>
            </div>

            <div className="skills-input-container">

              <input
                className="skills-input-field"
                placeholder="Type a skill and click Add (e.g., React, Python, AWS)"
              />

              <button className="add-skill-button">+ Add Skill</button>

            </div>

            <div className="skills-tag-container">
              <span className="skill-tag-item">JavaScript ✕</span>
              <span className="skill-tag-item">React.js ✕</span>
              <span className="skill-tag-item">Node.js ✕</span>
            </div>

          </section>
          <section className="job-form-card-section">

            <div className="form-card-header">
              <h3 className="form-card-title">🎁 Benefits & Perks</h3>
            </div>

            <div className="benefits-checkbox-container">

              <label className="benefit-option">
                <input type="checkbox" />
                Health Insurance
              </label>

              <label className="benefit-option">
                <input type="checkbox" />
                Dental & Vision Insurance
              </label>

              <label className="benefit-option">
                <input type="checkbox" />
                401(k) Matching
              </label>

              <label className="benefit-option">
                <input type="checkbox" />
                Flexible Work Hours
              </label>

              <label className="benefit-option">
                <input type="checkbox" />
                Remote Work Options
              </label>

              <label className="benefit-option">
                <input type="checkbox" />
                Professional Development Budget
              </label>

              <label className="benefit-option">
                <input type="checkbox" />
                Stock Options / Equity
              </label>

              <label className="benefit-option">
                <input type="checkbox" />
                Unlimited PTO
              </label>

            </div>

            <div className="form-field-group">
              <label className="form-field-label">Additional Benefits (Optional)</label>
              <textarea
                className="form-textarea-field"
                placeholder="Describe any other benefits or perks not listed above..."
              />
            </div>

          </section>
          <section className="job-form-footer-actions">

            <button className="secondary-button">Save as Draft</button>

            <button className="secondary-button">Preview</button>

            <button className="primary-button">Publish Job</button>

          </section>


        </div>

      </main>

    </div>
    )
}
export default Uploadjob;