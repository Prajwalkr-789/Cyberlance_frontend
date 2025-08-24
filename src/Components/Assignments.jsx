import { useState } from "react";

const assignments = [
  {
    title: "Data Structures Project",
    status: "Completed",
    dueDate: "2024-01-15",
    course: "CS101",
  },
  {
    title: "Calculus Problem Set 5",
    status: "Ongoing",
    dueDate: "2024-01-20",
    course: "MATH201",
  },
  {
    title: "Physics Lab Report",
    status: "Completed",
    dueDate: "2024-01-12",
    course: "PHYS150",
  },
  {
    title: "Essay on Shakespeare",
    status: "Ongoing",
    dueDate: "2024-01-25",
    course: "ENG102",
  },
  {
    title: "Chemical Reactions Quiz",
    status: "Ongoing",
    dueDate: "2024-01-18",
    course: "CHEM120",
  },
];
function Assignments() {
  const [assignmentFilter, setAssignmentFilter] = useState("all");
  const [assignmentSort, setAssignmentSort] = useState("dueDate");

  const filteredAssignments = assignments.filter((assignment) => {
    if (assignmentFilter === "all") return true;
    return assignment.status.toLowerCase() === assignmentFilter;
  });
  const sortedAssignments = [...filteredAssignments].sort((a, b) => {
    if (assignmentSort === "dueDate") {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    if (assignmentSort === "course") {
      return a.course.localeCompare(b.course);
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <div>
      <div className="space-y-6 max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
           <h1 className="text-zinc-900 dark:text-white font-bold text-center text-3xl  mb-5">
        ASSIGNMENTS
      </h1>
        <div className="rounded-xl border border-zinc-200 bg-white text-slate-950 shadow-md dark:border-zinc-800 dark:bg-transparent dark:text-slate-50">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Assignments
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Manage and track your assignments
            </p>
            <div className="flex gap-4 mt-4">
              <div className="w-40">
                <select
                  value={assignmentFilter}
                  onChange={(e) => setAssignmentFilter(e.target.value)}
                  className="block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-50 dark:focus:ring-slate-300"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="ongoing">Ongoing</option>
                </select>
              </div>

              <div className="relative w-40">
                <select
                  value={assignmentSort}
                  onChange={(e) => setAssignmentSort(e.target.value)}
                  className="block w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-slate-50 dark:focus:ring-slate-300"
                >
                  <option value="dueDate">Due Date</option>
                  <option value="course">Course</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedAssignments.map((assignment, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-zinc-200 bg-white text-slate-950 shadow-sm dark:border-zinc-800 dark:bg-transparent dark:text-slate-50"
                >
                  <div className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">{assignment.title}</h3>
                      <div className="flex justify-between items-center">
                        <div
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                            assignment.status === "Completed"
                              ? "bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80"
                              : "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80"
                          }`}
                        >
                          {assignment.status}
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {assignment.course}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Due: {assignment.dueDate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
