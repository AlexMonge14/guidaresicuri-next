'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TitleProps {
  text: string;
  bgColor: string;
  color?: string;
}

interface CardProps {
  titleRight: TitleProps;
  titleLeft: TitleProps;
  children: React.ReactNode;
}

export default function Card({ titleRight, titleLeft, children }: CardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 150 }}
      className="card bg-white h-100 shadow rounded overflow-hidden"
      onClick={() => setExpanded(!expanded)}
    >
      <div
        className="angled-box-right text-center"
        style={{
          backgroundColor: titleRight.bgColor,
          color: titleRight.color ?? 'white',
        }}
      >
        <h5 className="m-0 py-2">{titleRight.text}</h5>
      </div>
      <div
        className="angled-box-left text-center"
        style={{
          backgroundColor: titleLeft.bgColor,
          color: titleLeft.color ?? 'white',
        }}
      >
        <h5 className="m-0 py-2">{titleLeft.text}</h5>
      </div>
      <div className="card-body text-center text-dark">
        {children}
      </div>
    </motion.div>
  );
}

