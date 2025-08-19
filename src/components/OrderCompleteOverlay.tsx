import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OrderCompleteOverlayProps {
  show: boolean;
  onClose: () => void;
}

const OrderCompleteOverlay: React.FC<OrderCompleteOverlayProps> = ({ show, onClose }) => {
  // Auto close after 3s
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white rounded-3xl shadow-2xl px-10 py-8 text-center"
          >
            <h1 className="text-4xl font-bold text-rose-400">🎉 Order Complete!</h1>
            <p className="mt-3 text-gray-600">Thanks for your Order.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderCompleteOverlay;
