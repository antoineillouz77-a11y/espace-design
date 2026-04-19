'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    ville: '',
    type: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('sending')

    // Formspree endpoint — à remplacer par l'ID Formspree de Patrick
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/VOTRE_ID'

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `Nouveau devis — ${form.type || 'Projet'} — ${form.ville || 'Paris'}`,
        }),
      })
      if (res.ok) {
        setState('sent')
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'sent') {
    return (
      <div className="bg-white rounded-lg border border-green-100 p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-xl font-bold text-[#1C1C1C] mb-2">Message envoyé !</h3>
        <p className="text-gray-500 text-sm">
          Merci pour votre demande. Nous vous recontactons sous 24h.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg border border-gray-100 p-8 shadow-sm"
    >
      <h2 className="font-display text-xl font-bold text-[#1C1C1C] mb-6">Votre projet</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5" htmlFor="nom">
            Nom & Prénom *
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            value={form.nom}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5" htmlFor="telephone">
            Téléphone *
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            value={form.telephone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
            placeholder="06 XX XX XX XX"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
            placeholder="jean@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5" htmlFor="ville">
            Ville / Arrondissement
          </label>
          <input
            id="ville"
            name="ville"
            type="text"
            value={form.ville}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
            placeholder="Paris 15e, Boulogne..."
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-600 mb-1.5" htmlFor="type">
          Type de projet
        </label>
        <select
          id="type"
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors bg-white"
        >
          <option value="">Sélectionnez...</option>
          <option>Rénovation complète</option>
          <option>Décoration intérieure</option>
          <option>Cuisine</option>
          <option>Salle de bain</option>
          <option>Peinture</option>
          <option>Aménagement</option>
          <option>Autre</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-medium text-gray-600 mb-1.5" htmlFor="message">
          Décrivez votre projet *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
          placeholder="Surface, type de travaux, état actuel, délai souhaité..."
        />
      </div>

      {state === 'error' && (
        <p className="text-red-500 text-xs mb-4">
          Une erreur s&apos;est produite. Appelez-nous directement au 06 11 78 38 67.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="w-full flex items-center justify-center gap-2 bg-[#1C1C1C] text-white py-3 rounded font-medium text-sm hover:bg-[#B8960C] transition-colors disabled:opacity-60"
      >
        {state === 'sending' ? 'Envoi...' : (
          <>
            <Send size={15} />
            Envoyer ma demande de devis
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center mt-3">Réponse sous 24h — Visite et devis gratuits</p>
    </form>
  )
}
