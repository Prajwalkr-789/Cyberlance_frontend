import React from 'react'

function Course() {

  const courses = [
    { name: "Computer Science 101", id: "CS101", units: 3, grade: "A", points: 4.0 },
    { name: "Mathematics 201", id: "MATH201", units: 4, grade: "B+", points: 3.3 },
    { name: "Physics 150", id: "PHYS150", units: 3, grade: "A-", points: 3.7 },
    { name: "English 102", id: "ENG102", units: 2, grade: "B", points: 3.0 },
    { name: "Chemistry 120", id: "CHEM120", units: 4, grade: "A", points: 4.0 },
  ]

  return (
    <div className='max-w-7xl mx-auto px-1 sm:px-6 lg:px-8'>
             <h1 className="text-zinc-900 dark:text-white font-bold text-center text-3xl  mb-5">
        COURSES
      </h1>
       <div className="rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-md dark:border-zinc-800 dark:bg-transparent dark:text-slate-50">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">My Courses</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Overview of all enrolled courses and grades</p>
            </div>
            <div className="p-6 pt-0">
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    {
                      ["Course Name", "Course ID", "Units", "Student Grade", "Grade Points"].map((header, index) => (
                        <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 dark:text-slate-400">
                        {header}
                      </th>
                      ))
                    }
                     
                    </tr>
                  </thead>
                  <tbody className="[&_tr:last-child]:border-0">
                    {courses.map((course, index) => (
                      <tr
                        key={index}
                        className="border-b transition-colors hover:bg-slate-50/50 dark:hover:bg-zinc-800/50"
                      >
                        <td className="p-4 align-middle font-medium">{course.name}</td>
                        <td className="p-4 align-middle">{course.id}</td>
                        <td className="p-4 align-middle">{course.units}</td>
                        <td className="p-4 align-middle">
                          <div
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                              course.grade.startsWith("A")
                                ? "bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80"
                                : course.grade.startsWith("B")
                                  ? "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80"
                                  : "text-slate-950 border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:hover:bg-slate-800 dark:hover:text-slate-50"
                            }`}
                          >
                            {course.grade}
                          </div>
                        </td>
                        <td className="p-4 align-middle">{course.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Course
