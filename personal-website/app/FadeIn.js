import { motion } from "framer-motion";

export default function FadeIn({ as: Tag = "div", children, className = "", ...props }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      {...props}
      as={Tag}
    >
      {children}
    </motion.div>
  );
}