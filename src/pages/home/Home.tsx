import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-teal-700 text-white flex flex-col">
      <header className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SmartAttend</h1>
        <Link to="/login" className="bg-white text-teal-600 px-4 py-2 rounded">
          Login
        </Link>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl font-bold mb-4">
          Smart School Attendance System
        </h2>
        <p className="max-w-xl mb-8">
          QR-based attendance, analytics, student & parent portals.
        </p>

        <Link
          to="/login"
          className="bg-white text-teal-600 px-6 py-3 rounded font-semibold"
        >
          Get Started
        </Link>
      </main>
    </div>
  );
}
