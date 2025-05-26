'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PrivacyModal from './PrivacyModal';

interface FormData {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

export default function ContactForm() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Errore invio');

      alert('Messaggio inviato con successo!');
      reset();
    } catch (error) {
      alert('Errore durante l’invio. Riprova più tardi.');
      reset();
    }
  };

  return (
    <div className="col-12 col-lg-6 custom-form">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-2">
          <input
            type="text"
            id="name"
            placeholder="Nome"
            className={`form-control form-control-minimal ${errors.name ? 'is-invalid' : ''}`}
            {...register('name', { required: 'Il nome è obbligatorio' })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`form-control form-control-minimal ${errors.email ? 'is-invalid' : ''}`}
            {...register('email', {
              required: 'L’email è obbligatoria',
              pattern: { value: /^\S+@\S+$/i, message: 'Email non valida' },
            })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <textarea
            id="message"
            placeholder="Messaggio"
            rows={3}
            className={`form-control form-control-minimal ${errors.message ? 'is-invalid' : ''}`}
            {...register('message', { required: 'Il messaggio è obbligatorio' })}
          />
          {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            id="privacy"
            className={`form-check-input text-warning ${errors.privacy ? 'is-invalid' : ''}`}
            {...register('privacy', { required: 'Devi accettare la privacy policy' })}
          />
          <label className="form-check-label" htmlFor="privacy">
            Ho letto e accetto l’{' '}
            <span
              onClick={() => setShowPrivacyModal(true)}
              style={{ color: '#FCE000', cursor: 'pointer', textDecoration: 'underline' }}
            >
              informativa sulla privacy
            </span>
          </label>
          {errors.privacy && <div className="invalid-feedback">{errors.privacy.message}</div>}
        </div>

        <div className="d-flex justify-content-center justify-content-lg-start">
          <button
            type="submit"
            className="btn btn-custom px-4"
            style={{ marginTop: '17px', marginBottom: '17px' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Invio...' : 'Invia'}
          </button>
        </div>

        <PrivacyModal show={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
      </form>
    </div>
  );
}
