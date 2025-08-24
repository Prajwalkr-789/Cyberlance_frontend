import { FileText, GraduationCap, User, Bell, Award, Shield, BookOpen ,Mail, Phone } from "lucide-react"

const DashboardElegant = () => {
  // Example Data (replace with real API later)
  const profile = {
    name: "John Doe",
    id: "2024001",
    phone: "+91 9876543210",
    email: "john@example.com",
  }

  const guardian = {
    name: "Jane Doe",
    phone: "+91 9988776655",
    email: "jane@example.com",
    address: "Bangalore, India",
  }

  const degree = {
    program: "Bachelors",
    discipline: "Computer Science",
    joinDate: "12 Aug 2023",
  }

  const adminNotifications = [
    { task: "Fees Payment", status: "Pending", priority: "high" },
    { task: "Last Date", status: "20 Jan 2024", priority: "medium" },
    { task: "Upload Aadhar Certificate", status: "Not Uploaded", priority: "high" },
    { task: "Pending Status", status: "Clear", priority: "low" },
  ]

  const faculty = {
    name: "Prof. Ramesh",
    email: "ramesh@univ.edu",
    phone: "+91 9090909090",
  }

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="bg-white dark:bg-transparent border-b border-slate-200 dark:border-zinc-700">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extralight text-slate-900 dark:text-white mb-2">
                Good morning, <span className="font-semibold">John Doe</span>
              </h1>
              <p className="text-slate-600 dark:text-zinc-400">Student Dashboard 2024</p>
            </div>
            {/* <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-slate-500 dark:text-slate-400">Student ID</p>
                <p className="font-mono text-lg text-slate-900 dark:text-white">{profile.id}</p>
              </div>
              <div className="w-12 h-12 bg-slate-100 dark:bg-transparent rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Personal & Guardian */}
          <div className="lg:col-span-1 space-y-6">
            {/* Personal Information */}
            <div className="bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-zinc-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-zinc-700">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">Personal Details</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
                    Full Name
                  </label>
                  <p className="text-slate-900 dark:text-white font-medium">{profile.name}</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
                    Phone
                  </label>
                  <p className="text-slate-700 dark:text-slate-300">{profile.phone}</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
                    Email
                  </label>
                  <p className="text-slate-700 dark:text-slate-300">{profile.email}</p>
                </div>
              </div>
            </div>

            {/* Guardian Information */}
            <div className="bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-zinc-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-zinc-700">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">Guardian Contact</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
                    Name
                  </label>
                  <p className="text-slate-900 dark:text-white font-medium">{guardian.name}</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
                    Phone
                  </label>
                  <p className="text-slate-700 dark:text-slate-300">{guardian.phone}</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
                    Email
                  </label>
                  <p className="text-slate-700 dark:text-slate-300">{guardian.email}</p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
                    Address
                  </label>
                  <p className="text-slate-700 dark:text-slate-300">{guardian.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Academic Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Academic Program */}
            <div className="bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-zinc-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-zinc-700">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">Academic Program</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-slate-600 dark:text-slate-400 mx-auto mb-2" />
                    <label className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium block">
                      Degree
                    </label>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{degree.program}</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <BookOpen className="h-8 w-8 text-slate-600 dark:text-slate-400 mx-auto mb-2" />
                    <label className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium block">
                      Field
                    </label>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{degree.discipline}</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                    <Award className="h-8 w-8 text-slate-600 dark:text-slate-400 mx-auto mb-2" />
                    <label className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium block">
                      Started
                    </label>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{degree.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Administrative Tasks */}
            <div className="bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-zinc-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    <h3 className="font-semibold text-slate-900 dark:text-white">Administrative Tasks</h3>
                  </div>
                  <span className="text-xs bg-transparent border border-zinc-700 text-slate-600 dark:text-zinc-400 px-2 py-1 rounded-full">
                    {adminNotifications.length} items
                  </span>
                </div>
              </div>
              <div className="divide-y divide-slate-200 dark:divide-zinc-700">
                {adminNotifications.map((note, index) => (
                  <div key={index} className="px-6 py-4 hover:bg-slate-50 dark:hover:bg-zinc-700/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            note.priority === "high"
                              ? "bg-red-500"
                              : note.priority === "medium"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                          }`}
                        ></div>
                        <span className="font-medium text-slate-900 dark:text-white">{note.task}</span>
                      </div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{note.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Faculty */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-transparent rounded-lg border border-slate-200 dark:border-zinc-700 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-zinc-700">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">Faculty Advisor</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 transparent border border-zinc-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-lg">{faculty.name}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Faculty Advisor</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 dark:bg-transparent rounded-lg flex items-center justify-center">
                      <Mail className="text-slate-600 dark:text-zinc-400"/> 
                      <span > </span>
                    </div>
                    
                    <span className="text-slate-700 dark:text-slate-300">{faculty.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 dark:bg-transparent rounded-lg flex items-center justify-center">
                      <Phone className="text-slate-600 dark:text-zinc-400"/>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{faculty.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardElegant
