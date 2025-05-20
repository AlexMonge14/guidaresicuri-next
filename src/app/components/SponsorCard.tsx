'use client';

interface SponsorCardProps {
  name: string;
  logoUrl: string;
}

export default function SponsorCard({ name, logoUrl }: SponsorCardProps) {
  return (
    <div
      title={name}
      className="d-block"
      style={{ maxWidth: 150, margin: 'auto' }}
    >
      <img
        src={logoUrl}
        alt={name}
        className="img-fluid"
        style={{ maxHeight: 80, objectFit: 'contain' }}
      />
    </div>
  );
}

