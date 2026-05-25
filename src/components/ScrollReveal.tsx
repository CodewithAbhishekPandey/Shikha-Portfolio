import { motion } from 'motion/react';
import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
  key?: React.Key;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  amount = 0.15,
}: ScrollRevealProps) {
  const getDirections = () => {
    switch (direction) {
      case 'up':
        return { y: 32 };
      case 'down':
        return { y: -32 };
      case 'left':
        return { x: 32 };
      case 'right':
        return { x: -32 };
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getDirections(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.12,
  amount = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = 'up',
  duration = 0.6,
  className = '',
}: {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  key?: React.Key;
}) {
  const getDirections = () => {
    switch (direction) {
      case 'up':
        return { y: 24 };
      case 'down':
        return { y: -24 };
      case 'left':
        return { x: 24 };
      case 'right':
        return { x: -24 };
      default:
        return {};
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...getDirections() },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
