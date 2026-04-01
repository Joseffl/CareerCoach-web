import { motion, useReducedMotion } from 'framer-motion';

const MotionReveal = ({
  children,
  className,
  delay = 0,
  y = 28,
  amount = 0.2,
  duration = 0.6,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default MotionReveal;
