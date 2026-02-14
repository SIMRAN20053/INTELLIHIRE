import React from "react";
import './dashboard.css';
function Dashboard(){
    return(
        <>
      <div className="dashboard-page">
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
        <div className="navbar">
            <div className="nav-left">
<h3 className="nav-logo">Dashboard</h3>
            </div>
<div className="nav-right">
    <div className="bell">🔔</div>
    <div className="avatar">JD</div>
    <div className="username">John Doe</div>
</div>
</div>
<div className="content">
    <div className="content-cards">
        <div className="card">
         <h4>Total Jobs Posted</h4>
         <span className="num">24</span>
         <p className="card-content">↑ 12% from last month</p>
        </div>
        <div className="card">
            <h4>Total Applicants</h4>
            <span className="num">1,247</span>
            <p className="card-content">↑ 23% from last month</p>
        </div>
        <div className="card">
            <h4>AI Matches</h4>
            <span className="num">386</span>
            <p className="card-content">↑ 45% from last month</p>
        </div>
        <div className="card">
            <h4>Avg Match Score</h4>
            <span className="num">87%</span>
            <p className="card-content">↑ 5% from last month</p>
        </div>
    </div>
<div className="recent-job-postings">
    <div className="header">
        <h2>Recent Job Postings</h2>
        <button className="header-btn">+ New Job</button>
    </div>
    <div className="subtitle">
        <p>Job Title</p>
        <p>Department</p>
        <p>Applicants</p>
        <span className="status">Status</span>
        <p>Posted</p>
    </div>
    <div className="contentjob">
        <p>Senior Full Stack Developer</p>
        <p>Engineering</p>
        <p>47</p>
        <span className="active">Active</span>
        <p>2 days ago</p>
    </div>
    <div className="contentjob">
        <p>Product Manager</p>
        <p>Product</p>
        <p>82</p>
        <span className="active">Active</span>
        <p>5 days ago</p>
    </div>
      <div className="contentjob">
        <p>Product Manager</p>
        <p>Product</p>
        <p>82</p>
        <span className="active">Active</span>
        <p>5 days ago</p>
    </div>
      <div className="contentjob">
        <p>Product Manager</p>
        <p>Product</p>
        <p>82</p>
        <span className="review">Active</span>
        <p>5 days ago</p>
    </div>
     <div className="contentjob">
        <p>UX Designer</p>
        <p>Design</p>
        <p>34</p>
        <span className="review">Review</span>
        <p>1 week ago</p>
    </div>
    <div className="contentjob">
        <p>Data Scientist</p>
        <p>Analytics</p>
        <p>61</p>
        <span className="active">Active</span>
        <p>1 week ago</p>
    </div>
     <div className="contentjob">
        <p>Data Scientist</p>
        <p>Analytics</p>
        <p>61</p>
        <span className="active">Active</span>
        <p>1 week ago</p>
    </div>
       <div className="contentjob">
        <p>Data Scientist</p>
        <p>Analytics</p>
        <p>61</p>
        <span className="active">Active</span>
        <p>1 week ago</p>
    </div>

    <div className="contentjob">
        <p>DevOps Engineer</p>
        <p>Engineering</p>
        <p>28</p>
        <span className="draft">Draft</span>
        <p>2 weeks ago</p>
    </div>
</div>

<div className="top-applicants">
    <div className="header1">
        <h2>Top Applicants This Week</h2>
    </div>
    <div className="subtitle1">
        <p>Candidate Name</p>
        <p>Position Applied</p>
        <p>AI Match Score</p>
        <p>Experience</p>
        <p>Applied Date</p>
    </div>
    <div className="contentapplicants">
        <p>Sarah Johnson</p>
        <p>Senior Full Stack Developer</p>
        <p className="match-score">95%</p>
        <p>8 years</p>
        <p>Dec 20, 2024</p>
    </div>
    <div className="contentapplicants">
        <p>Michael Chen</p>
        <p>Product Manager</p>
        <p className="match-score">92%</p>
        <p>6 years</p>
        <p>Dec 20, 2024</p>
    </div>
      <div className="contentapplicants">
        <p>Emily Rodriguez</p>
        <p>UX Designer</p>
        <p className="match-score">88%</p>
        <p>5 years</p>
        <p>Dec 19, 2024</p>
    </div>
</div>
</div>
</div>
      </div>
        </>
    )
}
export default Dashboard;