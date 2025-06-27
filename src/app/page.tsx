import 'bootstrap-icons/font/bootstrap-icons.css';
import Card from "./components/Card";
import Link from "next/link";
import PrivatoAziendaSection from "./components/PrivatoAziendaSection";
import SponsorCard from './components/SponsorCard';
import ContactForm from "./components/ContactForm";
import ScrollToHash from "./components/ScrollToHash";
import Video from "./components/Video";

const sponsors = [
  { id: 1, name: 'Pirelli', logoUrl: '/images/pirelli.png' },
  { id: 2, name: 'Sparco', logoUrl: '/images/Sparco.png' },
  { id: 3, name: 'Aip Rent', logoUrl: '/images/aiprent.png' }
];

const clients= [
  { id: 1, name: 'Coca Cola Sibeg', logoUrl: '/images/sibeg.png' },
  { id: 2, name: 'Honda', logoUrl: '/images/honda.jpeg' },
  { id: 3, name: 'Maserati', logoUrl: '/images/maserati.png' },
  { id: 4, name: 'Alfa Romeo', logoUrl: '/images/alfaromeo.png' }
];

export default function Home() {

  return (
    <>

    <Video />

    <PrivatoAziendaSection />

    <section id="mission" className="text-dark">
      <div className="container">
        {/* Intestazione e immagine */}
        <div className="row">
          <div className="col-12 col-md-6 col-lg-9">
            <h1
              className="angled-box-main mt-md-4"
              style={{ backgroundColor: '#E12A29' }}
            >
              LA NOSTRA MISSION
            </h1>
            <p className="custom-p">
              <strong>Guidare Sicuri ASD</strong>{' '}di <strong>Marco Mongelluzzi</strong> è una scuola di pilotaggio che si dedica a formare conducenti <strong>preparati, consapevoli e reattivi</strong>. Avvalendosi di una stabile organizzazione tecnica e operativa, la scuola offre corsi qualificati dove <strong>professionalità e passione</strong> si uniscono in un percorso completo.
            </p>
            <p className="custom-p">
            Con l’aiuto di <strong>istruttori professionisti</strong> e strutture dedicate, ogni allievo vive una full immersion nelle tecniche di guida, imparando a dominare l’auto in ogni condizione. La missione è chiara: <strong>aumentare la sicurezza attiva</strong> e trasformare la guida in un’esperienza di controllo e prevenzione delle sfide della strada.
            </p>
          </div>

          <div className="py-3 py-md-5 col-12 col-md-6 col-lg-3 main-picture">
            <img
              src="/images/clienti-pista.jpeg"
              alt="Marco Mongelluzzi"
              className="img-fluid rounded shadow"
              loading="lazy"
              style={{ width: '80%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4 mt-lg-0">
          <div className="col">
            <Card
              titleRight={{ text: 'AFFILIAZIONE', bgColor: '#000000' }}
              titleLeft={{ text: 'CONI e ACSI', bgColor: '#FCE000', color: '#000000' }}
            >
              <p>
                La scuola è ufficialmente riconosciuta da questi enti come{' '}
                <strong>Associazione Sportiva Dilettantistica</strong>.
              </p>
              <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap mt-4">
                <img
                  src="/images/CONI.png"
                  alt="logo CONI"
                  className="img-fluid"
                  loading="lazy"
                  style={{ maxWidth: '100px' }}
                />
                <img
                  src="/images/ACSI.png"
                  alt="logo ACSI"
                  className="img-fluid"
                  loading="lazy"
                  style={{ maxWidth: '100px' }}
                />
              </div>
            </Card>
          </div>

          <div className="col">
            <Card
              titleRight={{ text: 'SICUREZZA', bgColor: '#FCE000', color: '#000000' }}
              titleLeft={{ text: 'A PROVA DI NUMERO', bgColor: '#E12A29' }}
            >
              <div>
                <div className="big-number">
                  <h2 className="display-4">30+</h2>
                </div>
                <p>Anni di esperienza nella formazione alla guida sicura e sportiva.</p>
              </div>
              <div className="mt-3">
                <div className="big-number">
                  <h2 className="display-4">20-25%</h2>
                </div>
                <p>Rischio di incidenti ridotto dopo solo 12 mesi.</p>
              </div>
            </Card>
          </div>

          <div className="col">
            <Card
              titleRight={{ text: 'TEAMBUILDING', bgColor: '#000000' }}
              titleLeft={{ text: 'CERTIFICATO', bgColor: '#FCE000', color: '#000000' }}
            >
              <p>
                L'esperienza è perfetta per migliorare la <strong>coesione</strong> tra i tuoi dipendenti, i quali
                ricevono un attestato valido ai fini normativi.
              </p>
              <p>
                Inoltre, l'attività è conforme al{' '}
                <strong>D.Lgs 81/08 (Art. 36–37)</strong> ed è{' '}
                <strong>deducibile fiscalmente</strong> come formazione del personale.
              </p>
            </Card>
          </div>

          <div className="col">
            <Card
              titleRight={{ text: 'UN OCCHIO', bgColor: '#FCE000', color: '#000000' }}
              titleLeft={{ text: "ALL'AMBIENTE", bgColor: '#E12A29' }}
            >
              <p>
                Col modulo <strong>Eco-Drive</strong>, gli istruttori impartiscono lezioni
                per padroneggiare uno stile di guida eco-sostenibile, atto a{' '}
                <strong>ridurre le emissioni e risparmiare carburante</strong>.
              </p>
              <div className="mt-4">
                <img
                  src="/images/ambiente.svg"
                  alt="Eco Drive"
                  className="img-fluid"
                  loading="lazy"
                  style={{ maxHeight: '70px' }}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <section id="teo-pra" className="text-dark mt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-9">
            <h1
              className="angled-box-main mt-md-4"
              style={{ backgroundColor: '#E12A29' }}
            >
              DALLA TEORIA ALLA PRATICA
            </h1>
            <p className="custom-p">
              I corsi di <strong>Guidare Sicuri ASD</strong> si caratterizzano non solo per l’eccellenza dei contenuti tecnici, ma anche per il rapporto di fiducia e collaborazione che si instaura tra istruttore e allievo, in un contesto di <strong>armonia e professionalità</strong>. Dalla fase di accoglienza e <strong>formazione teorica</strong>, si procede alla suddivisione dei gruppi per affrontare la parte pratica, <strong>in pista</strong>, dove ogni partecipante può confrontarsi con i propri limiti e approfondire la conoscenza delle dinamiche di guida. <br></br><br></br>La scuola propone percorsi distinti, tra cui:
            </p>
            <div className="row row-cols-1 row-cols-lg-2 g-4">
              {/* Box 1: Guida Sicura */}
              <div className="col">
                <div className="d-flex align-items-start p-3 shadow-lg rounded-4 h-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="me-3 mt-1"
                  >
                    <path d="M16 2L6 14l-4-4" stroke="#E12A29" strokeWidth="2" fill="none" />
                  </svg>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Corsi di guida sicura
                    </h6>
                    <p className="mb-0" style={{ fontSize: '0.95rem', fontFamily: 'Montserrat, sans-serif' }}>
                      Rivolti a chi desidera acquisire padronanza e consapevolezza nella guida quotidiana.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="d-flex align-items-start p-3 shadow-lg rounded-4 h-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="me-3 mt-1"
                  >
                    <path d="M16 2L6 14l-4-4" stroke="#E12A29" strokeWidth="2" fill="none" />
                  </svg>
                  <div>
                    <h6 className="fw-bold mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Corsi di guida sportiva
                    </h6>
                    <p className="mb-0" style={{ fontSize: '0.95rem', fontFamily: 'Montserrat, sans-serif' }}>
                      Pensati per chi intende affinare tecniche avanzate di controllo del veicolo in contesti ad alta performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3 py-md-5 col-12 col-md-6 col-lg-3 main-picture">
            <img
              src="/images/gruppo-pista-1.jpeg"
              alt="Foto in Pista"
              className="img-fluid rounded shadow"
              loading="lazy"
              style={{ width: '95%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="text-center py-4 pb-5">
        <div className="container">
          <h2 className="mb-4 mt-4 pb-3" style={{fontFamily: 'Anton'}}>I Nostri Sponsor</h2>
          <div className="row justify-content-center align-items-center">
            {sponsors.map(({ id, name, logoUrl }) => (
              <div key={id} className="col-6 col-sm-4 col-md-3 mb-3">
                <SponsorCard name={name} logoUrl={logoUrl} />
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <h2 className="mb-4 mt-4 py-3" style={{fontFamily: 'Anton'}}>Abbiamo lavorato con:</h2>
          <div className="row justify-content-center align-items-center">
            {clients.map(({ id, name, logoUrl }) => (
              <div key={id} className="col-6 col-sm-4 col-md-3 mb-3">
                <SponsorCard name={name} logoUrl={logoUrl} />
              </div>
            ))}
          </div>
        </div>
    </section>
    
    <ScrollToHash />
    <section id="contatti" className="py-2 bg-dark text-white">
      <div className="container">
        <div className="mb-5">
            <h1
              className="angled-box-main mt-md-4"
              style={{ backgroundColor: '#FCE000', color: '#000000'  }}
            >
              CONTATTACI SUBITO
            </h1>
          <p className="custom-p">
            Scrivici o seguici sui nostri canali social. Contattaci per un preventivo senza impegno.
          </p>
        </div>

        <div className="row mx-lg-3">
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <div className="mb-4 d-flex flex-wrap justify-content-center justify-content-lg-start text-lg-start gap-4">
              <div style={{ minWidth: '200px' }}>
                <h5 className="custom-text">Telefono</h5>
                <p>
                  <a href="tel:+393287029997" className="text-white text-decoration-none">
                  +39 328 702 9997
                  </a>
                </p>
              </div>

              <div style={{ minWidth: '200px' }}>
                <h5 className="custom-text">Email</h5>
                <p>
                  <a href="mailto:info@guidaresicuriasd.it" className="text-white text-decoration-none">
                    info@guidaresicuriasd.it
                  </a>
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="custom-text">Dove siamo</h5>
              <div className="overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.5214099230143!2d14.564508815140542!3d40.83847478378152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bb7d516ff42c7%3A0x115818bed7663fd9!2sGuidare%20Sicuri%20ASD%20di%20Marco%20Mongelluzzi!5e0!3m2!1sit!2sit!4v1750196635861!5m2!1sit!2sit"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, width: '70%', height: '100%' }}
                />
              </div>
            </div>

            <div className="d-flex justify-content-center justify-content-lg-start gap-5 flex-wrap my-5">
              <Link
                href="https://www.facebook.com/guidaresicuriasd/"
                target="_blank"
                className="btn btn-custom px-4"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook me-2"></i>Facebook
              </Link>
              <Link
                href="https://www.instagram.com/guidaresicuriasd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="btn btn-custom px-4"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram me-2"></i>Instagram
              </Link>
              <Link
                href="https://wa.me/393287029997"
                target="_blank"
                className="btn btn-custom px-4"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp me-2"></i>WhatsApp
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>

      </div>
    </section>
    </>
  );
}
