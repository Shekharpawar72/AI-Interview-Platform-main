// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import FeedbackForm from './FeedbackForm';

// export default function Result() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { feedback } = location.state || { feedback: null };
 
//   if (!feedback) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">Analysis Failed</h1>
//         <p className="text-gray-600 mb-8">We couldn't retrieve your interview feedback. Please try again.</p>
//         <button
//           onClick={() => navigate('/')}
//           className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//         >
//           Go Home
//         </button>
//       </div>
//     );
//   }

//   const getScoreColor = (score) => {
//     if (score >= 80) return 'text-green-500';
//     if (score >= 50) return 'text-yellow-500';
//     return 'text-red-500';
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Interview Performance Review</h1>
//         <p className="text-gray-500 mb-6">Here is a detailed breakdown of your performance.</p>

//         {/* Overall Score */}
//         <div className="text-center bg-blue-50 rounded-xl p-6 mb-8">
//           <p className="text-lg font-semibold text-blue-800">Overall Score</p>
//           <p className={`text-7xl font-bold ${getScoreColor(feedback.overallScore)}`}>
//             {feedback.overallScore}<span className="text-3xl text-gray-400">/100</span>
//           </p>
//           <p className="text-gray-700 mt-4 max-w-2xl mx-auto">{feedback.overallFeedback}</p>
//         </div>

//         {/* Strengths and Improvements */}
//         <div className="grid md:grid-cols-2 gap-6 mb-8">
//           <div className="bg-green-50 p-4 rounded-lg">
//             <h2 className="text-xl font-semibold text-green-800 mb-3">✅ Strengths</h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700">
//               {feedback.strengths.map((item, index) => <li key={index}>{item}</li>)}
//             </ul>
//           </div>
//           <div className="bg-yellow-50 p-4 rounded-lg">
//             <h2 className="text-xl font-semibold text-yellow-800 mb-3">💡 Areas for Improvement</h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700">
//               {feedback.areasForImprovement.map((item, index) => <li key={index}>{item}</li>)}
//             </ul>
//           </div>
//         </div>

//         {/* Question Breakdown */}
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Question-by-Question Analysis</h2>
//           <div className="space-y-6">
//             {feedback.questionBreakdown.map((item, index) => (
//               <div key={index} className="border border-gray-200 rounded-lg p-4">
//                 <div className="flex justify-between items-start mb-2">
//                   <p className="font-semibold text-gray-700 w-5/6">{index + 1}. {item.question}</p>
//                   <p className={`text-xl font-bold ${getScoreColor(item.score)}`}>{item.score}</p>
//                 </div>
//                 <p className="text-sm text-gray-500 bg-gray-50 p-2 rounded mb-3">
//                   <span className="font-semibold">Your Answer:</span> "{item.answer}"
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-semibold">Feedback:</span> {item.feedback}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="text-center mt-8">
//             <button
//                 onClick={() => navigate('/feedback')} // Navigate to home or another interview setup page
//                 className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//             >
//                 Try Another Interview
//             </button>
//         </div>
//       </div>
//     </div>
//   );
// }





///////  set 1 

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function Result() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { feedback } = location.state || { feedback: null };

//   if (!feedback) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-3">Analysis Failed</h1>
//           <p className="text-gray-400 mb-6">
//             Unable to retrieve interview feedback.
//           </p>

//           <button
//             onClick={() => navigate("/")}
//             className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
//           >
//             Go Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const getScoreColor = (score) => {
//     if (score >= 80) return "text-green-400";
//     if (score >= 50) return "text-yellow-400";
//     return "text-red-400";
//   };

//   const radius = 85;
//   const circumference = 2 * Math.PI * radius;
//   const offset =
//     circumference - (feedback.overallScore / 100) * circumference;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a] text-white p-6">

//       <div className="max-w-6xl mx-auto">

//         {/* Header */}

//         <div className="mb-10">
//           <h1 className="text-4xl font-bold">
//             AI Interview Analysis
//           </h1>
//           <p className="text-gray-400 mt-2">
//             Detailed insights generated by AI based on your responses.
//           </p>
//         </div>

//         {/* Score + Stats */}

//         <div className="grid md:grid-cols-3 gap-6 mb-12">

//           {/* Score Circle */}

//           <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center">

//             <p className="text-gray-400 mb-4">Overall Score</p>

//             <div className="relative w-48 h-48">

//               <svg width="200" height="200" className="-rotate-90">

//                 <circle
//                   cx="100"
//                   cy="100"
//                   r={radius}
//                   stroke="rgba(255,255,255,0.1)"
//                   strokeWidth="10"
//                   fill="transparent"
//                 />

//                 <circle
//                   cx="100"
//                   cy="100"
//                   r={radius}
//                   stroke="url(#gradient)"
//                   strokeWidth="10"
//                   fill="transparent"
//                   strokeDasharray={circumference}
//                   strokeDashoffset={offset}
//                   strokeLinecap="round"
//                   className="transition-all duration-1000"
//                 />

//                 <defs>
//                   <linearGradient id="gradient">
//                     <stop offset="0%" stopColor="#3b82f6"/>
//                     <stop offset="100%" stopColor="#a855f7"/>
//                   </linearGradient>
//                 </defs>

//               </svg>

//               <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
//                 {feedback.overallScore}
//               </div>

//             </div>

//           </div>

//           {/* Strengths */}

//           <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">

//             <h2 className="text-lg font-semibold text-green-400 mb-3">
//               Strengths
//             </h2>

//             <ul className="space-y-2 text-gray-300 text-sm">
//               {feedback.strengths.map((item, i) => (
//                 <li key={i}>• {item}</li>
//               ))}
//             </ul>

//           </div>

//           {/* Improvements */}

//           <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">

//             <h2 className="text-lg font-semibold text-yellow-400 mb-3">
//               Improvements
//             </h2>

//             <ul className="space-y-2 text-gray-300 text-sm">
//               {feedback.areasForImprovement.map((item, i) => (
//                 <li key={i}>• {item}</li>
//               ))}
//             </ul>

//           </div>

//         </div>

//         {/* AI Summary */}

//         <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-10">

//           <h2 className="text-xl font-semibold text-blue-400 mb-2">
//             AI Summary
//           </h2>

//           <p className="text-gray-300">
//             {feedback.overallFeedback}
//           </p>

//         </div>

//         {/* Question Analysis */}

//         <h2 className="text-2xl font-bold mb-6">
//           Question Breakdown
//         </h2>

//         <div className="space-y-6">

//           {feedback.questionBreakdown.map((item, index) => (

//             <div
//               key={index}
//               className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-400 transition"
//             >

//               <div className="flex justify-between mb-3">

//                 <p className="font-semibold text-gray-200">
//                   {index + 1}. {item.question}
//                 </p>

//                 <span className={`font-bold ${getScoreColor(item.score)}`}>
//                   {item.score}/100
//                 </span>

//               </div>

//               <div className="bg-[#020617] rounded p-3 text-sm text-gray-300 mb-3">
//                 <span className="text-gray-400 font-semibold">
//                   Your Answer:
//                 </span>{" "}
//                 {item.answer}
//               </div>

//               <p className="text-sm text-gray-300">
//                 <span className="text-gray-400 font-semibold">
//                   AI Feedback:
//                 </span>{" "}
//                 {item.feedback}
//               </p>

//             </div>

//           ))}

//         </div>

//         {/* Button */}

//         <div className="text-center mt-12">

//           <button
//             onClick={() => navigate("/feedback")}
//             className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
//           >
//             Start Another Interview
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }


////////////////////////////// set 2

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function Result() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { feedback } = location.state || { feedback: null };

//   if (!feedback) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-3">Analysis Failed</h1>
//           <p className="text-gray-400 mb-6">
//             Unable to retrieve interview feedback.
//           </p>

//           <button
//             onClick={() => navigate("/")}
//             className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
//           >
//             Go Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const getScoreColor = (score) => {
//     if (score >= 80) return "text-green-400";
//     if (score >= 50) return "text-yellow-400";
//     return "text-red-400";
//   };

//   const getBarColor = (score) => {
//     if (score >= 80) return "bg-green-400";
//     if (score >= 50) return "bg-yellow-400";
//     return "bg-red-400";
//   };

//   const radius = 85;
//   const circumference = 2 * Math.PI * radius;
//   const offset =
//     circumference - (feedback.overallScore / 100) * circumference;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white p-6 relative overflow-hidden">

//       {/* Glow Effects */}

//       <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>
//       <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

//       <div className="max-w-6xl mx-auto relative">

//         {/* Header */}

//         <div className="mb-10">
//           <h1 className="text-4xl font-bold">
//             AI Interview Performance Report
//           </h1>
//           <p className="text-gray-400 mt-2">
//             AI analyzed your responses and generated insights.
//           </p>
//         </div>

//         {/* Score Section */}

//         <div className="grid md:grid-cols-3 gap-6 mb-12">

//           {/* Score Circle */}

//           <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center">

//             <p className="text-gray-400 mb-4">Overall Score</p>

//             <div className="relative w-48 h-48">

//               <svg width="200" height="200" className="-rotate-90">

//                 <circle
//                   cx="100"
//                   cy="100"
//                   r={radius}
//                   stroke="rgba(255,255,255,0.1)"
//                   strokeWidth="10"
//                   fill="transparent"
//                 />

//                 <circle
//                   cx="100"
//                   cy="100"
//                   r={radius}
//                   stroke="url(#gradient)"
//                   strokeWidth="10"
//                   fill="transparent"
//                   strokeDasharray={circumference}
//                   strokeDashoffset={offset}
//                   strokeLinecap="round"
//                   className="transition-all duration-1000"
//                 />

//                 <defs>
//                   <linearGradient id="gradient">
//                     <stop offset="0%" stopColor="#3b82f6" />
//                     <stop offset="100%" stopColor="#a855f7" />
//                   </linearGradient>
//                 </defs>

//               </svg>

//               <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
//                 {feedback.overallScore}
//               </div>

//             </div>

//           </div>

//           {/* Strengths */}

//           <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">

//             <h2 className="text-lg font-semibold text-green-400 mb-3">
//               Strengths
//             </h2>

//             <ul className="space-y-2 text-gray-300 text-sm">
//               {feedback.strengths.map((item, i) => (
//                 <li key={i}>• {item}</li>
//               ))}
//             </ul>

//           </div>

//           {/* Improvements */}

//           <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">

//             <h2 className="text-lg font-semibold text-yellow-400 mb-3">
//               Improvements
//             </h2>

//             <ul className="space-y-2 text-gray-300 text-sm">
//               {feedback.areasForImprovement.map((item, i) => (
//                 <li key={i}>• {item}</li>
//               ))}
//             </ul>

//           </div>

//         </div>

//         {/* AI Summary */}

//         <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-10">

//           <h2 className="text-xl font-semibold text-blue-400 mb-2">
//             AI Summary
//           </h2>

//           <p className="text-gray-300">
//             {feedback.overallFeedback}
//           </p>

//         </div>

//         {/* Question Analysis */}

//         <h2 className="text-2xl font-bold mb-6">
//           Question Analysis
//         </h2>

//         <div className="space-y-6">

//           {feedback.questionBreakdown.map((item, index) => (

//             <div
//               key={index}
//               className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-400 transition"
//             >

//               <div className="flex justify-between mb-3">

//                 <p className="font-semibold text-gray-200 w-5/6">
//                   {index + 1}. {item.question}
//                 </p>

//                 <span className={`font-bold ${getScoreColor(item.score)}`}>
//                   {item.score}/100
//                 </span>

//               </div>

//               {/* Score Bar */}

//               <div className="w-full bg-gray-700 h-2 rounded mb-4">
//                 <div
//                   className={`${getBarColor(item.score)} h-2 rounded`}
//                   style={{ width: `${item.score}%` }}
//                 />
//               </div>

//               <div className="bg-[#020617] p-3 rounded mb-3 text-sm text-gray-300">
//                 <span className="text-gray-400 font-semibold">
//                   Your Answer:
//                 </span>{" "}
//                 {item.answer}
//               </div>

//               <p className="text-sm text-gray-300">
//                 <span className="text-gray-400 font-semibold">
//                   AI Feedback:
//                 </span>{" "}
//                 {item.feedback}
//               </p>

//             </div>

//           ))}

//         </div>

//         {/* AI Recommendations */}

//         <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 mt-10">

//           <h2 className="text-xl font-semibold text-purple-400 mb-2">
//             AI Recommendations
//           </h2>

//           <ul className="text-gray-300 space-y-2 text-sm">
//             <li>• Practice explaining concepts clearly.</li>
//             <li>• Use structured answers like the STAR method.</li>
//             <li>• Add real-world examples when answering.</li>
//           </ul>

//         </div>

//         {/* CTA Buttons */}

//         <div className="flex justify-center gap-4 mt-12">

//           <button
//             onClick={() => navigate("/feedback")}
//             className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
//           >
//             Start Another Interview
//           </button>

//           <button
//             onClick={() => navigate("/")}
//             className="border border-gray-500 px-8 py-3 rounded-xl hover:bg-gray-800 transition"
//           >
//             Go Home
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }










import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Trophy, TrendingUp, AlertCircle, Sparkles } from "lucide-react";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { feedback } = location.state || { feedback: null };

  if (!feedback) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
        <div className="text-center bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/10">
          <h1 className="text-4xl font-bold mb-3">Analysis Failed</h1>
          <p className="text-gray-400 mb-6">
            Unable to retrieve interview feedback.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg hover:scale-105 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-400";
    if (score >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const getBarColor = (score) => {
    if (score >= 80) return "bg-green-400";
    if (score >= 50) return "bg-yellow-400";
    return "bg-red-400";
  };

  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (feedback.overallScore / 100) * circumference;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] text-white p-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
            <Sparkles className="text-purple-400" />
            AI Interview Report
          </h1>
          <p className="text-gray-400 mt-3">
            AI analyzed your responses and generated detailed insights.
          </p>
        </div>

        {/* Score + Strength + Improvements */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          {/* Score Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col items-center shadow-lg">

            <p className="text-gray-400 mb-4">Overall Score</p>

            <div className="relative w-48 h-48">

              <svg width="200" height="200" className="-rotate-90">
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="10"
                  fill="transparent"
                />

                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="url(#gradient)"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />

                <defs>
                  <linearGradient id="gradient">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
                {feedback.overallScore}
              </div>

            </div>

            <Trophy className="text-yellow-400 mt-4" />
          </div>

          {/* Strengths */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 shadow-lg">

            <h2 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
              <TrendingUp size={18} />
              Strengths
            </h2>

            <ul className="space-y-2 text-gray-300 text-sm">
              {feedback.strengths.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

          </div>

          {/* Improvements */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 shadow-lg">

            <h2 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
              <AlertCircle size={18} />
              Improvements
            </h2>

            <ul className="space-y-2 text-gray-300 text-sm">
              {feedback.areasForImprovement.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

          </div>

        </div>

        {/* AI Summary */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-12 shadow-lg">

          <h2 className="text-xl font-semibold text-blue-400 mb-2">
            AI Summary
          </h2>

          <p className="text-gray-300">
            {feedback.overallFeedback}
          </p>

        </div>

        {/* Question Analysis */}
        <h2 className="text-2xl font-bold mb-6">
          Question Analysis
        </h2>

        <div className="space-y-6">

          {feedback.questionBreakdown.map((item, index) => (

            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-400 hover:shadow-purple-500/20 transition shadow-md"
            >

              <div className="flex justify-between mb-3">

                <p className="font-semibold text-gray-200 w-5/6">
                  {index + 1}. {item.question}
                </p>

                <span className={`font-bold ${getScoreColor(item.score)}`}>
                  {item.score}/100
                </span>

              </div>

              {/* Score Bar */}
              <div className="w-full bg-gray-700 h-2 rounded mb-4">
                <div
                  className={`${getBarColor(item.score)} h-2 rounded`}
                  style={{ width: `${item.score}%` }}
                />
              </div>

              {/* Answer */}
              <div className="bg-[#020617] p-3 rounded mb-3 text-sm text-gray-300 border border-white/10">
                <span className="text-gray-400 font-semibold">
                  Your Answer:
                </span>{" "}
                {item.answer}
              </div>

              {/* AI Feedback */}
              <p className="text-sm text-gray-300">
                <span className="text-purple-400 font-semibold">
                  AI Feedback:
                </span>{" "}
                {item.feedback}
              </p>

            </div>

          ))}

        </div>

        {/* AI Recommendations */}
        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 mt-12 shadow-lg">

          <h2 className="text-xl font-semibold text-purple-400 mb-3">
            AI Recommendations
          </h2>

          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Practice explaining concepts clearly.</li>
            <li>• Use structured answers like the STAR method.</li>
            <li>• Add real-world examples when answering.</li>
          </ul>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-12">

          <button
            onClick={() => navigate("/feedback")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
          >
            Start Another Interview
          </button>

          <button
            onClick={() => navigate("/")}
            className="border border-gray-500 px-8 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Go Home
          </button>

        </div>

      </div>
    </div>
  );
}