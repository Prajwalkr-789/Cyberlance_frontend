import { BookOpen, FileText, GraduationCap, Home, X } from 'lucide-react';
import  { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({sidebarOpen,setSidebarOpen}) {
  const [activeSection, setActiveSection] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "cgpa", label: "CGPA", icon: GraduationCap },
    { id: "assignments", label: "Assignments", icon: FileText },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[rgb(0,2,2)] border-r border-zinc-200 dark:border-zinc-800
          transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-6 flex items-center justify-between">
          <h1 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
            Student Portal
          </h1>
          {/* Close button on mobile */}
          <button
            className="lg:hidden p-2 rounded-md text-zinc-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-4 space-y-2 mt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                to={`/pages/${item.id}`}
                key={item.id}
                className={`inline-flex items-center justify-start rounded-md font-medium transition-colors h-10 py-2 px-4 w-full gap-3 ${
                  activeSection === item.id
                    ? "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
                    : "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-zinc-900 dark:hover:text-slate-50 text-zinc-900 dark:text-white"
                }`}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false); // close sidebar on mobile
                }}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
