import { useState } from 'react'
import './App.css'
import sr from './locales/sr.json'
import en from './locales/en.json'
import HeaderSection from './sections/HeaderSection.jsx'
import FaqSection from './sections/FaqSection.jsx'
import ArticlesSection from './sections/ArticlesSection.jsx'
import DonationsSection from './sections/DonationsSection.jsx'
import NewsSection from './sections/NewsSection.jsx'
import CitizenshipSection from './sections/CitizenshipSection.jsx'

function App() {
  const [language, setLanguage] = useState('sr')
  const [activeFaq, setActiveFaq] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [citizenshipForm, setCitizenshipForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    story: '',
    support: false,
  })

  const translations = { sr, en }
  const t = translations[language]

  const galleryImages = t.hero.gallery || []

  const handleCitizenshipChange = (field, value) => {
    setCitizenshipForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleCitizenshipSubmit = () => {
    const subject =
      language === 'sr'
        ? 'Prijava za državljanstvo države Dejanović'
        : 'Application for citizenship of the State of Dejanović'

    const bodyLines = [
      `Ime / First name: ${citizenshipForm.firstName}`,
      `Prezime / Last name: ${citizenshipForm.lastName}`,
      `Email: ${citizenshipForm.email}`,
      `Zanimanje / Occupation: ${citizenshipForm.occupation}`,
      '',
      language === 'sr'
        ? 'Priča o poreklu / dodatne informacije:'
        : 'Family background / additional information:',
      citizenshipForm.story,
      '',
      language === 'sr'
        ? `Spremnost za finansijsku podršku: ${
            citizenshipForm.support ? 'DA' : 'NE'
          }`
        : `Willing to provide financial support: ${
            citizenshipForm.support ? 'YES' : 'NO'
          }`,
    ]

    const mailto = `mailto:akrajinaaleksandra@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`

    window.location.href = mailto
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-parchment via-[#f6eee2] to-parchment text-slate">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-5 py-10 md:px-8 md:py-12">
        <HeaderSection
          t={t}
          language={language}
          setLanguage={setLanguage}
          galleryImages={galleryImages}
          galleryIndex={galleryIndex}
          setGalleryIndex={setGalleryIndex}
        />

        <FaqSection t={t} activeFaq={activeFaq} setActiveFaq={setActiveFaq} />

        <ArticlesSection t={t} />

        <DonationsSection t={t} language={language} />

        <NewsSection t={t} />

        <CitizenshipSection
          t={t}
          citizenshipForm={citizenshipForm}
          onChange={handleCitizenshipChange}
          onSubmit={handleCitizenshipSubmit}
        />
      </div>
    </div>
  )
}

export default App
