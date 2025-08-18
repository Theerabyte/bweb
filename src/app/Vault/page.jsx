'use client'

import Auth from '@/components/Auth';
import React, { useState } from 'react';
import Noten from '@/components/Noten';
import { useLanguage } from '@/[language]/LanguageContext';


import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

function page() {
  const { language, changeLanguage } = useLanguage();
  const t = translationsMap[language];

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLoginSuccess = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  const noteURL = [
    { src: "/docs/noten/zeugnis-1.pdf", desc: t.z1, preview: "/docs/noten/z1.png" },
    { src: "/docs/noten/zeugnis-2.pdf", desc: t.z2, preview: "/docs/noten/z2.png" }
  ];
  const uekURL = [
    { src: "/docs/noten/m187.pdf", desc: t.m187, preview: "/docs/noten/m187.png" },
    { src: "/docs/noten/m106.pdf", desc: t.m106, preview: "/docs/noten/m106.png" },
    { src: "/docs/noten/m294.pdf", desc: t.m294, preview: "/docs/noten/m294.png" },
    { src: "/docs/noten/m295.pdf", desc: t.m295, preview: "/docs/noten/m295.png" },
    { src: "/docs/noten/m210.pdf", desc: t.m210, preview: "/docs/noten/m210.png" },
    { src: "/docs/noten/m335.pdf", desc: t.m335, preview: "/docs/noten/m335.png" },
  ];

  const praxisURL = [
    { src: "/docs/noten/hs23.jpg", desc: t.hs + "2023", preview: "/docs/noten/hs23.jpg" },
    { src: "/docs/noten/fs24.jpg", desc: t.fs + "2024", preview: "/docs/noten/fs24.jpg" },
    { src: "/docs/noten/hs24.jpg", desc: t.hs + "2024", preview: "/docs/noten/hs24.jpg" },
    { src: "/docs/noten/fs25.jpg", desc: t.fs + "2025", preview: "/docs/noten/fs25.jpg" }
  ];

  const handleDowAll = () => {
    window.location.href = '/docs/noten/naomi_baechler_noten.zip';
  };

  return (
    <div className="column">
      {!isAuthenticated ? (
        <Auth onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <button onClick={handleDowAll} style={{ padding: '8px 16px' }}>{t.prDow}</button>
              <div style={{ textAlign: 'center' }}>
                <h2>{t.moin}</h2>
                <h4>{t.prText}</h4>
              </div>
              <button onClick={handleLogout} style={{ padding: '8px 16px' }}>{t.prLoU}</button>
            </div>
            <section style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ flex: 2 }}>
                <h3>{t.prPFT}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                  {noteURL.map((item, index) => (
                    <Noten
                      key={index}
                      src={item.src}
                      title={item.desc}
                      isPDF={item.src.endsWith('.pdf')}
                      preview={item.preview}
                    />
                  ))}
                </div>
              </div>
              <div style={{ flex: 3 }}>
                <h3>{t.prVC}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                  {uekURL.map((item, index) => (
                    <Noten
                      key={index}
                      src={item.src}
                      title={item.desc}
                      isPDF={item.src.endsWith('.pdf')}
                      preview={item.preview}
                    />
                  ))}
                </div>
              </div>
              <div style={{ flex: 3 }}>
                <h3>{t.prPra}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                  {praxisURL.map((item, index) => (
                    <Noten
                      key={index}
                      src={item.src}
                      title={item.desc}
                      isJPG={item.src.endsWith('.jpg')}
                      preview={item.preview}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export default page;