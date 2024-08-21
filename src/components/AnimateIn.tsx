"use client";
import { motion } from "framer-motion";

interface AnimateInProps {
  classNameStyle: string;
  children: React.ReactNode;
}

export default function AnimateIn({ classNameStyle, children }: AnimateInProps) {
  return (
    <motion.div
      className={classNameStyle}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
