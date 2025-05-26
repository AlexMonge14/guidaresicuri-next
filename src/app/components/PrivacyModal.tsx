'use client';

import { useEffect } from 'react';

export default function PrivacyModal({ show, onClose }: { show: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : '';
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
      style={{ zIndex: 1050 }}
      onClick={onClose}
    >
      <div
        className="bg-black text-white p-4 rounded"
        style={{ maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="custom-text mb-3">INFORMATIVA SUL TRATTAMENTO DEI DATI PERSONALI</h4>
        <p><em>Ai sensi dell’art. 13 del Regolamento (UE) 2016/679 (GDPR)</em></p>

        <h5 className="mt-4">1. Titolare del trattamento</h5>
        <p>
          Il titolare del trattamento è:<br/>
          Guidare Sicuri ASD<br/>
          Sede legale: Via Finlandia, 10 - 04022 FONDI<br/>
          Indirizzo Email: info@guidaresicuriasd.it
        </p>

        <h5 className="mt-4">2. Tipologie di dati raccolti</h5>
        <p>Attraverso il modulo di contatto presente su questo sito vengono raccolti i seguenti dati personali:</p>
        <ul>
          <li>Nome (campo obbligatorio)</li>
          <li>Email (campo obbligatorio)</li>
          <li>Contenuto del messaggio (campo obbligatorio)</li>
          <li>Eventuali altri dati personali inseriti volontariamente dall’utente nel messaggio</li>
        </ul>

        <h5 className="mt-4">3. Finalità del trattamento</h5>
        <p>I dati personali forniti saranno trattati per le seguenti finalità:</p>
        <ul>
          <li>Rispondere alla richiesta di informazioni o supporto inviata tramite il modulo di contatto</li>
          <li>Eventuale gestione di appuntamenti, preventivi, iscrizioni o attività direttamente collegate alla richiesta</li>
          <li>Archiviazione delle comunicazioni per esigenze organizzative e/o legali</li>
        </ul>

        <h5 className="mt-4">4. Base giuridica del trattamento</h5>
        <p>Il trattamento è lecito ai sensi dell’art. 6 del GDPR, in quanto:</p>
        <ul>
          <li>È necessario all’esecuzione di misure precontrattuali adottate su richiesta dell’interessato (es. richiesta informazioni)</li>
          <li>È basato sul consenso espresso dall’utente mediante l’invio volontario del modulo (art. 6 par. 1 lett. a)</li>
          <li>In alcuni casi, può essere necessario per adempiere a obblighi legali</li>
        </ul>

        <h5 className="mt-4">5. Modalità del trattamento</h5>
        <p>
          Il trattamento sarà effettuato con strumenti digitali e/o cartacei, in modo lecito, corretto e trasparente,
          garantendo la sicurezza, integrità e riservatezza dei dati. I dati non saranno oggetto di processi decisionali
          automatizzati, né di profilazione.
        </p>

        <h5 className="mt-4">6. Destinatari dei dati</h5>
        <p>I dati potranno essere comunicati, nei limiti delle finalità sopra indicate, a:</p>
        <ul>
          <li>Collaboratori interni incaricati di gestire le richieste</li>
          <li>Provider di hosting e fornitori tecnici necessari al funzionamento del sito</li>
          <li>Professionisti e consulenti legali, se strettamente necessario per adempiere a obblighi di legge</li>
        </ul>
        <p>In ogni caso, i dati non saranno oggetto di diffusione.</p>

        <h5 className="mt-4">7. Trasferimento di dati verso paesi terzi</h5>
        <p>
          I dati non saranno trasferiti verso paesi extra-UE o organizzazioni internazionali. Qualora ciò avvenisse
          per ragioni tecniche (es. server/cloud provider esteri), il trasferimento avverrà solo verso paesi ritenuti
          adeguati dalla Commissione UE oppure nel rispetto delle clausole contrattuali standard previste dal GDPR.
        </p>

        <h5 className="mt-4">8. Periodo di conservazione</h5>
        <p>
          I dati saranno conservati per il tempo strettamente necessario a gestire la richiesta dell’utente e comunque:
        </p>
        <ul>
          <li>Non oltre 12 mesi dalla ricezione, salvo diversa necessità (es. rapporti contrattuali o contenziosi)</li>
          <li>In caso di esercizio di diritti da parte dell’interessato, i dati relativi alle richieste saranno conservati per 5 anni ai fini probatori</li>
        </ul>

        <h5 className="mt-4">9. Diritti dell’interessato</h5>
        <p>
          Ai sensi degli articoli 15-22 del GDPR, l’utente ha diritto di:
        </p>
        <ul>
          <li>Ottenere conferma dell’esistenza dei dati (diritto di accesso)</li>
          <li>Chiedere la rettifica, l’aggiornamento o la cancellazione</li>
          <li>Limitare od opporsi al trattamento</li>
          <li>Revocare in qualsiasi momento il consenso (senza pregiudicare la liceità del trattamento basata sul consenso prestato prima della revoca)</li>
          <li>Proporre reclamo all’autorità di controllo competente (Garante per la protezione dei dati personali – www.garanteprivacy.it)</li>
        </ul>

        <h5 className="mt-4">10. Obbligatorietà del conferimento</h5>
        <p>
          Il conferimento dei dati è facoltativo ma necessario per poter inviare correttamente la richiesta tramite il modulo di contatto.
          In caso di mancato conferimento, non sarà possibile completare l'invio.
        </p>

        <p className="mt-4 custom-text" style={{ fontSize: '0.875rem' }}>
          Ultimo aggiornamento: Maggio 2025
        </p>

        <button className="btn btn-custom mt-3" onClick={onClose}>
          Chiudi
        </button>
      </div>
    </div>
  );
}

