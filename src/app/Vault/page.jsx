'use client'

import Auth from '@/components/Auth';
import React, { useEffect, useState } from 'react';
import Noten from '@/components/Noten';
import { useLanguage } from '@/[language]/LanguageContext';


import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

function page() {
  const { language, changeLanguage } = useLanguage();
  const t = translationsMap[language];

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const noteURL = [
    { src: "/docs/noten/zeugnis-1.pdf", desc: "GIBB 2024/25", resc: t.z1 + 5.75, preview: "/docs/noten/z1.jpg" },
    { src: "/docs/noten/zeugnis-2.pdf", desc: "BWD 2024/25",  resc: t.z1 + 5.4 , preview: "/docs/noten/z2.jpg" }
  ];
  const uekURL = [
    { src: "/docs/noten/m187.pdf", desc: t.m187, resc: 5  , preview: "/docs/noten/m187.png" },
    { src: "/docs/noten/m106.pdf", desc: t.m106, resc: 5.5, preview: "/docs/noten/m106.png" },
    { src: "/docs/noten/m223.pdf", desc: t.m223, resc: 5  , preview: "/docs/noten/m223.png" },
    { src: "/docs/noten/m210.pdf", desc: t.m210, resc: 5.5, preview: "/docs/noten/m210.png" },
    { src: "/docs/noten/m294.pdf", desc: t.m294, resc: 5.5, preview: "/docs/noten/m294.png" },
    { src: "/docs/noten/m295.pdf", desc: t.m295, resc: 5.5, preview: "/docs/noten/m295.png" },
    { src: "/docs/noten/m335.pdf", desc: t.m335, resc: 5.5, preview: "/docs/noten/m335.png" },
  ];

  const praxisURL = [
    { src: "/docs/noten/hs23.jpg", desc: t.hs + "2023", resc: 6  , preview: "/docs/noten/hs23.jpg" },
    { src: "/docs/noten/fs24.jpg", desc: t.fs + "2024", resc: 6  , preview: "/docs/noten/fs24.jpg" },
    { src: "/docs/noten/hs24.jpg", desc: t.hs + "2024", resc: 5.5, preview: "/docs/noten/hs24.jpg" },
    { src: "/docs/noten/fs25.jpg", desc: t.fs + "2025", resc: 5.5, preview: "/docs/noten/fs25.jpg" }
  ];

  const handleDowAll = () => {
    window.location.href = '/docs/noten/naomi_baechler_noten.zip';
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/check-auth', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
      } catch (err) {
        console.error('Auth check error:', err);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <div>{t.prLod}</div>;
  }

  return (
    <div className="column">
      {!isAuthenticated ? (
        <Auth onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <div>
            <div className="clum">
              <button className="Dow" onClick={handleDowAll}>{t.prDow}</button>
              <div style={{ textAlign: 'center' }}>
                <h2>{t.moin}</h2>
                <h4>{t.prText}</h4>
              </div>
              <button className="Dow" onClick={handleLogout}>{t.prLoU}</button>
            </div>
            <section className="clm">
              <div style={{ flex: 2 }}>
                <h3>{t.prPFT}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                  {noteURL.map((item, index) => (
                    <Noten
                      key={index}
                      src={item.src}
                      title={item.desc}
                      desc={item.resc}
                      dow={t.daa}
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
                      desc={item.resc}
                      dow={t.dab}
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
                      desc={item.resc}
                      dow={t.dac}
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