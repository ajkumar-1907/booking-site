import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2.5 seconds (customizable)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
        >
          <DotLottieReact
            src="https://lottie.host/880016df-92d9-46fb-9681-9487ed72cee4/r9WcftmwNi.lottie"
            loop
            autoplay
            style={{ width: 200, height: 200 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
