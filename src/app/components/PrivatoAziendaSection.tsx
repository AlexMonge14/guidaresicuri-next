'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapseBoxProps {
  title: string;
  description: string;
  cta: string;
  href: string;
}

function CollapseBox({ title, description, cta, href }: CollapseBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="card border-0 mt-3"
      style={{
        backgroundColor: '#FFFFFF',
        color: '#000000',
        boxShadow: '0 0 12px rgba(0, 0, 0, 0.4)',
        overflow: 'hidden',
      }}
    >
      <div className="card-body">
        <h5
          className="card-title"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}
        >
          {title}
        </h5>
        <p className="card-text">{description}</p>
        <a href={href} className="btn btn-custom-inverse btn-sm mt-2">
          {cta}
        </a>
      </div>
    </motion.div>
  );
}

interface InfoBlockProps {
  heading: string;
  collapseTitle: string;
  collapseText: string;
  collapseCta: string;
  collapseHref: string;
  bgColor?: string;
}

function InfoBlock({
  heading,
  collapseTitle,
  collapseText,
  collapseCta,
  collapseHref,
  bgColor,
}: InfoBlockProps) {
  const [open, setOpen] = useState(false);

  const angledClass = heading.includes('AZIENDA') ? 'angled-box-left' : 'angled-box-right';

  return (
    <div className="col-12 col-xl-6 text-center mt-2 mb-2">
      <div
        className={`mb-3 text-white ${angledClass} text-center`}
        style={{
          backgroundColor: bgColor,
          height: 'auto',
        }}
      >
        <div
          className={`d-flex align-items-center justify-content-${
            heading.includes('AZIENDA') ? 'end' : 'start'
          } responsive-gap-margin`}
        >
          {heading.includes('AZIENDA') ? (
            <>
              <button className="btn btn-custom" onClick={() => setOpen(!open)}>
                {open ? 'Chiudi' : 'Dettagli'}
              </button>
              <h3 className="custom-heading mb-0">{heading}</h3>
            </>
          ) : (
            <>
              <h3 className="custom-heading mb-0">{heading}</h3>
              <button className="btn btn-custom" onClick={() => setOpen(!open)}>
                {open ? 'Chiudi' : 'Dettagli'}
              </button>
            </>
          )}
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <CollapseBox
            title={collapseTitle}
            description={collapseText}
            cta={collapseCta}
            href={collapseHref}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PrivatoAziendaSection() {
  return (
    <section className="pt-3 pt-lg-5 text-white">
      <div className="container">
        <div className="row">
          <InfoBlock
            heading="SEI UN PRIVATO?"
            collapseTitle="Formazione competitiva"
            collapseText="Possiamo fissare sessioni individuali di guida sicura, con istruttori professionisti. Essendo una ASD, organizziamo anche lezioni di guida sportiva per chi vuole padroneggiare motori più performanti."
            collapseCta="Scopri il programma"
            collapseHref="#corsi"
            bgColor="#000000"
          />
          <InfoBlock
            heading="SEI UN'AZIENDA?"
            collapseTitle="Perché scegliere noi?"
            collapseText="Offriamo corsi di guida sicura personalizzati per aziende, con condizioni flessibili e soluzioni pratiche. Tu non dovrai pensare a nulla, solo a coinvolgere i tuoi dipendenti! E se non puoi spostarti, ci spostiamo noi."
            collapseCta="Scopri la nostra offerta"
            collapseHref="#corsi"
            bgColor="#000000"
          />
        </div>
      </div>
    </section>
  );
}

