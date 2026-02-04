export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <p>Total Students</p>
          <h2 className="text-2xl font-bold">120</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p>Attendance Today</p>
          <h2 className="text-2xl font-bold">94%</h2>
        </div>
      </div>
    </div>
  );
}
