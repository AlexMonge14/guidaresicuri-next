# Guidare Sicuri ASD - Sito Web Ufficiale

Sito web ufficiale sviluppato per **Guidare Sicuri ASD**, un'associazione sportiva dilettantistica dedicata alla promozione della sicurezza e della formazione. Il progetto ha l'obiettivo di fornire agli utenti informazioni chiare sulle attività, i corsi e i contatti dell'associazione, garantendo un'esperienza di navigazione ottimizzata su tutti i dispositivi.

 **Sito Live:** [https://www.guidaresicuriasd.it]

---

##  Tecnologie Utilizzate (Full Stack)

* **Frontend:** HTML/ CSS (Bootstrap) /TS (React)
* **Backend:** Node.js
* **Version Control:** Git & GitHub
* **Hosting & Deployment:** Vercel 

---

##  Features Principali

* **Design Responsive:** Ottimizzato per la visualizzazione fluida su desktop, tablet e dispositivi mobili.
* **Vetrina per l'associazione:** Presentazione dettagliata dei corsi e delle attività proposte, con video e foto.
* **Sistema di Contatti:** Modulo di contatto collegato alla mail aziendale.
* **SEO ottimizzata:** Sitemap e meta tag per una migliore indicizzazione sui motori di ricerca.
* **Gestione Hosting:** Dominio ottenuto tramite hosting di terze parti, configurazione DNS records per Web Hosting e Mail Server.

---

## Struttura del Progetto

Breve panoramica dell'organizzazione dei file all'interno della repository:

📁 guidaresicuri-next/
 ┣ 📂 public/              # Risorse statiche 
 ┃ ┣ 📂 images/
 ┃ ┣ 📄 favicon.ico
 ┃ ┣ 📄 robots.txt
 ┃ ┣ 📄 sitemap-0.xml
 ┃ ┗ 📄 sitemap.xml
 ┣ 📂 src/  
 ┃ ┗ 📂 app/             # App router
     ┣ 📂 api/
     ┃ ┗ 📂 contact/         # Endpoint API per la gestione dei contatti/form
     ┣ 📂 chi-siamo/         # Pagina dedicata alla presentazione dell'associazione
     ┣ 📂 components/        # Componenti UI riutilizzabili (es. Navbar, Footer, sezioni)
     ┣ 📂 corsi/             # Pagina di presentazione dei corsi offerti
     ┣ 📂 struttura/         # Sezione informativa sulla struttura e organizzazione
     ┣ 📄 globals.css        # Stili globali dell'applicazione
     ┣ 📄 layout.tsx         # Layout principale condiviso (Header/Footer globali)
     ┣ 📄 page.module.css    # Moduli CSS specifici per la Homepage
     ┗ 📄 page.tsx           # Homepage del sito
 ┣ 📄 next.config.ts       # Configurazione di Next.js 
 ┣ 📄 next-sitemap.config.js # Configurazione della sitemap
 ┣ 📄 package.json         # Dipendenze e script del progetto
 ┗ 📄 tsconfig.json        # Configurazione TypeScript
