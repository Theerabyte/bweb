'use client'

import Auth from '@/components/Auth';
import React, { useState } from 'react';
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

  const gradesheetURL = [
    { src: "/docs/Zeugnis-1.jpg", alt: t.z1, desc: t.z1 },
    { src: "/docs/Zeugnis-2.jpg", alt: t.z2, desc: t.z2
     }
  ];
  const vocDocsURL = [
    { src: "/docs/HS23.jpg", alt: t.hs23, desc: t.hs23 },
    { src: "/docs/FS24.jpg", alt: t.fs24, desc: t.fs24 },
    { src: "/docs/HS24.jpg", alt: t.hs24, desc: t.hs24 },
    { src: "/docs/FS25.jpg", alt: t.fs25, desc: t.fs25 }
  ];

  return (
    <div className="column">
      {!isAuthenticated ? (
        <Auth onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2>{t.moin}</h2>
              <h4>{t.prText}</h4>
              <button onClick={handleLogout}>{t.prLoU}</button>
            </div>
            <section style={{ marginTop: '20px' }}>
              {/* <table>
                <thead>
                  <tr>
                    <th>{t.prFa}</th>
                    <th>{t.prGr}</th>
                    <th>{t.prSe1}</th>
                    <th>{t.prSe2}</th>
                    <th>{t.prSe3}</th>
                    <th>{t.prSe4}</th>
                    <th>{t.prSe5}</th>
                    <th>{t.prSe6}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t.prFa1}</td>
                    <td>5.38</td>
                    <td>5.0</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>{t.prFa2}</td>
                    <td>4.75</td>
                    <td>5.0</td>
                    <td>5.0</td>
                    <td>4.5</td>
                    <td>4.5</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>{t.prFa3}</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>{t.prFa4}</td>
                    <td>5.0</td>
                    <td>4.0</td>
                    <td>5.5</td>
                    <td>5.0</td>
                    <td>5.5</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>{t.prFa5}</td>
                    <td>4.88</td>
                    <td>4.5</td>
                    <td>5.0</td>
                    <td>4.5</td>
                    <td>5.5</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>{t.prFa6}</td>
                    <td>5.38</td>
                    <td>5.0</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>{t.prFa7}</td>
                    <td>5.38</td>
                    <td>5.0</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>5.5</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>{t.prFa8}</td>
                    <td>5.25</td>
                    <td>-</td>
                    <td>-</td>
                    <td>5.0</td>
                    <td>5.5</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table> */}
              <h3>{t.prPFT}</h3>
              <ul>
                {gradesheetURL.map((item, index) => (
                  <li key={index}>
                    <a href={item.src} target="_blank" rel="noopener noreferrer">
                      {t.prDow} {index + 1}
                    </a>
                  </li>
                ))}
              </ul>

              <h3>{t.prVC}</h3>
              <ul>
                {vocDocsURL.map((item, index) => (
                  <li key={index}>
                    <a href={item.src} target="_blank" rel="noopener noreferrer">
                      {t.prVCD} {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  )
}

export default page;