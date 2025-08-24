import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Course from './Components/Course';
import Assignments from './Components/Assignments';
import Cgpa from './Components/Cgpa';
import { useState } from 'react';
import Homepage from './Components/Homepage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const PortalLayout = () => (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-6 overflow-y-auto dark:bg-black">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<Course />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="cgpa" element={<Cgpa />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </div>
  );

  return (
    <Router>
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} setSidebarOpen={sidebarOpen} />

      <Routes>        
        <Route path="/" element={<Homepage />} />

        <Route path="/pages/*" element={<PortalLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
