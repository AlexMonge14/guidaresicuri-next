'use client';

export default function Video() {
  return (
    <section className="hero-section d-flex justify-content-center align-items-center position-relative custom-container">
      <div
        className="position-relative video-wrapper rounded overflow-hidden shadow custom-wrapper"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-100 h-100 object-fit-cover"
        >
          <source src="/images/homepage-definitivo.webm" type="video/webm" />
          <source src="/images/homepage-definitivo.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
        ></div>

        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
          <div
            className="text-center text-white p-4 rounded fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <img
              src="/images/logo.png"
              alt="Logo Guidare Sicuri"
              className="mb-3 mx-auto d-block"
              style={{ maxWidth: '120px' }}
            />
            <p className="lead">Non siamo fatti per stare fermi.</p>
            <p className="lead">Muoviti con noi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
