import React from "react";
import './dashboard.css';
function Dashboard(){
    return(
        <>
      <div className="dashboard-page">
        <div className="sidebar">
            <h2 className="logo">IntelliHire</h2>
<div className="menu">
    <div>🏠 Home</div>
    <div>➕ Post Job</div>
    <div>📄 Applications</div>
    <div>🧠 AI Insights</div>
    <div>⚙️ Settings</div>
    <div>🚪 Logout </div>
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
</div>
      </div>
        </>
    )
}
export default Dashboard;