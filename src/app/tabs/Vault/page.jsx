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

  const gradesheetURL = 'https://www.family.baechler.name/';
  const vocDocsURLs = [
    'https://www.family.baechler.name/',
    'https://www.family.baechler.name/',
  ];

  return (
    <div className="column">
      {!isAuthenticated ? (
        <Auth onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <button onClick={handleLogout}>{t.prLoU}</button>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2>{t.moin}</h2>
              <h4>{t.prText}</h4>
            </div>
            <section style={{ marginTop: '20px' }}>
              <table>
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
              </table>
              <h3>{t.prPFT}</h3>
              <a href={gradesheetURL} target="_blank" rel="noopener noreferrer">
                {t.prDow}
              </a>

              <h3>{t.prVC}</h3>
              <ul>
                {vocDocsURLs.map((url, index) => (
                  <li key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
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