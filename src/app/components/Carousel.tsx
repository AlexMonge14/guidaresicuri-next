'use client';

import { useEffect, useState } from 'react';

export default function Carousel() {
  const images = [
    '/images/staff-1.jpeg',
    '/images/porsche-pista.JPG',
    '/images/staff-2.jpeg',
    '/images/staff-3.jpeg',
    '/images/staff-4.jpeg',
    '/images/dettaglio.jpeg',
    '/images/t-roc.jpeg',
    '/images/gruppo-interno.jpeg',
    '/images/clienti-pista.jpeg',
  ];

  const [groupedImages, setGroupedImages] = useState<string[][]>([]);

  const groupImages = (perGroup: number) => {
    const result: string[][] = [];
    images.forEach((img, i) => {
      if (i % perGroup === 0) result.push([img]);
      else result[result.length - 1].push(img);
    });
    return result;
  };

  const updateGrouping = () => {
    const isMobile = window.innerWidth < 768;
    const newGrouped = groupImages(isMobile ? 1 : 3);
    setGroupedImages(newGrouped);
  };

  useEffect(() => {
    updateGrouping();
    window.addEventListener('resize', updateGrouping);
    return () => window.removeEventListener('resize', updateGrouping);
  }, []);

  return (
    <div className="container my-2 position-relative">
      <div
        id="carouselMulti"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          {groupedImages.map((group, i) => (
            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
              <div className="row justify-content-center g-2">
                {group.map((img, j) => (
                  <div
                    key={j}
                    className="col-10 col-md-4 d-flex justify-content-center"
                  >
                    <img
                      src={img}
                      alt={`Foto ${i * group.length + j + 1}`}
                      className="rounded shadow-sm img-fluid"
                      style={{
                        objectFit: 'cover',
                        height: '400px',
                        width: '300px'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Frecce sempre visibili su tutti gli schermi */}
        <button
          className="carousel-control-prev d-flex align-items-center"
          type="button"
          data-bs-target="#carouselMulti"
          data-bs-slide="prev"
          style={{
            width: '3rem',
            left: '-2rem',
            display: 'flex',
          }}
        >
          <span
            className="carousel-control-prev-icon"
            style={{ filter: 'invert(1)', width: '2rem', height: '2rem' }}
          />
          <span className="visually-hidden">Precedente</span>
        </button>

        <button
          className="carousel-control-next d-flex align-items-center"
          type="button"
          data-bs-target="#carouselMulti"
          data-bs-slide="next"
          style={{
            width: '3rem',
            right: '-2rem',
            display: 'flex',
          }}
        >
          <span
            className="carousel-control-next-icon"
            style={{ filter: 'invert(1)', width: '2rem', height: '2rem' }}
          />
          <span className="visually-hidden">Successivo</span>
        </button>
      </div>
    </div>
  );
}

