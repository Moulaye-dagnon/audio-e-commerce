import { motion, type Transition } from "motion/react"; // ✅ Corriger l'import

const LoaderComponent: React.FC = () => {
  const loadingContainer: React.CSSProperties = {
    width: "3rem",
    height: "3rem",
    display: "flex",
    justifyContent: "space-around",
    columnGap: "5px",
  };

  const loadingCircle: React.CSSProperties = {
    display: "block",
    width: "5rem",
    height: "5rem",
    backgroundColor: "#f1f1f1",
    borderRadius: "0",
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
      <div className="  no-doc-scrool min-h-screen w-full bg-secondary-black opacity-30">
        <div className="fixed flex h-screen w-full items-center justify-center">
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
