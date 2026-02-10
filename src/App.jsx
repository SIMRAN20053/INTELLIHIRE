import React from "react";
import{Routes,Route} from"react-router-dom"
import Dashboard from './pages/dashboard'
import Jobdetails from './pages/jobdetail'
import Joblist from './pages/joblist'
import Login from './pages/login'
import Parsed from './pages/parsedresume'
import Signup from './pages/signup'
import Uploadjob from './pages/uploadjob'
import Uploadresume from './pages/uploadresume'
function App(){
  return(
    <Routes>
<Route path="/dashboard" element={<Dashboard />}/>
<Route path="/jobdetail" element={<Jobdetails />}/>
<Route path="/joblist" element={<Joblist />}/>
<Route path="/login" element={<Login/>}/>
<Route path="/parsedresume" element={<Parsed />}/>
<Route path="/signup" element={<Signup />}/>
<Route path="/uploadjob" element={<Uploadjob />}/>
<Route path="/uploadresume" element={<Uploadresume />}/>
    </Routes>
  );
}
export default App;