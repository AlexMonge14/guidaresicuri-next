import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Card from "./components/Card";
import Link from "next/link";
import PrivatoAziendaSection from "./components/PrivatoAziendaSection";
import SponsorCard from './components/SponsorCard';
import ContactForm from "./components/ContactForm";
import ScrollToHash from "./components/ScrollToHash";

const sponsors = [
  { id: 1, name: 'Pirelli', logoUrl: '/images/pirelli.png' },
  { id: 2, name: 'Sparco', logoUrl: '/images/Sparco.png' },
  { id: 3, name: 'Aip Rent', logoUrl: '/images/Aiprent.png' },
  { id: 4, name: 'Leasys', logoUrl: '/images/leasys.png' }
];

const clients= [
  { id: 1, name: 'Coca Cola Sibeg', logoUrl: '/images/sibeg.png' },
  { id: 2, name: 'Zurich', logoUrl: '/images/zurich.svg' },
  { id: 3, name: 'Maserati', logoUrl: '/images/maserati.png' },
  { id: 4, name: 'Alfa Romeo', logoUrl: '/images/alfaromeo.png' }
];


export default function Home() {

  return (
    <><section className="hero-section d-flex justify-content-center align-items-center position-relative custom-container">
      {/* Wrapper del video ridotto */}
      <div className="position-relative video-wrapper rounded overflow-hidden shadow fade-in custom-wrapper">

        {/* Video di sfondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-100 h-100 object-fit-cover fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <source src="/images/homepage-definitivo.mp4" type="video/mp4" />
        </video>

        {/* Overlay sopra al video */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.35)" }}
        ></div>

        {/* Contenuto centrato sopra il video */}
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
          <div
            className="text-center text-white p-4 rounded fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <img
              src="/images/logo.png"
              alt="Logo Guidare Sicuri"
              className="mb-3 mx-auto d-block"
              style={{ maxWidth: "130px" }} />
            <p className="lead fs-4 mb-4">Guidare meglio. Vivere sicuri. Crescere insieme.</p>
          </div>
        </div>
      </div>
    </section>

    <PrivatoAziendaSection />


    <section id="mission" className="text-dark">
      <div className="container">
        {/* Intestazione e immagine */}
        <div className="row">
          <div className="col-12 col-lg-9">
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

          <div className=" py-3 py-lg-5 col-12 col-lg-3 main-picture">
            <img
              src="/images/marco-blurred.JPG"
              alt="Marco Mongelluzzi"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Cards */}
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
                  style={{ maxWidth: '100px' }}
                />
                <img
                  src="/images/ACSI.png"
                  alt="logo ACSI"
                  className="img-fluid"
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
                  <h2 className="display-4">25+</h2>
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
        {/* Intestazione e immagine */}
        <div className="row">
          <div className="col-12 col-lg-9">
            <h1
              className="angled-box-main mt-md-4"
              style={{ backgroundColor: '#E12A29' }}
            >
              DALLA TEORIA ALLA PRATICA
            </h1>
            <p className="custom-p">
              I corsi di <strong>Guidare Sicuri ASD</strong> si caratterizzano non solo per l’eccellenza dei contenuti tecnici, ma anche per il rapporto di fiducia e collaborazione che si instaura tra istruttore e allievo, in un contesto di <strong>armonia e professionalità</strong>. Dalla fase di accoglienza e <strong>formazione teorica</strong>, si procede alla suddivisione dei gruppi per affrontare la parte pratica, <strong>in pista</strong>, dove ogni partecipante può confrontarsi con i propri limiti e approfondire la conoscenza delle dinamiche di guida. <br></br><br></br>La scuola propone percorsi distinti, tra cui:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#E12A29"
                  viewBox="0 0 16 16"
                  style={{ marginRight: '10px', flexShrink: 0 }}
                >
                  <path d="M16 2L6 14l-4-4" stroke="#E12A29" strokeWidth="2" fill="none" />
                </svg>
                <span style={{ fontSize: '1rem', fontFamily: 'Montserrat, sans-serif' }}>
                  <strong>Corsi di guida sicura</strong>: rivolti a chi desidera acquisire padronanza e consapevolezza nella guida quotidiana.
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#E12A29"
                  viewBox="0 0 16 16"
                  style={{ marginRight: '10px', flexShrink: 0 }}
                >
                  <path d="M16 2L6 14l-4-4" stroke="#E12A29" strokeWidth="2" fill="none" />
                </svg>
                <span style={{ fontSize: '1rem', fontFamily: 'Montserrat, sans-serif' }}>
                  <strong>Corsi di guida sportiva</strong>: pensati per chi intende affinare tecniche avanzate di controllo del veicolo in contesti ad alta performance.
                </span>
              </li>
            </ul>

          </div>

          <div className="py-3 py-lg-5 col-12 col-lg-3 main-picture">
            <img
              src="/images/gruppo-pista-1.jpeg"
              alt="Foto in Pista"
              className="img-fluid rounded shadow"
              style={{ width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
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
        {/* Titolo */}
        <div className="mb-5">
            <h1
              className="angled-box-main mt-md-4"
              style={{ backgroundColor: '#FCE000', color: '#000000'  }}
            >
              CONTATTACI SUBITO
            </h1>
          <p className="custom-p">
            Siamo a disposizione per qualsiasi informazione o richiesta. Scrivici o seguici sui nostri canali social. Contattaci per un preventivo senza impegno.
          </p>
        </div>

        {/* RIGA CON INFO CONTATTI A SINISTRA E FORM A DESTRA */}
        <div className="row mx-lg-3">
          {/* COLONNA SINISTRA */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <div className="mb-4 d-flex flex-wrap justify-content-center justify-content-lg-start text-lg-start gap-4">
              {/* Telefono */}
              <div style={{ minWidth: '200px' }}>
                <h5 className="custom-text">Telefono</h5>
                <p>
                  <a href="tel:+390123456789" className="text-white text-decoration-none">
                    +39 0123 456 789
                  </a>
                </p>
              </div>

              {/* Email */}
              <div style={{ minWidth: '200px' }}>
                <h5 className="custom-text">Email</h5>
                <p>
                  <a href="mailto:info@esempio.it" className="text-white text-decoration-none">
                    info@esempio.it
                  </a>
                </p>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="custom-text">Dove siamo</h5>
              <div className="overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.5276195550187!2d11.25524131561247!3d43.76956097911769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5408aa706c8d%3A0xb6a7f617dc6165cf!2sDuomo%20di%20Firenze!5e0!3m2!1sit!2sit!4v1680000000000!5m2!1sit!2sit"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, width: '70%', height: '100%' }}
                />
              </div>
            </div>

            {/* Bottoni social */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-5 flex-wrap my-5">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="btn btn-custom px-4"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook me-2"></i>Facebook
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="btn btn-custom px-4"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram me-2"></i>Instagram
              </Link>
              <Link
                href="https://wa.me/390123456789"
                target="_blank"
                className="btn btn-custom px-4"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp me-2"></i>WhatsApp
              </Link>
            </div>
          </div>

          {/* COLONNA DESTRA - FORM */}
          <ContactForm />
        </div>

      </div>
    </section>
    <footer>
    © 2025 Guidare Sicuri - Tutti i diritti riservati
    </footer></>
  );
}
