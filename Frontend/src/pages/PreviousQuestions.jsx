import { useEffect, useState } from "react";

export default function PreviousQuestions() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    company: "",
    role: "",
    round: "",
  });

  const fetchQuestions = async () => {
    const params = new URLSearchParams(filters);
    const res = await fetch(
      `http://localhost:4000/api/questions?${params}`
    );
    const json = await res.json();
    setData(json.data || []);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center md:text-left">
        Previous Asked Questions
      </h1>

      {/* Filters Card */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            placeholder="Search by company"
            onChange={(e) =>
              setFilters({ ...filters, company: e.target.value })
            }
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            onChange={(e) =>
              setFilters({ ...filters, role: e.target.value })
            }
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option>Tech</option>
            <option>Non-Tech</option>
          </select>

          <select
            onChange={(e) =>
              setFilters({ ...filters, round: e.target.value })
            }
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Round</option>
            <option>Coding</option>
            <option>Interview</option>
          </select>
        </div>

        <button
          onClick={fetchQuestions}
          className="mt-5 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg"
        >
          Search Questions
        </button>
      </div>

      {/* Questions List */}
      {data.length === 0 ? (
        <p className="text-center text-gray-500">
          No questions found. Try changing filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.company}
                </h3>
                <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {item.round}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-3">
                Role: <span className="font-medium">{item.role}</span> • Asked{" "}
                {item.timeRange} ago
              </p>

              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {item.questions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
