import React from "react";
import { Mail, Instagram } from "lucide-react"; // icons
import pic1 from "./asstes/2.png";
import pic2 from "./asstes/3.png";
import pic3 from "./asstes/1.png";

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center font-sans">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-6 tracking-wide">iBlokd</h1>
        <p className="text-gray-300 max-w-xl mb-10">
          Stay focused. Block distractions. Take control of your time.
        </p>
        <a
          href="/iblokd.apk"
          download
          className="px-8 py-3 bg-white text-black rounded-2xl font-semibold hover:bg-gray-200 transition"
        >
          Download App
        </a>
      </div>

      {/* Features Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-5xl">
        <div className="p-6 border border-gray-700 rounded-2xl hover:bg-gray-900 transition">
          <h2 className="text-2xl font-semibold mb-3">Block Apps</h2>
          <p className="text-gray-400">
            Choose which apps to block and stay distraction-free.
          </p>
        </div>
        <div className="p-6 border border-gray-700 rounded-2xl hover:bg-gray-900 transition">
          <h2 className="text-2xl font-semibold mb-3">Focus Mode</h2>
          <p className="text-gray-400">
            Set focus timers to boost your productivity.
          </p>
        </div>
        <div className="p-6 border border-gray-700 rounded-2xl hover:bg-gray-900 transition">
          <h2 className="text-2xl font-semibold mb-3">Statistics</h2>
          <p className="text-gray-400">
            Track your focus sessions and screen time easily.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20 px-6 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center mb-10">
          App Screenshots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src={pic1}
            alt="App Screenshot 1"
            className="rounded-2xl border border-gray-700 shadow-lg hover:scale-105 transition"
          />
          <img
            src={pic2}
            alt="App Screenshot 2"
            className="rounded-2xl border border-gray-700 shadow-lg hover:scale-105 transition"
          />
          <img
            src={pic3}
            alt="App Screenshot 3"
            className="rounded-2xl border border-gray-700 shadow-lg hover:scale-105 transition"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="mailto:wooshdotes@gmail.com"
            className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-xl hover:bg-gray-900 transition"
          >
            <Mail size={20} /> wooshdotes@gmail.com
          </a>
          <a
            href="https://www.instagram.com/wooshdotes/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-xl hover:bg-gray-900 transition"
          >
            <Instagram size={20} /> @wooshdotes
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-gray-600 text-sm mb-6">
        © {new Date().getFullYear()} iBlokd · Powered by Youssef Habbachi. All rights
        reserved.
      </footer>
    </div>
  );
}

export default App;
