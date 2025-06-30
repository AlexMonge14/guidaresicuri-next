import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corsi Individuali – Guidare Sicuri ASD',
  description: 'Informazioni su tutti i nostri corsi per privati, dalla guida sicura a quella veloce, passando per la guida sportiva.',
};

export default function IndividualiPage() {
  const corsi = [
    {
      id: 1,
      iconClass: "bi-shield-lock-fill me-3",
      title: "Guida Sicura",
      description:
        "Il primo approccio, una full immersion di un'intera giornata durante la quale l'allievo, dopo i primi 45 minuti dedicati alla teoria, ha l'opportunità di verificare, praticamente, i propri progressi attraverso esercizi specifici. Il corso è indicato per chiunque voglia sovvertire cattive abitudini e allenarsi a fronteggiare le insidie della strada.",
      activities: [
        "TEORIA COMPUTERIZZATA",
        "POSIZIONE DI GUIDA",
        "GIRI DI PISTA",
        "SLALOM LENTO",
        "SBANDATA CONTROLLATA",
        "EVITAMENTO DI OSTACOLO", 
        "MODULAZIONE DI FRENATA",
        "SOTTOSTERZO",
        "SKID CAR"
      ],
    },
    {
      id: 2,
      iconClass: "bi-speedometer2 text-black me-3",
      title: "Guida Sportiva",
      description:
        "Ulteriore passo in avanti per coloro che, già in possesso di una corretta impostazione di guida, desiderano perfezionare il controllo della propria vettura, attraverso tecniche specifiche eseguite a velocità crescenti. Risulta indispensabile per chi possiede auto potenti.",
      activities: [
        "TEORIA COMPUTERIZZATA",
        "IMPOSTAZIONE DELLE TRAIETTORIE",
        "GIRI DI PISTA",
        "SLALOM VELOCE",
        "CORRETTO USO DEI FRENI", 
        "CORRETTO USO DEL CAMBIO",
        "INVERSIONE DINAMICA DEL ROLLIO",
        "SKID CAR"
      ],
    },
    {
      id: 3,
      iconClass: "bi-lightning-fill text-warning me-3",
      title: "Guida Veloce",
      description:
        "Corso di preparazione alla pista per coloro che intendono avvicinarsi allo Sport Automobilistico. Affiancati da piloti-istruttori qualificati, i corsisti potranno imparare le tecniche di guida a bordo di vetture sportive. Uno step teorico di 20 minuti precede una prova pratica di quattro ore in pista.",
      activities: [
        "TEORIA COMPUTERIZZATA RISTRETTA",
        "IMPOSTAZIONE DELLE TRAIETTORIE",
        "CONOSCENZA DELL'AUTO",
        "GESTIONE DELLA VETTURA",
        "CORRETTO USO DEI FRENI", 
        "SESSIONI IN PISTA",
        "GIRI CRONOMETRATI"
      ],
    },
  ];

  return (
    <main className="pt-5">
      <div className="container">
        <h1
          className="angled-box-main text-white mt-4"
          style={{ backgroundColor: "#E12A29" }}
        >
          CORSI INDIVIDUALI
        </h1>

        <p className="custom-p">
          Una condotta di guida attenta, prudente, non sempre basta a scongiurare situazioni pericolose. La scuola svolge i propri corsi <strong>all'insegna della massima sicurezza ed efficienza</strong>, attraverso <strong>proficue lezioni teoriche e pratiche</strong>, tali da porre tutti in condizioni di imparare a dominare l'auto a qualunque velocità, su qualsiasi tipo di fondo ed in ogni condizione metereologica.
        </p>
        <p className="custom-p">
          Un'elevata sicurezza di marcia si raggiunge non solo guidando con la massima prudenza ma anche avendo il <strong>completo controllo dell'automobile e delle sue reazioni.</strong> La carenza di informazione e le reazioni improvvise ingenerate dall'istinto, sono spesso alla base del precario controllo della propria vettura nei momenti di emergenza.
        </p>
        <p className="custom-p mb-5">
          Guidare Sicuri ASD, avvalendosi di piloti-istruttori professionisti, pone gli allievi nelle migliori condizioni per <strong>affinare e sviluppare la conoscenza delle tecniche necessarie all'acquisizione della totale padronanza della vettura.</strong>
        </p>

        {/* Prima riga: prima card + video */}
        <div className="row g-4 mb-5">
          {/* Card Guida Sicura */}
          <div className="col-12 col-md-6 col-lg-9">
            <div className="card h-100 border-0 shadow-lg">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <i className={`${corsi[0].iconClass}`} style={{ fontSize: "2rem" }} />
                  <h4 className="mb-0">{corsi[0].title}</h4>
                </div>
                <p>{corsi[0].description}</p>
                <h6>Attività svolte:</h6>
                <ul className="list-unstyled ms-3">
                  {corsi[0].activities.map((act, idx) => (
                    <li key={idx} className="mb-1">
                      <i className="bi bi-check-circle-fill me-2" style={{color: "#FCE000"}} />
                      {act}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card shadow-lg rounded-4 overflow-hidden h-100 responsive-min-height" >
              <div className="ratio h-100">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-100 h-100 object-fit-cover"
                >
                  <source src="/images/corso-definitivo-verticale.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Seconda riga: due card */}
        <div className="row g-4 mb-5">
          {corsi.slice(1).map(({ id, iconClass, title, description, activities }) => (
            <div className="col-12 col-md-6" key={id}>
              <div className="card h-100 border-0 shadow-lg">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <i className={`${iconClass}`} style={{ fontSize: "2rem", color: "#FCE000" }} />
                    <h4 className="mb-0">{title}</h4>
                  </div>
                  <p>{description}</p>
                  <h6>Attività svolte:</h6>
                  <ul className="list-unstyled ms-3">
                    {activities.map((act, idx) => (
                      <li key={idx} className="mb-1">
                        <i className="bi bi-check-circle-fill me-2" style={{color: "#FCE000"}}/>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottoni */}
        <div className="my-5 text-center">
          <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
            <Link href="/#contatti" className="btn btn-custom px-4 py-2">
              CONTATTACI PER MAGGIORI INFORMAZIONI
            </Link>
            <Link href="/corsi/aziende" className="btn btn-custom px-4 py-2">
              Vai ai corsi per aziende
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

