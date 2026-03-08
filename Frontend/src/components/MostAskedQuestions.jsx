import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MostAskedQuestions() {

  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
        /* Floating */
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes floatSlow {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
        }

        /* Gradient Move */
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Glow Wave */
        @keyframes waveMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Breathing Effect */
        @keyframes breathe {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }

        /* Rotating Ring */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .float { animation: float 4s ease-in-out infinite; }
        .floatSlow { animation: floatSlow 6s ease-in-out infinite; }
        .breathe { animation: breathe 6s ease-in-out infinite; }

        .gradientBG {
          background: linear-gradient(270deg, #0f172a, #0b1120, #111827);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }

        .wave::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(59,130,246,0.15),
            transparent
          );
          animation: waveMove 6s linear infinite;
        }

        .spinSlow {
          animation: spinSlow 20s linear infinite;
        }

        /* Floating Particles */
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
          opacity: 0.6;
          animation: float 8s infinite ease-in-out;
        }
        `}
      </style>

      <div className=" bg-gradient-to-r from-[#0b0f14] via-[#0b0f14] to-[#0a0e14] py-20 px-4 relative overflow-hidden">
        {/* Floating Particles */}
        <div className="particle top-10 left-10"></div>
        <div className="particle top-40 left-1/3"></div>
        <div className="particle bottom-20 right-20"></div>
        <div className="particle bottom-40 right-1/4"></div>

        <div className="relative max-w-7xl mx-auto rounded-3xl gradientBG breathe p-10 md:p-16 shadow-2xl shadow-blue-600 overflow-hidden wave">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div>
              <p className="text-blue-400 text-3xl font-bold uppercase tracking-widest mb-3">
                <span className="text-white">On-Campus</span> Placement 🚀
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Most <span className="text-blue-500">Asked</span> <br />
                Questions 💡
              </h1>

              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                Explore real-time placement and interview questions asked to
                students in real campus drives 🎯 and boost your preparation
                with structured practice.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Real campus interview questions 🎯",
                  "Company coding rounds 💻",
                  "Latest placement questions 2025 🚀"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-blue-500 w-5 h-5" />
                    <span className="text-gray-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/previous-questions")}
                className="bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 hover:scale-110 transform"
              >
                Explore Questions 🔥
              </button>
            </div>

            {/* RIGHT SIDE PREMIUM VISUAL */}
            <div className="hidden md:flex justify-center items-center relative h-[400px] ">
              
              {/* Rotating Glow Ring */}
              <div className="absolute w-80 h-80 border border-blue-500/30 rounded-full spinSlow "></div>

              {/* Main Circle */}
              <div className="relative w-60 h-60 shadow-2xl shadow-blue-700/20 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-xl border border-blue-500/20 flex flex-col items-center justify-center shadow-2xl float">
                <h2 className="text-4xl font-bold text-blue-400 animate-pulse">
                  50<span className=" text-white">+</span>
                </h2>
                <p className="text-gray-300 text-sm mt-2 text-center px-4">
                  Real Campus Questions Collected 📚
                </p>
              </div>

              {/* Small Floating Stats */}
              <div className="absolute top-5 right-5 bg-blue-600/20 px-4 py-2 rounded-xl backdrop-blur-md border border-blue-500/20 floatSlow">
                <p className="text-white text-sm">DSA Focus 💻</p>
              </div>

              <div className="absolute top-5 right-5 bg-blue-600/20 px-4 py-2 rounded-xl backdrop-blur-md border border-blue-500/20 floatSlow">
                <p className="text-white text-sm">DSA Focus 💻</p>
              </div>

              <div className="absolute bottom-5 left-5 bg-blue-600/20 px-4 py-2 rounded-xl backdrop-blur-md border border-blue-500/20 float">
                <p className="text-white text-sm">Tech Interview Prep 🎤</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}