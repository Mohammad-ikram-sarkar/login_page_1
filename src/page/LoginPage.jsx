import { useState } from "react";
import { Database, Eye, EyeOff } from "lucide-react";
import location from "../assets/images.jpeg";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [sessionLimit, setSessionLimit] = useState("12h");
  const [restrictIP, setRestrictIP] = useState("No");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaeafe] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={location}
          alt="Background"
          className="w-full h-[50%] object-cover opacity-70 scale-110"
        />
      </div>

      <div className="z-10 w-full max-w-md rounded-2xl shadow-xl bg-white p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-[#2a2a2a] flex items-center justify-center gap-2">
            <Database className="text-[#f97316]" size={28} />
            <span className="text-[#f97316] font-bold text-3xl">Drk</span>
            <span className="text-[#1d4ed8] font-bold text-3xl">Host</span>
          </h1>
          <p className="mt-2 text-sm text-gray-600">Login to your account</p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none px-3 py-2 rounded-md"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none px-3 py-2 pr-10 rounded-md"
            />
            <div
              className="absolute inset-y-0 right-2 flex items-center cursor-pointer mb-[20px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
            <div className="text-right mt-1">
              <a href="#" className="text-xs text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <button className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-700">
            Login
          </button>

          <div className="text-sm text-blue-600 text-center cursor-pointer select-none mt-2">
            Advance Options
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="text-sm block mb-1">Session time limit</label>
              <select
                value={sessionLimit}
                onChange={(e) => setSessionLimit(e.target.value)}
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none px-3 py-2 rounded-md"
              >
                <option value="1h">1h</option>
                <option value="6h">6h</option>
                <option value="12h">12h</option>
                <option value="24h">24h</option>
              </select>
            </div>

            <div>
              <label className="text-sm block mb-1">Restrict session to IP</label>
              <select
                value={restrictIP}
                onChange={(e) => setRestrictIP(e.target.value)}
                className="w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none px-3 py-2 rounded-md"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <p className="text-xs text-center text-gray-400 mt-4">Version 0.26.26</p>
          <p className="text-xs text-center mt-2">
            Don't have account yet?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
