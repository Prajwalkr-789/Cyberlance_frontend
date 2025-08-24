import { Book, FileText, BarChart3, Bell, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export default function StudentPortalHomepage() {
  const quickAccessCards = [
    {
      title: "Courses & Resources",
      description: "Access your enrolled courses and learning materials",
      icon: Book,
      href: "/courses",
    },
    {
      title: "Assignments & Exams",
      description: "View upcoming assignments and exam schedules",
      icon: FileText,
      href: "/assignments",
    },
    {
      title: "Grades & Progress",
      description: "Track your academic performance and progress",
      icon: BarChart3,
      href: "/grades",
    },
    {
      title: "Notices & Announcements",
      description: "Stay updated with important announcements",
      icon: Bell,
      href: "/notices",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Welcome to Student Portal</h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Your comprehensive academic hub for courses, assignments, grades, and campus updates. Everything you need
              for academic success in one place.
            </p>
          </div>

          <Link to="/pages/dashboard" className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 text-lg font-semibold rounded-xl bg-zinc-900 text-zinc-100 dark:bg-zinc-100  hover:bg-zinc-800 dark:text-zinc-800 transition-colors duration-200">
              Get Started
            </button>

          </Link>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          {/* <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Features</h2>
            <p className="text-gray-600 dark:text-gray-400">Access all your academic essentials in one place.</p>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <div
                  key={index}
                  className="group cursor-pointer rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-transparent border-gray-200 dark:border-gray-800"
                >
                  <div className="p-6 text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 rounded-xl bg-gray-100 dark:bg-zinc-800 group-hover:bg-zinc-700 group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold group-hover:text-zinc-600 dark:group-hover:text-white transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <footer className="mt-12 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-lg font-semibold mb-3">Student Portal</h2>
          <p className="text-sm leading-relaxed">
            Your one-stop platform for courses, assignments, grades, and campus updates.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/pages/dashboard" className="hover:text-blue-500">Dashboard</a></li>
            <li><a href="/pages/courses" className="hover:text-blue-500">Courses</a></li>
            <li><a href="/pages/assignments" className="hover:text-blue-500">Assignments</a></li>
            <li><a href="/pages/cgpa" className="hover:text-blue-500">CGPA Tracker</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Mail size={16} /> support@university.edu</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> Bengaluru, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()}University. All Rights Reserved.
      </div>
    </footer>
    </div>
  )
}
