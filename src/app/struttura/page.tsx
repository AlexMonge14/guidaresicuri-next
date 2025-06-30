import Link from "next/link";
import Card from "../components/Card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Struttura – Guidare Sicuri ASD',
    description: 'Esplora la nostra sede operativa, nel Circuito Internazionale Napoli.',
  };

export default function StrutturaPage() {
    return (
        <main className="pt-5">
            <div className="container">
                <div className="mb-5">
                    <h1
                        className="angled-box-main text-white mt-4"
                        style={{ backgroundColor: '#000000' }}
                    >
                        LA STRUTTURA
                    </h1>
                    <div className="row align-items-start my-4">
                        <div className="col-12 col-md-5 mb-3 mb-md-0">
                            <img
                            src="/images/ufficio.jpg"
                            alt="Circuito Internazionale Napoli"
                            className="img-fluid rounded shadow-sm"
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div className="col-12 col-md-7">
                            <p className="custom-p">
                            La nostra sede operativa si trova sulla pista del <strong>Circuito Internazionale Napoli</strong> a <strong>Sarno</strong>,
                            una struttura professionale dotata di <strong>2 km di tracciato tecnico</strong> e un <strong>kartodromo professionale</strong>.
                            Questa posizione privilegiata ci permette di offrire <strong>esperienze formative complete, immersive e totalmente sicure</strong>,
                            con gli spazi studiati per simulare <strong>ogni condizione di guida</strong>.
                            </p>
                            <div className="d-flex justify-content-center justify-content-md-start mt-4">
                                <Link
                                    href="https://circuitointernazionalenapoli.com"
                                    className="btn btn-custom px-4"
                                    rel="noopener noreferrer"
                                    style={{marginLeft: "2%"}}
                                >
                                    VISITA IL SITO DEL CIRCUITO
                                </Link>
                            </div>
                        </div>
                    </div>
                        <div className="row row-cols-1 row-cols-lg-3 g-4 mt-4 mt-lg-0">
                            <div className="col">
                                <Card
                                titleRight={{ text: 'LOCATION', bgColor: '#FCE000', color: '#000000' }}
                                titleLeft={{ text: 'STORICA', bgColor: '#E12A29', color: '#FFFFFF' }}
                                >
                                <p>
                                    Il <strong>Circuito Internazionale Napoli</strong> è teatro dei maggiori eventi karting mondiali dal 1999.
                                </p>                                
                                <p>La struttura garantisce un'<strong>esperienza su pista reale</strong>, con corsi di guida veloce caratterizzati da prestazioni all'altezza di ogni aspettativa, oltre che programmi aziendali e sessioni individuali.</p>
                            </Card>
                        </div>

                        <div className="col">
                            <Card
                            titleRight={{ text: 'AUTODROMO', bgColor: '#000000' }}
                            titleLeft={{ text: "D'ECCEZIONE", bgColor: '#FCE000', color: '#000000' }}
                            >
                            <div className="big-number">
                                <h2 className="display-4">2000</h2>
                            </div>
                            <p>metri di lunghezza</p>
                            <div className="big-number">
                                <h2 className="display-4">9 - 5</h2>
                            </div>
                            <p>curve  -  rettilinei</p>                       
                            </Card>
                        </div>

                        <div className="col">
                            <Card
                            titleRight={{ text: 'CONVENZIONI', bgColor: '#FCE000', color: '#000000' }}
                            titleLeft={{ text: 'ESCLUSIVE', bgColor: '#E12A29', color: '#FFFFFF' }}
                            >
                            <p>
                                All'interno del circuito si trova anche un <strong>hotel con piscina</strong> e <strong>ristorante</strong>,
                                ideale per organizzare <strong>eventi aziendali, giornate di teambuilding o ritiri intensivi</strong>. La struttura garantisce <strong>comfort e funzionalità</strong>, oltre che sicurezza e competenza.
                            </p>
                            </Card>
                        </div>                       
                    </div>
                </div>
            </div>
        </main>
    )
}