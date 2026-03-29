import React from "react";
import {
  motion as Motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

// ─── Scroll-triggered fade-in-up for any section ───
export const AnimatedSection = ({
  children,
  className,
  style,
  delay = 0,
  id,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Motion.div
      ref={ref}
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0, 0, 0.2, 1] }} /* Premium ease-out */
    >
      {children}
    </Motion.div>
  );
};

// ─── Stagger container: children animate in sequence ───
export const StaggerContainer = ({
  children,
  className,
  style,
  staggerDelay = 0.1,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </Motion.div>
  );
};

// ─── Individual stagger item ───
export const StaggerItem = ({ children, className, style, ...rest }) => (
  <Motion.div
    className={className}
    style={style}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0, 0, 0.2, 1] }, /* Premium ease-out */
      },
    }}
    {...rest}
  >
    {children}
  </Motion.div>
);

// ─── Animated number counter ───
export const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  style,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration });
      return controls.stop;
    }
  }, [isInView, target, duration, count]);

  React.useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref} style={style}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};

// ─── Page transition wrapper ───
export const PageTransition = ({ children }) => (
  <Motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    {children}
  </Motion.div>
);

// ─── Simple fade in from any direction ───
export const FadeIn = ({
  children,
  direction = "up",
  delay = 0,
  className,
  style,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 60 },
    right: { x: -60 },
  };

  return (
    <Motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directionMap[direction] }
      }
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </Motion.div>
  );
};

export default AnimatedSection;
