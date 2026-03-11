// import { useEffect, useState } from "react";

// export default function PreviousQuestions() {
//   const [data, setData] = useState([]);
//   const [showPopup, setShowPopup] = useState(true);
//   const [searched, setSearched] = useState(false);

//   const [filters, setFilters] = useState({
//     company: "",
//     role: "",
//     round: ""
//   });

//   const fetchQuestions = async () => {
//     const params = new URLSearchParams(filters);
//     const res = await fetch(`http://localhost:4000/api/questions?${params}`);
//     const json = await res.json();

//     setData(json.data || []);
//     setSearched(true);
//   };

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   return (
//     <div className="h-screen flex bg-[#0b0f14] text-white">

//       {/* Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
//           <div className="relative w-[500px] bg-white text-gray-800 rounded-xl shadow-2xl p-8">

//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-bold text-blue-600 mb-4">
//               Important Information
//             </h2>

//             <p className="text-gray-700 leading-relaxed">
//               These questions are collected from students who have recently attended
//               <b> on-campus placement interviews</b>.
//             </p>

//             <p className="text-gray-700 mt-3">
//               More questions will be added regularly as students share their interview experiences.
//             </p>

//             <p className="text-gray-700 mt-3">
//               You can refer to these questions <b>before sitting for a company or before your interview round</b>.
//             </p>

//             <div className="mt-6 flex justify-end">
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
//               >
//                 Got it
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* Sidebar */}
//       <div className="w-80 border-r border-gray-800 bg-[#0f172a] p-6 sticky top-0 h-screen">

//         <h2 className="text-2xl font-bold text-blue-500 mb-6">
//           Filters
//         </h2>

//         <div className="space-y-5">

//           {/* Company */}
//           <div>
//             <label className="text-sm text-gray-400">Company</label>

//             <select
//               value={filters.company}
//               onChange={(e) =>
//                 setFilters({ ...filters, company: e.target.value })
//               }
//               className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
//             >
//               <option value="">Select Company</option>
//               <option>HotWax Systems</option>
//               <option>Hoonartek</option>
//               <option>Systango</option>
//               <option>Zimetrics Technologies</option>
//               <option>GammaEdge Technologies</option>
//               <option>Jaro Education</option>
//             </select>
//           </div>

//           {/* Role */}
//           <div>
//             <label className="text-sm text-gray-400">Role</label>

//             <select
//               onChange={(e) =>
//                 setFilters({ ...filters, role: e.target.value })
//               }
//               className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
//             >
//               <option value="">Select Role</option>
//               <option>Tech</option>
//               <option>Non-Tech</option>
//             </select>
//           </div>

//           {/* Round */}
//           <div>
//             <label className="text-sm text-gray-400">Round</label>

//             <select
//               onChange={(e) =>
//                 setFilters({ ...filters, round: e.target.value })
//               }
//               className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
//             >
//               <option value="">Select Round</option>
//               <option>Coding</option>
//               <option>Interview</option>
//             </select>
//           </div>

//           {/* Search */}
//           <button
//             onClick={fetchQuestions}
//             className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition py-2 rounded-lg font-medium shadow-md"
//           >
//             Search Questions
//           </button>

//         </div>
//       </div>

//       {/* Questions */}
//       <div className="flex-1 overflow-y-auto p-10">

//         <h1 className="text-3xl font-bold text-blue-500 mb-8">
//           Previous Asked Questions
//         </h1>

//         <div className="space-y-6">

//           {/* No result message */}
//           {searched && data.length === 0 && (
//            <div className="flex justify-center items-center h-[350px]">
//   <div className="text-center bg-[#111827] border border-gray-700 rounded-2xl px-12 py-10 shadow-xl max-w-md">

//     <div className="flex justify-center mb-4">
//       <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
//         <span className="text-2xl">🔍</span>
//       </div>
//     </div>

//     <h2 className="text-2xl font-semibold text-white mb-2">
//       No Results Found
//     </h2>

//     <p className="text-gray-400 text-sm leading-relaxed">
//       We couldn't find any questions for the selected filters.
//     </p>

//     <p className="text-gray-500 text-sm mt-2">
//       Our database is constantly updating. Please check again soon.
//     </p>

//     <div className="mt-6">
//       <button
//         onClick={() => window.location.reload()}
//         className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-sm font-medium shadow-md"
//       >
//         Refresh
//       </button>
//     </div>

//   </div>
// </div>
//           )}

//           {/* Questions list */}
//           {data.map((item) => (
//             <div
//               key={item._id}
//               className="bg-[#111827] border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition shadow-lg"
//             >

//               <div className="flex justify-between items-center mb-3">

//                 <h3 className="text-xl font-semibold text-blue-400">
//                   {item.company}
//                 </h3>

//                 <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">
//                   {item.round}
//                 </span>

//               </div>

//               <p className="text-sm text-gray-400 mb-4">
//                 Role: {item.role} • Asked: {item.timeRange} ago
//               </p>

//               <ul className="list-disc ml-5 space-y-2 text-gray-200">
//                 {item.questions.map((q, i) => (
//                   <li key={i}>{q}</li>
//                 ))}
//               </ul>

//             </div>
//           ))}

//         </div>

//       </div>

//     </div>
//   );
// }



































// import { useEffect, useState } from "react";

// export default function PreviousQuestions() {
//   const [data, setData] = useState([]);
//   const [showPopup, setShowPopup] = useState(true);
//   const [searched, setSearched] = useState(false);

//   const [filters, setFilters] = useState({
//     company: "",
//     role: "",
//     round: ""
//   });

//   const fetchQuestions = async () => {
//     const params = new URLSearchParams(filters);
//     const res = await fetch(`http://localhost:4000/api/questions?${params}`);
//     const json = await res.json();

//     setData(json.data || []);
//     setSearched(true);
//   };

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   return (
//     <div className="h-screen flex bg-[#0b0f14] text-white">

//       {/* Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
//           <div className="relative w-[500px] bg-white text-gray-800 rounded-xl shadow-2xl p-8">

//             <button
//               onClick={() => setShowPopup(false)}
//               className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-bold text-blue-600 mb-4">
//               Important Information
//             </h2>

//             <p className="text-gray-700 leading-relaxed">
//               These questions are collected from students who have recently attended
//               <b> on-campus placement interviews</b>.
//             </p>

//             <p className="text-gray-700 mt-3">
//               More questions will be added regularly as students share their interview experiences.
//             </p>

//             <p className="text-gray-700 mt-3">
//               You can refer to these questions <b>before sitting for a company or before your interview round</b>.
//             </p>

//             <div className="mt-6 flex justify-end">
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
//               >
//                 Got it
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* Sidebar */}
//       <div className="w-80 border-r border-gray-800 bg-[#0f172a] p-6 sticky top-0 h-screen">

//         <h2 className="text-2xl font-bold text-blue-500 mb-6">
//           Filters
//         </h2>

//         <div className="space-y-5">

//           {/* Company */}
//           <div>
//             <label className="text-sm text-gray-400">Company</label>

//             <select
//               value={filters.company}
//               onChange={(e) =>
//                 setFilters({ ...filters, company: e.target.value })
//               }
//               className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
//             >
//               <option value="">Select Company</option>
//               <option>HotWax Systems</option>
//               <option>Hoonartek</option>
//               <option>Systango</option>
//               <option>Zimetrics Technologies</option>
//               <option>GammaEdge Technologies</option>
//               <option>Jaro Education</option>
//             </select>
//           </div>

//           {/* Role */}
//           <div>
//             <label className="text-sm text-gray-400">Role</label>

//             <select
//               onChange={(e) =>
//                 setFilters({ ...filters, role: e.target.value })
//               }
//               className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
//             >
//               <option value="">Select Role</option>
//               <option>Tech</option>
//               <option>Non-Tech</option>
//             </select>
//           </div>

//           {/* Round */}
//           <div>
//             <label className="text-sm text-gray-400">Round</label>

//             <select
//               onChange={(e) =>
//                 setFilters({ ...filters, round: e.target.value })
//               }
//               className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
//             >
//               <option value="">Select Round</option>
//               <option>Coding</option>
//               <option>Interview</option>
//             </select>
//           </div>

//           {/* Search */}
//           <button
//             onClick={fetchQuestions}
//             className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition py-2 rounded-lg font-medium shadow-md"
//           >
//             Search Questions
//           </button>

//         </div>
//       </div>

//       {/* Questions */}
//       <div className="flex-1 overflow-y-auto p-10">

//         <h1 className="text-3xl font-bold text-blue-500 mb-8">
//           Previous Asked Questions
//         </h1>

//         <div className="space-y-6">

//           {/* No result message */}
//           {searched && data.length === 0 && (
//            <div className="flex justify-center items-center h-[350px]">
//   <div className="text-center bg-[#111827] border border-gray-700 rounded-2xl px-12 py-10 shadow-xl max-w-md">

//     <div className="flex justify-center mb-4">
//       <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
//         <span className="text-2xl">🔍</span>
//       </div>
//     </div>

//     <h2 className="text-2xl font-semibold text-white mb-2">
//       No Results Found
//     </h2>

//     <p className="text-gray-400 text-sm leading-relaxed">
//       We couldn't find any questions for the selected filters.
//     </p>

//     <p className="text-gray-500 text-sm mt-2">
//       Our database is constantly updating. Please check again soon.
//     </p>

//     <div className="mt-6">
//       <button
//         onClick={() => window.location.reload()}
//         className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-sm font-medium shadow-md"
//       >
//         Refresh
//       </button>
//     </div>

//   </div>
// </div>
//           )}

//           {/* Questions list */}
//           {data.map((item) => (
//             <div
//               key={item._id}
//               className="bg-[#111827] border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition shadow-lg"
//             >

//               <div className="flex justify-between items-center mb-3">

//                 <h3 className="text-xl font-semibold text-blue-400">
//                   {item.company}
//                 </h3>

//                 <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">
//                   {item.round}
//                 </span>

//               </div>

//               <p className="text-sm text-gray-400 mb-4">
//                 Role: {item.role} • Asked: {item.timeRange} ago
//               </p>

//               <ul className="list-disc ml-5 space-y-2 text-gray-200">
//                 {item.questions.map((q, i) => (
//                   <li key={i}>{q}</li>
//                 ))}
//               </ul>

//             </div>
//           ))}

//         </div>

//       </div>

//     </div>
//   );
// }




import { useEffect, useState , useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function PreviousQuestions() {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(true);
  const [searched, setSearched] = useState(false);
  const { backendUrl } = useContext(AppContext);
  
  const [filters, setFilters] = useState({
    company: "",
    role: "",
    round: ""
  });

  const fetchQuestions = async () => {
    const params = new URLSearchParams(filters);
    const res = await fetch(`${backendUrl}/api/questions?${params}`);
    const json = await res.json();

    setData(json.data || []);
    setSearched(true);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="min-h-screen lg:h-screen flex flex-col lg:flex-row bg-[#020617] text-white">

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
          <div className="relative w-full max-w-lg bg-white text-gray-800 rounded-xl shadow-2xl p-6 sm:p-8">

            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
              Important Information
            </h2>

            <p className="text-gray-700 text-sm sm:text-base">
              These questions are collected from students who attended
              <b> on-campus placement interviews</b>.
            </p>

            <p className="text-gray-700 mt-3 text-sm sm:text-base">
              More questions will be added as students share experiences.
            </p>

            <p className="text-gray-700 mt-3 text-sm sm:text-base">
              Use these questions to prepare before your interview rounds.
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
              >
                Got it
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-full lg:w-80 bg-[#0f172a] border-b lg:border-b-0 lg:border-r border-gray-800 p-6 lg:sticky lg:top-0 lg:h-screen">

        <h2 className="text-xl sm:text-2xl font-bold text-blue-500 mb-6">
          Filters
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">

          {/* Company */}
          <div>
            <label className="text-sm text-gray-400">Company</label>

            <select
              value={filters.company}
              onChange={(e) =>
                setFilters({ ...filters, company: e.target.value })
              }
              className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Company</option>
              <option>HotWax Systems</option>
              <option>Hoonartek</option>
              <option>Systango</option>
              <option>Zimetrics Technologies</option>
              <option>GammaEdge Technologies</option>
              <option>Jaro Education</option>
            </select>
          </div>

          {/* Role */}
          <div>
            <label className="text-sm text-gray-400">Role</label>

            <select
              value={filters.role}
              onChange={(e) =>
                setFilters({ ...filters, role: e.target.value })
              }
              className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Role</option>
              <option>Tech</option>
              <option>Non-Tech</option>
            </select>
          </div>

          {/* Round */}
          <div>
            <label className="text-sm text-gray-400">Round</label>

            <select
              value={filters.round}
              onChange={(e) =>
                setFilters({ ...filters, round: e.target.value })
              }
              className="w-full mt-1 bg-[#020617] border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Round</option>
              <option>Coding</option>
              <option>Interview</option>
            </select>
          </div>

          {/* Search */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={fetchQuestions}
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-lg font-medium shadow-md"
            >
              Search Questions
            </button>
          </div>

        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 lg:overflow-y-auto p-6 sm:p-8 lg:p-10">

        <h1 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-8">
          Previous Asked Questions
        </h1>

        <div className="space-y-6">

          {/* No Results */}
          {searched && data.length === 0 && (
            <div className="flex justify-center items-center h-[300px]">
              <div className="text-center bg-[#111827] border border-gray-700 rounded-2xl px-8 py-10 shadow-xl max-w-md">

                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/30">
                    🔍
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  No Results Found
                </h2>

                <p className="text-gray-400 text-sm">
                  No questions found for selected filters.
                </p>

                <button
                  onClick={() => window.location.reload()}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
                >
                  Refresh
                </button>

              </div>
            </div>
          )}

          {/* Question Cards */}
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-[#0f172a] border border-gray-800 rounded-xl p-5 sm:p-6 hover:border-blue-500 transition shadow-lg"
            >

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-2">

                <h3 className="text-lg sm:text-xl font-semibold text-blue-400">
                  {item.company}
                </h3>

                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full w-fit">
                  {item.round}
                </span>

              </div>

              <p className="text-sm text-gray-400 mb-4">
                Role: {item.role} • Asked: {item.timeRange} ago
              </p>

              <ul className="list-disc ml-5 space-y-2 text-gray-200 text-sm sm:text-base">
                {item.questions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
