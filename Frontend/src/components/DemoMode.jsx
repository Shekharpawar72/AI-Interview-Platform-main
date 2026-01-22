// import React, { useState } from 'react';
// import { Play, AlertCircle, Key, ExternalLink } from 'lucide-react';
// import { getDemoAnalysis } from '../services/geminiService.js';
// import ScoreDisplay from './ScoreDisplay';


// const DemoMode = ({ onAnalyze }) => {
//   const [showDemo, setShowDemo] = useState(false);
//   const [demoAnalysis, setDemoAnalysis] = useState(null);

//   const handleDemoAnalysis = () => {
//     const analysis = getDemoAnalysis();
//     setDemoAnalysis(analysis);
//     setShowDemo(true);
//   };

//   const handleTryWithAPI = () => {
//     setShowDemo(false);
//     setDemoAnalysis(null);
//     onAnalyze();
//   };

//   if (showDemo && demoAnalysis) {
//     return (
//       <div className="space-y-4 sm:space-y-6 lg:space-y-8">
//         <div className="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-4 sm:p-6 mx-4 sm:mx-0 shadow-lg backdrop-blur-sm">
//           <div className="flex items-center space-x-3 mb-3">
//             <AlertCircle className="text-blue-400" size={24} />
//             <span className="text-blue-300 font-semibold text-lg">Demo Mode</span>
//           </div>
//           <p className="text-blue-300 text-sm sm:text-base">
//             This is a sample analysis showing how the application works. Configure your Gemini API key for personalized analysis of your actual resume.
//           </p>
//         </div>

//         <ScoreDisplay analysis={demoAnalysis} />

//         <div className="text-center space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row justify-center px-4 sm:px-0">
//           <button
//             onClick={() => setShowDemo(false)}
//             className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//           >
//             Back to Upload
//           </button>
//           <button
//             onClick={handleTryWithAPI}
//             className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//           >
//             Configure API Key
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     // <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 text-center mx-4 sm:mx-0 border border-gray-700/50">
//     //   <div className="mb-6 sm:mb-8">
//     //     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
//     //       <Key className="text-white" size={window.innerWidth < 640 ? 32 : 40} />
//     //     </div>
//     //     <AlertCircle className="mx-auto text-yellow-400 mb-4 sm:mb-6" size={window.innerWidth < 640 ? 40 : 48} />
//     //   </div>

//     //   <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
//     //     API Key Required
//     //   </h3>

//     //   <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
//     //     To analyze your resume with personalized AI insights, please configure your Gemini API key in the .env file.
//     //   </p>

//     //   <div className="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-sm">
//     //     <h4 className="text-blue-300 font-semibold mb-3 text-sm sm:text-base">How to get your API key:</h4>
//     //     <ol className="text-blue-400 text-xs sm:text-sm text-left space-y-2 max-w-md mx-auto">
//     //       <li className="flex items-start space-x-2">
//     //         <span className="bg-blue-500/30 text-blue-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
//     //         <span>Visit Google AI Studio</span>
//     //       </li>
//     //       <li className="flex items-start space-x-2">
//     //         <span className="bg-blue-500/30 text-blue-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
//     //         <span>Create a free API key</span>
//     //       </li>
//     //       <li className="flex items-start space-x-2">
//     //         <span className="bg-blue-500/30 text-blue-300 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
//     //         <span>Add it to your .env file</span>
//     //       </li>
//     //     </ol>
//     //     <a
//     //       href="https://makersuite.google.com/app/apikey"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //       className="inline-flex items-center space-x-2 mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
//     //     >
//     //       <ExternalLink size={16} />
//     //       <span>Get API Key</span>
//     //     </a>
//     //   </div>

//     //   <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
//     //     Or try the demo mode to see how the application works:
//     //   </p>

//     //   <div className="space-y-4">
//     //     <button
//     //       onClick={handleDemoAnalysis}
//     //       className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 flex items-center space-x-3 mx-auto shadow-xl hover:shadow-2xl transform hover:scale-105"
//     //     >
//     //       <Play size={20} />
//     //       <span className="text-sm sm:text-base">Try Demo Mode</span>
//     //     </button>
//     //     <div className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto">
//     //       <p>Demo mode shows sample analysis results to demonstrate the application's capabilities</p>
//     //     </div>
//     //   </div>
//     // </div>

//    <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 text-center mx-4 sm:mx-0 border border-gray-700/50">

//   {/* Icon Section */}
//   <div className="mb-6 sm:mb-8">
//     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
//       <AlertTriangle className="text-white" size={window.innerWidth < 640 ? 32 : 40} />
//     </div>

//     <AlertCircle
//       className="mx-auto text-orange-400 mb-4 sm:mb-6"
//       size={window.innerWidth < 640 ? 40 : 48}
//     />
//   </div>

//   {/* Title */}
//   <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
//     Server Temporarily Busy
//   </h3>

//   {/* Message */}
//   <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
//     Sorry for the inconvenience. Our servers are currently experiencing high traffic.
//     Please check again after some time.
//   </p>

//   {/* Apology Box */}
//   <div className="bg-orange-500/20 border border-orange-500/30 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 backdrop-blur-sm">
//     <h4 className="text-orange-300 font-semibold mb-2 text-sm sm:text-base">
//       We appreciate your patience 🙏
//     </h4>
//     <p className="text-orange-400 text-xs sm:text-sm">
//       The issue is temporary and will be resolved shortly.
//     </p>
//   </div>

//   {/* Demo Mode */}
//   <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
//     Meanwhile, you can explore the application using demo mode:
//   </p>

//   <div className="space-y-4">
//     <button
//       onClick={handleDemoAnalysis}
//       className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-300 flex items-center space-x-3 mx-auto shadow-xl hover:shadow-2xl transform hover:scale-105"
//     >
//       <Play size={20} />
//       <span className="text-sm sm:text-base">Try Demo Mode</span>
//     </button>

//     <div className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto">
//       <p>
//         Demo mode shows sample analysis results to demonstrate the application's capabilities.
//       </p>
//     </div>
//   </div>

// </div>


//   );
// };

// export default DemoMode;






















import React, { useState } from 'react';
import {
  Play,
  AlertCircle,
  AlertTriangle
} from 'lucide-react';

import { getDemoAnalysis } from '../services/geminiService.js';
import ScoreDisplay from './ScoreDisplay';

const DemoMode = ({ onAnalyze }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [demoAnalysis, setDemoAnalysis] = useState(null);

  const handleDemoAnalysis = () => {
    const analysis = getDemoAnalysis();
    setDemoAnalysis(analysis);
    setShowDemo(true);
  };

  const handleTryWithAPI = () => {
    setShowDemo(false);
    setDemoAnalysis(null);
    onAnalyze();
  };

  /* ---------------- DEMO RESULT VIEW ---------------- */
  if (showDemo && demoAnalysis) {
    return (
      
      <div className="min-h-screen w-full  flex justify-center px-4 sm:px-6">

  {/* CONTENT WIDTH CONTROL */}
  <div className="w-full max-w-7xl py-8 space-y-8 lg:space-y-10">

    {/* Demo Mode Header */}
    <div className="relative overflow-hidden bg-[#111827]
                    border border-blue-400/30 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.25),transparent_60%)] pointer-events-none" />

      <div className="relative  z-10 flex items-center space-x-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 
                        flex items-center justify-center 
                        shadow-[0_0_30px_rgba(59,130,246,0.9)]">
          <AlertCircle className="text-white" size={22} />
        </div>

        <span className="text-blue-200 font-bold text-lg tracking-wide">
          Demo Mode Active
        </span>
      </div>

      <p className="relative z-10 text-blue-200/90 text-sm sm:text-base leading-relaxed max-w-2xl">
        You're viewing a sample resume analysis that demonstrates how the ATS score
        checker and AI insights work.
      </p>
    </div>

    {/* Score Display */}
    <div className="rounded-2xl bg-black shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
      <ScoreDisplay analysis={demoAnalysis} />
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">

      <button
        onClick={() => setShowDemo(false)}
        className="group bg-gray-800 hover:bg-gray-700 text-white font-semibold 
                   py-3 px-8 rounded-xl transition-all duration-300 
                   shadow-lg hover:shadow-xl hover:-translate-y-0.5"
      >
        ← Back to Upload
      </button>

      <button
        onClick={handleTryWithAPI}
        className="group bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
                   hover:from-blue-600 hover:to-purple-600 text-white font-semibold 
                   py-3 px-8 rounded-xl transition-all duration-300 
                   shadow-[0_10px_35px_rgba(59,130,246,0.6)] 
                   hover:shadow-[0_15px_45px_rgba(59,130,246,0.9)] 
                   hover:-translate-y-0.5"
      >
        For More Info
      </button>

    </div>

  </div>
</div>

    );
  }

  /* ---------------- SERVER BUSY UI ---------------- */
  return (
    <div className="relative overflow-hidden  bg-[#111827]   rounded-3xl  p-6 sm:p-10 lg:p-14 text-center mx-4 sm:mx-0 border border-white/10 shadow-lg shadow-blue-500">

      {/* Glow Background */}
      <div className="absolute inset-0  pointer-events-none shadow-lg shadow-blue-500" />

      {/* Icons */}
      <div className="relative z-10 mb-8">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 via-blue-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(59,130,246,0.9)] ]">
          <AlertTriangle className="text-white" size={40} />
        </div>
        <AlertCircle className="mx-auto text-blue-500 mt-4" size={40} />
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-5 bg-gradient-to-r from-blue-300 via-blue-400 to-red-400 bg-clip-text text-transparent">
        Server Temporarily Busy
      </h3>

      {/* Description */}
      <p className="relative z-10 text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
        We're experiencing high traffic at the moment.
        Please try again after some time. Sorry for the inconvenience.
      </p>

      {/* Info Box */}
      <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6 mb-10 max-w-xl mx-auto">
        <p className="text-orange-300 font-medium text-sm sm:text-base">
          ⏳ This is a temporary issue and will be resolved shortly.
        </p>
        <p className="text-gray-400 text-xs sm:text-sm mt-2">
          Thank you for your patience and understanding.
        </p>
      </div>

      {/* Demo CTA */}
      <p className="relative z-10 text-gray-400 mb-6 text-sm sm:text-base">
        Meanwhile, you can explore the application using demo mode:
      </p>

      <div className="relative z-10 space-y-4">
        <button
          onClick={handleDemoAnalysis}
          className="group bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-2xl transition-all duration-300 flex items-center space-x-3 mx-auto shadow-[0_15px_40px_rgba(16,185,129,0.5)] hover:scale-105"
        >
          <Play size={22} className="group-hover:scale-110 transition-transform" />
          <span className="text-sm sm:text-base">Try Demo Mode</span>
        </button>

        <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto">
          Demo mode shows sample analysis results to showcase platform capabilities.
        </p>
      </div>
    </div>
  );
};

export default DemoMode;
