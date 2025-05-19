'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function PrivateToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-5">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="angled-box-main text-white py-2 px-4"
        style={{
          backgroundColor: '#E12A29',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        SEI UN PRIVATO?
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-light text-dark p-3 border rounded-bottom"
          >
            <p className="mb-0">
              Offriamo corsi personalizzati per chi vuole migliorare le proprie abilità
              alla guida in sicurezza o sportività. Contattaci per un percorso su misura.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}