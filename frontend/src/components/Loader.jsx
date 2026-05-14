import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 500);

          return 100;
        }

        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black flex flex-col justify-center items-center z-[99999]"
      >
        {/* Logo */}

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          Niveshhraj
        </motion.h1>

        {/* Loading */}

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "300px" }}
          transition={{ duration: 2.5 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-10"
        />

        <p className="mt-6 text-gray-400 text-xl">{count}%</p>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader;
