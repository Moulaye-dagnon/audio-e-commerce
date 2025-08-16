import { motion, type Transition } from "motion/react"; // ✅ Corriger l'import

const LoaderComponent: React.FC = () => {
  const loadingContainer: React.CSSProperties = {
    width: "4rem",
    height: "4rem",
    display: "flex",
    justifyContent: "space-around",
  };

  const loadingCircle: React.CSSProperties = {
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: "#3A36DB",
    borderRadius: "0.5rem",
  };

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "60%",
    },
  };

  const loadingCircleTransition: Transition = {
    duration: 0.4,
    repeat: Infinity, // ✅ remplacer yoyo par repeat
    repeatType: "reverse", // ✅ pour effet aller-retour
    ease: "easeInOut",
  };

  return (
    <div>
      {/* Background overlay */}
      <div className="fixed w-full min-h-screen z-50 bg-black opacity-30">
        <div className="flex fixed w-full justify-center items-center h-screen">
          {/* Loading animation */}
          <motion.div
            style={loadingContainer}
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
          >
            {[...Array(3)].map((_, index) => (
              <motion.span
                key={index}
                style={loadingCircle}
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoaderComponent;
