import Link from "next/link";
import ProfiloMarco from "../components/Profilo";
import Carousel from "../components/Carousel";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi Siamo – Guidare Sicuri ASD',
  description: 'Scopri la storia della nostra squadra e di Marco Mongelluzzi, suo fondatore.',
};

export default function ChiSiamoPage() {
  return (
    <main className="pt-5">
      <div className="container">
        <div className="mb-5">
            <h1
                className="angled-box-main text-white mt-4"
                style={{ backgroundColor: '#000000' }}
            >
                CHI SIAMO
            </h1>
            <p className="custom-p">
                <strong>Guidare Sicuri ASD</strong>{' '}è una delle scuole di pilotaggio leader nel settore in Campania, con <strong>oltre 30 anni</strong> di esperienza. Fondata da <strong>Marco Mongelluzzi</strong>, la scuola si è affermata come un punto di riferimento per chi desidera migliorare le proprie capacità al volante in modo concreto, efficace e professionale.
                Offriamo percorsi formativi rivolti sia a <Link href="/corsi/individuali" className="link-yellow">privati <i className="bi bi-box-arrow-up-right" aria-hidden="true" style={{ marginLeft: '0.25rem' }}></i></Link> che ad <Link href="/corsi/aziende" className="link-yellow">aziende <i className="bi bi-box-arrow-up-right" aria-hidden="true" style={{ marginLeft: '0.25rem' }}></i></Link>, combinando lezioni teoriche e prove pratiche con l'obiettivo di insegnare i pericoli reali della strada, affrontarli con lucidità e mantenere sempre il controllo della vettura, <strong>in ogni condizione di guida.</strong>
            </p>
            <p className="custom-p">
              <strong>Non ci limitiamo a trasmettere nozioni:</strong> simuliamo situazioni di emergenza , correggiamo abitudini scorrette e ti aiutiamo a costruire competenze durature, grazie all'affiancamento costante di istruttori professionisti.
            </p>
            <p className="custom-p">
              Scegliere Guidare Sicuri ASD significa entrare in un <strong>percorso formativo serio ma coinvolgente</strong>, dove divertimento e sicurezza <strong>viaggiano insieme</strong>.
            </p>      
        </div>

        <div className="mb-5">
          <h1
            className="angled-box-main text-black mb-4"
            style={{ backgroundColor: '#FCE000' }}
          >
            MARCO MONGELLUZZI
          </h1>
          <ProfiloMarco />
        </div>

        <div className="mb-5">
          <h1
            className="angled-box-main text-white mb-4"
            style={{ backgroundColor: '#000000' }}
          >
            GALLERIA
          </h1>
          <Carousel />
        </div>

      </div>
    </main>
  );
}
