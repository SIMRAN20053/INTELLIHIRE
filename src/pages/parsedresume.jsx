import React from "react";
import './parsed.css';
function Parsed(){
    return(
        <>
     <div className="parsed-page">
         <div className="sidebar">
            <h1 className="logo">IntelliHire</h1>
<div className="menu">
    <div className="sidebar-item">🏠 Home</div>
    <div className="sidebar-item">➕ Post Job</div>
    <div className="sidebar-item">📄 Applications</div>
    <div className="sidebar-item">🧠 AI Insights</div>
    <div className="sidebar-item">⚙️ Settings</div>
    <div className="sidebar-item">🚪 Logout </div>
</div>
        </div>
        <div className="main">
            <div className="navbar-parsed">
                <div className="navbar">
            <div className="nav-left">
<h3 className="nav1-logo">Parsed Resume Details</h3>
            </div>
<div className="nav-right">
    <div className="bell">🔔</div>
    <div className="avatar">JD</div>
    <div className="username">John Doe</div>
</div>
</div>
            </div>
            <div className="content">
            <div className="parsed-card">
                <div className="parsed-header">
                    <div className="left">
                    <h3>Sarah Johnson</h3>
                    <p>Applied for: Senior Full Stack Developer</p>
                    </div>
                    <div className="header-actions">
                        <button>Download Resume</button>
                         <button>Schedule Interview</button>
                         </div>
                </div>  
                <div className="info">
                <div className="info-item">
                    <p>Email</p>
                    <p>sarah.johnson@email.com</p>
                </div>
                <div className="info-item">
                    <p>Location</p>
                    <p>San Francisco, CA</p>
                </div>
                <div className="info-item">
                    <p>Total Experience</p>
                    <p>8 Years</p>
                </div>
                 <div className="info-item">
                    <p>Phone</p>
                    <p>+1 (555) 123-4567</p>
                </div>
                <div className="info-item">
                    <p>AI Match Score</p>
                    <p>95% Match</p>
                </div>
                <div className="info-item">
                    <p>LinkedIn</p>
                    <p>linkedin.com/in/sarahjohnson</p>
                </div>
                </div>
                <div className="professional-summary">
                    <h3 className="professional-logo">💼Professional Summary</h3>
<p>Experienced Full Stack Developer with 8+ years of expertise in building scalable web applications.Proven track record in leading<br/>
                  development teams and implementing modern technologies including React, Node.js, and cloud infrastructure. Strong problem-solving<br/>
                  skills with a focus on delivering high-quality, maintainable code.  </p>
                </div>
                <div className="technical skills">
                    <h3 className="technical-logo">⚙️Technical Skills</h3>
                    <div className="skill-list">
                        <span className="skill-item">JavaScript</span>
                        <span className="skill-item">React.js</span>
                        <span className="skill-item">HTML</span>
                        <span className="skill-item">CSS</span>
                        <span className="skill-item">Java</span>
                        <span className="skill-item">Springboot</span>
                        <span className="skill-item">TypeScript</span>
                        <span className="skill-item">Python</span>
                        <span className="skill-item">MongoDB</span>
                        <span className="skill-item">PostgreSQL</span>
                        <span className="skill-item">AWS</span>
                    </div>
                </div>
                <div className="work-experience">
                    <h3 className="work-logo">🏢Work Experience</h3>
                </div>
            </div>
        </div>
        </div>
     </div>
        </>
    )
}
export default Parsed;