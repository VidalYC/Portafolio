import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradiente base más visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-100/50 to-indigo-100/60 dark:from-gray-800 dark:via-blue-900/40 dark:to-indigo-900/50 transition-colors duration-300" />
      
      {/* Orbes flotantes más visibles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 dark:from-blue-500/30 dark:to-cyan-500/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/35 to-pink-400/35 dark:from-purple-500/25 dark:to-pink-500/25 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-gradient-to-br from-indigo-400/45 to-blue-400/45 dark:from-indigo-500/35 dark:to-blue-500/35 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute top-1/6 right-1/3 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-teal-400/30 dark:from-cyan-500/20 dark:to-teal-500/20 rounded-full blur-2xl animate-float-slow" />
      
      {/* Partículas más visibles */}
      <div className="absolute top-1/5 left-1/3 w-3 h-3 bg-blue-500/60 dark:bg-blue-400/50 rounded-full animate-pulse-slow shadow-lg shadow-blue-500/30" />
      <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-purple-500/70 dark:bg-purple-400/50 rounded-full animate-pulse-delayed shadow-lg shadow-purple-500/30" />
      <div className="absolute top-1/3 right-1/5 w-4 h-4 bg-cyan-500/50 dark:bg-cyan-400/40 rounded-full animate-pulse-reverse shadow-lg shadow-cyan-500/30" />
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-indigo-500/60 dark:bg-indigo-400/50 rounded-full animate-pulse-slow shadow-lg shadow-indigo-500/30" />
      <div className="absolute top-3/5 left-2/3 w-2 h-2 bg-pink-500/60 dark:bg-pink-400/40 rounded-full animate-pulse-delayed shadow-lg shadow-pink-500/30" />
      
      {/* Ondas más prominentes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/6 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent dark:via-blue-300/30 animate-wave-horizontal" />
        <div className="absolute top-3/5 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/35 to-transparent dark:via-purple-300/25 animate-wave-horizontal-delayed" />
        <div className="absolute top-4/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent dark:via-cyan-300/20 animate-wave-horizontal" />
      </div>
      
      {/* Mesh gradient más visible */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-200/60 via-transparent to-transparent dark:from-blue-800/50" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-200/60 via-transparent to-transparent dark:from-purple-800/50" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-200/40 via-transparent to-transparent dark:from-cyan-800/30" />
      </div>

      {/* Patrón de puntos sutil */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) rotate(180deg);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-30px) translateX(5px) rotate(270deg);
            opacity: 0.7;
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          33% {
            transform: translateY(15px) translateX(-20px) rotate(120deg);
            opacity: 0.5;
          }
          66% {
            transform: translateY(-25px) translateX(10px) rotate(240deg);
            opacity: 0.4;
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
            opacity: 0.35;
          }
          50% {
            transform: translateY(20px) translateX(-10px) rotate(180deg);
            opacity: 0.6;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes pulse-delayed {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.3);
          }
        }

        @keyframes pulse-reverse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1.2);
          }
          50% {
            opacity: 0.1;
            transform: scale(0.7);
          }
        }

        @keyframes wave-horizontal {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes wave-horizontal-delayed {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        .animate-float-slow {
          animation: float-slow 25s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 30s ease-in-out infinite;
          animation-delay: -5s;
        }

        .animate-float-reverse {
          animation: float-reverse 20s ease-in-out infinite;
          animation-delay: -10s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-delayed {
          animation: pulse-delayed 4s ease-in-out infinite;
          animation-delay: -2s;
        }

        .animate-pulse-reverse {
          animation: pulse-reverse 5s ease-in-out infinite;
          animation-delay: -1s;
        }

        .animate-wave-horizontal {
          animation: wave-horizontal 12s linear infinite;
        }

        .animate-wave-horizontal-delayed {
          animation: wave-horizontal-delayed 15s linear infinite;
          animation-delay: -7s;
        }

        /* Reducir movimiento para usuarios que prefieren menos animación */
        @media (prefers-reduced-motion: reduce) {
          .animate-float-slow,
          .animate-float-delayed,
          .animate-float-reverse {
            animation: none;
            opacity: 0.3;
          }
          
          .animate-pulse-slow,
          .animate-pulse-delayed,
          .animate-pulse-reverse {
            animation: pulse-slow 8s ease-in-out infinite;
          }
          
          .animate-wave-horizontal,
          .animate-wave-horizontal-delayed {
            animation: none;
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;