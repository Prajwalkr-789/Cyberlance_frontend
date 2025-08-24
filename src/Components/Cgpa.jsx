
function Cgpa() {
  const courses = [
    {
      name: "Computer Science 101",
      id: "CS101",
      units: 3,
      grade: "A",
      points: 4.0,
    },
    {
      name: "Mathematics 201",
      id: "MATH201",
      units: 4,
      grade: "B+",
      points: 3.3,
    },
    { name: "Physics 150", id: "PHYS150", units: 3, grade: "A-", points: 3.7 },
    { name: "English 102", id: "ENG102", units: 2, grade: "B", points: 3.0 },
    { name: "Chemistry 120", id: "CHEM120", units: 4, grade: "A", points: 4.0 },
  ];

  const calculateCGPA = () => {
    const totalPoints = courses.reduce(
      (sum, course) => sum + course.points * course.units,
      0
    );
    const totalUnits = courses.reduce((sum, course) => sum + course.units, 0);
    return (totalPoints / totalUnits).toFixed(2);
  };
  const totalUnits = courses.reduce((sum, course) => sum + course.units, 0);
  return (
    <div>
      <div className="max-w-md mx-auto">
         <h1 className="text-zinc-900 dark:text-white font-bold  text-3xl text-center mb-4">
        CGPA Calculator
      </h1>
        <div className="rounded-2xl border border-zinc-200 bg-white text-slate-950 shadow-md dark:border-zinc-800 dark:bg-transparent dark:text-slate-50 text-center">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Current CGPA
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Cumulative Grade Point Average
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="text-6xl font-bold text-zinc-600 dark:text-white mb-4">
              {calculateCGPA()}
            </div>
            <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <p>Total Units Completed: {totalUnits}</p>
              <p>Total Courses: {courses.length}</p>
              <p>Academic Standing: Excellent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cgpa;
