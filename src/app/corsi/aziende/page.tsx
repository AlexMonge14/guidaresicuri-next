import Link from "next/link";
import Card from "@/app/components/Card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corsi Aziende – Guidare Sicuri ASD',
  description: 'Informazioni su tutti i nostri corsi per aziende, dal teambuilding aziendale alla formazione del personale viaggiante.',
};

export default function AziendePage() {
  const corsiAziendali = [
    {
      id: 1,
      iconClass: "bi-people-fill me-3",
      title: "Teambuilding Aziendale",
      description:
        "Un’esperienza unica in pista pensata per rafforzare il lavoro di squadra, la comunicazione e la fiducia tra colleghi. Le attività sono progettate per stimolare la collaborazione e la gestione dello stress in situazioni dinamiche e divertenti.",
      activities: [
        "PROGRAMMA TARATO IN BASE ALL'AZIENDA",
        "SPIRITO DI APPARTENENZA AL BRAND",
        "FORTE IMPATTO EMOZIONALE",
        "SFIDA AMICHEVOLE CON I COLLEGHI",
        "POSSIBILITÀ DI PROVARE VEICOLI SUGGESTIVI",
      ],
    },
    {
      id: 2,
      iconClass: "bi-award-fill text-warning me-3",
      title: "Formazione e/o Aggiornamento Personale Viaggiante",
      description:
        "Corsi tecnici per dipendenti che utilizzano veicoli aziendali o operano in condizioni di guida difficili. Ideale per personale commerciale, logistica, manutenzione, e flotte aziendali. L’obiettivo è elevare il livello di sicurezza e responsabilità al volante.",
      activities: [
        "VALORIZZAZIONE DEL DIPENDENTE",
        "RIDUZIONE INCIDENTI, COSTI OPERATIVI E DI MANUTENZIONE",
        "ATTIVITÀ D.LGS 81/08 (ART. 36–37) DEDUCIBILE FISCALMENTE.",
        "ECOSOSTENIBILITÀ CON MODULO ECO-DRIVE",
        "ALLENAMENTO CON VETTURE IN DOTAZIONE AI LAVORATORI",
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
          CORSI PER AZIENDE
        </h1>

        <p className="custom-p">
          I nostri corsi aziendali uniscono <strong>formazione pratica e teorica</strong> a esperienze di gruppo per migliorare la <strong>sicurezza stradale, la collaborazione interna</strong> e il benessere dei team. Ogni attività è personalizzabile in base agli obiettivi dell’azienda.
        </p>
        <div className="row row-cols-1 row-cols-md-2 g-5 pt-2 mb-5">
            <div className="col">
                <Card
                    titleRight={{ text: 'FLESSIBILITÀ', bgColor: '#FCE000', color: '#000000' }}
                    titleLeft={{ text: 'TOTALE', bgColor: '#000000', color: '#ffffff' }}
                >
                    <p>
                       Guidare Sicuri ASD è attrezzata con uffici direttamente in pista e parco auto completo. I corsi sono <strong>completamente modulabili: durata, numero di partecipanti e tipo di programma</strong> sono personalizzabili.
                    </p>
                    <p>
                        E se non non puoi venire da noi, <strong>veniamo noi da te</strong>. Organizziamo corsi <strong>ovunque in Italia</strong>, adattandoci alle tue esigenze.
                    </p>
                </Card>
                </div>

                <div className="col">
                <Card
                    titleRight={{ text: 'ATTENZIONE ', bgColor: '#E12A29', color: '#ffffff' }}
                    titleLeft={{ text: 'ALLA COESIONE DI GRUPPO', bgColor: '#FCE000', color: '#000000' }}
                >
                    <p>
                    Il corso di guida sicura costituisce <strong>un'attività che soddisfa tutti gli scopi del team building aziendale</strong>, rappresentando uno strumento aggregante e incentivando capacità di guida, tattiche/strategiche e di affiatamento migliori, attraverso:
                    </p>
                    <div className="mt-1 d-flex flex-column gap-2">
                    <div>
                        <i className="bi bi-person-arms-up me-2" style={{ color: '#E12A29' }} />
                        Prove coordinate con competizione amichevole
                    </div>
                    <div>
                        <i className="bi bi-trophy-fill me-2" style={{ color: '#E12A29' }} />
                        Esercitazioni dinamiche che premiano il Team intero
                    </div>
                    </div>
                </Card>
            </div>
        </div>
        <p className="custom-p">
          Offriamo percorsi formativi dedicati a <strong>flotte aziendali, dirigenti, team commerciali</strong> e personale tecnico, con l’obiettivo di ridurre incidenti, migliorare le performance e rafforzare l’immagine dell’azienda in tema di responsabilità e sicurezza.
        </p>
        <p className="custom-p mb-5">
          Grazie a <strong>istruttori professionisti e metodologie interattive</strong>, trasformiamo la guida in un’occasione di crescita e coesione aziendale.
        </p>

        {/* Card dei corsi */}
        <div className="row g-4 mb-5">
          {corsiAziendali.map(({ id, iconClass, title, description, activities }) => (
            <div className="col-12 col-md-6" key={id}>
              <div className="card h-100 border-0 shadow-lg card-grow">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center mb-3">
                    <i className={`${iconClass}`} style={{ fontSize: "2rem", color: "#FCE000" }} />
                    <h4 className="mb-0">{title}</h4>
                  </div>
                  <p>{description}</p>
                  <h6>Vantaggi:</h6>
                  <ul className="list-unstyled ms-3">
                    {activities.map((act, idx) => (
                      <li key={idx} className="mb-1">
                        <i className="bi bi-check-circle-fill me-2" style={{ color: "#FCE000" }} />
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
              RICHIEDI UN PREVENTIVO PERSONALIZZATO
            </Link>
            <Link href="/corsi/individuali" className="btn btn-custom px-4 py-2">
              Vai ai corsi individuali
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
