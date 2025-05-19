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
      className="card bg-white text-dark h-100 shadow rounded overflow-hidden"
      onClick={() => setExpanded(!expanded)}
      style={{ cursor: 'pointer' }}
    >
      <div
        className="angled-box-right text-white text-center"
        style={{ backgroundColor: titleRight.bgColor }}
      >
        <h5 className="m-0 py-2">{titleRight.text}</h5>
      </div>
      <div
        className="angled-box-left text-white text-center"
        style={{
          backgroundColor: titleLeft.bgColor,
          color: titleLeft.color || '#fff',
        }}
      >
        <h5 className="m-0 py-2">{titleLeft.text}</h5>
      </div>
      <div className="card-body text-center">
        <p>{children}</p>
      </div>
    </motion.div>
  );
}
