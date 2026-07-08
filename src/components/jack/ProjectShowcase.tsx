import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function ProjectShowcase() {
  const [rows, setRows] = useState(1402300);
  const [accuracy, setAccuracy] = useState(99.1);

  // Fake data processing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRows((prev) => prev + Math.floor(Math.random() * 100));
      setAccuracy((prev) => Math.min(99.99, prev + (Math.random() * 0.01)));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0C0C0C] flex items-center justify-center overflow-hidden font-sans text-[#D7E2EA] p-6">
      {/* Animated Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(168, 85, 247, 0.4) 0%, transparent 70%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 40px 40px, 40px 40px",
          backgroundPosition: "center, center, center"
        }}
      />

      {/* Floating abstract geometric nodes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-500/20 blur-3xl rounded-full"
      />

      {/* Main Glassmorphic Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-[30px] p-8 sm:p-12 shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col items-center text-center"
      >
        {/* Animated 3D-like Cube Loader */}
        <div className="relative w-24 h-24 mb-8">
          <motion.div
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative preserve-3d"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 border-2 border-purple-400/50 rounded-xl" style={{ transform: "translateZ(30px)" }} />
            <div className="absolute inset-0 border-2 border-pink-400/50 rounded-xl" style={{ transform: "translateZ(-30px)" }} />
            <div className="absolute inset-0 border-2 border-purple-400/50 rounded-xl" style={{ transform: "rotateY(90deg) translateZ(30px)" }} />
            <div className="absolute inset-0 border-2 border-pink-400/50 rounded-xl" style={{ transform: "rotateY(90deg) translateZ(-30px)" }} />
            <div className="absolute inset-0 border-2 border-purple-400/50 rounded-xl" style={{ transform: "rotateX(90deg) translateZ(30px)" }} />
            <div className="absolute inset-0 border-2 border-pink-400/50 rounded-xl" style={{ transform: "rotateX(90deg) translateZ(-30px)" }} />
          </motion.div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        >
          Data Model Compiling
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[#BBCCD7] font-light text-sm sm:text-base md:text-lg mb-10 max-w-lg leading-relaxed"
        >
          The live dashboard environment for this case study is currently restricted or undergoing maintenance. The underlying datasets and models are securely archived.
        </motion.p>

        {/* Live Processing Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="grid grid-cols-2 gap-4 w-full mb-10"
        >
          <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
            <div className="text-xs text-purple-400 uppercase tracking-widest mb-1">Rows Processed</div>
            <div className="text-2xl font-mono text-white">{rows.toLocaleString()}</div>
          </div>
          <div className="bg-black/30 rounded-2xl p-4 border border-white/5">
            <div className="text-xs text-pink-400 uppercase tracking-widest mb-1">Model Accuracy</div>
            <div className="text-2xl font-mono text-white">{accuracy.toFixed(3)}%</div>
          </div>
        </motion.div>

        {/* Interactive Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Link 
            to="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent overflow-hidden border border-purple-500/50"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/40 group-hover:to-pink-600/40 transition-colors duration-300" />
            <span className="relative z-10 text-white font-medium uppercase tracking-widest text-sm transition-transform duration-300 group-hover:scale-105 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Return Home
            </span>
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
}
