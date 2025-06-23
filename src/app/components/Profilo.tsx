'use client';
import { useState } from 'react';

const contenuti = {
  introduzione: {
    title: "Profilo Professionale",
    content: `Marco Mongelluzzi è un pilota istruttore e collaudatore con oltre trenta anni di esperienza nel mondo dell’automotive. Fondatore di Guidare Sicuri ASD, Marco ha dedicato la sua carriera a trasmettere passione, rigore e consapevolezza.`,
  },
  istruttore: {
    title: "Esperienza",
    content: `Marco ha lavorato come istruttore professionista in corsi di guida sicura e sportiva, collaborando con aziende, privati e istituzioni. Noto per il suo approccio pratico, offre corsi personalizzati capaci di rispondere alle esigenze di automobilisti di ogni livello, grazie a competenza tecnica, massima attenzione al dettaglio e grande capacità comunicativa. Inoltre, in qualità di collaudatore e tester, ha contribuito alla messa a punto di veicoli ad alte prestazioni per marchi di eccellenza, come Ferrari, Maserati e Alfa Romeo.`,
  },
  collaborazioni: {
    title: "Collaborazioni e Formazione Specializzata",
    content: `Guidare Sicuri ASD collabora con numerose concessionarie e brand automobilistici di prestigio in tutta Italia, instaurando partership durature e offrendo corsi di alto livello su tutto il territorio nazionale. Oggetto di formazione specializzata sono anche enti pubblici e forze dell'ordine, tra cui la Polizia Stradale e gli autisti di ambulanze.`,
  },
} as const;

type Sezione = keyof typeof contenuti;

export default function ProfiloMarco() {
  const [sezioneAttiva, setSezioneAttiva] = useState<Sezione>('introduzione');

  return (
    <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-md-3 text-center text-md-start mb-3 mb-md-0">
            <img
              src="./images/marco-def.jpeg"
              alt="Marco Mongelluzzi"
              className="img-fluid rounded shadow-sm"
              loading="lazy"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-12 col-md-9 mt-4 mt-md-0">
            <h2 className="custom-p mb-4 fs-1" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: '700' }}>
                {contenuti[sezioneAttiva].title}
            </h2>
            <p className="custom-p">
                {contenuti[sezioneAttiva].content}
            </p>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start mt-5">
          {(Object.keys(contenuti) as Sezione[]).map((key) => (
            <button
              key={key}
              onClick={() => setSezioneAttiva(key)}
              className={`btn-custom ${sezioneAttiva === key ? 'btn-custom-inverse' : ''}`}
              style={{ flexGrow: 1, minWidth: '150px' }}
              type="button"
            >
              {contenuti[key].title}
            </button>
          ))}
        </div>
      </div>
  );
}

