'use client';
import { useEffect } from 'react';

export default function ScrollToHash() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#contatti') {
      const target = document.getElementById('contatti');
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return null;
}