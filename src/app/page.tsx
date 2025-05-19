import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card";
import PrivateToggle from "./components/PrivateToggle";
import Link from "next/link";


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
    <section id="chi-siamo" className="text-dark">
      <div className="container">
        {/* Intestazione e immagine */}
        <div className="row">
          <div className="col-12 col-md-7 col-lg-9">
            <h1
              className="angled-box-main mt-md-4"
              style={{ backgroundColor: '#E12A29' }}
            >
              LA NOSTRA MISSION
            </h1>
            <p className="custom-p">
              Da oltre 25 anni, <strong>Guidare Sicuri ASD di Marco Mongelluzzi</strong>{' '}
              (pilota collaudatore) forma conducenti consapevoli e competenti,
              offrendo corsi di guida che uniscono tecnica, sicurezza ed esperienza reale.
            </p>
          </div>

          <div className="py-5 col-12 col-lg-3 col-md-5 main-picture">
            <img
              src="/images/marco-blurred.JPG"
              alt="Marco Mongelluzzi"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
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

    <PrivateToggle />
    
    <section className="py-5 bg-dark text-white">
      <div className="container">
        {/* Titolo */}
        <div className="text-center mb-5">
          <h2 className="custom-text">Contattaci</h2>
          <p className="lead">
            Siamo a disposizione per qualsiasi informazione o richiesta. Scrivici o seguici sui nostri canali social.
          </p>
        </div>

        {/* Info contatto + mappa */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-md-4 mb-4">
            <h5 className="custom-text">Telefono</h5>
            <p>
              <a href="tel:+390123456789" className="text-white text-decoration-none">
                +39 0123 456 789
              </a>
            </p>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h5 className="custom-text">Dove siamo</h5>
            <div className="ratio ratio-4x3 rounded shadow overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.5276195550187!2d11.25524131561247!3d43.76956097911769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5408aa706c8d%3A0xb6a7f617dc6165cf!2sDuomo%20di%20Firenze!5e0!3m2!1sit!2sit!4v1680000000000!5m2!1sit!2sit"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h5 className="custom-text">Email</h5>
            <p>
              <a href="mailto:info@esempio.it" className="text-white text-decoration-none">
                info@esempio.it
              </a>
            </p>
          </div>
        </div>

        {/* Bottoni social */}
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="btn btn-custom rounded-pill px-4"
          >
            <i className="bi bi-facebook me-2"></i>Facebook
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="btn btn-custom rounded-pill px-4"
          >
            <i className="bi bi-instagram me-2"></i>Instagram
          </Link>
          <Link
            href="https://wa.me/390123456789"
            target="_blank"
            className="btn btn-custom rounded-pill px-4"
          >
            <i className="bi bi-whatsapp me-2"></i>WhatsApp
          </Link>
        </div>
      </div>
    </section>
    <footer>
    © 2025 Guidare Sicuri - Tutti i diritti riservati
    </footer></>
  );
}
