'use client'

import React from 'react'
import { useLanguage } from '@/[language]/LanguageContext';

import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

const users = [
  { username: 'admin', password: 'sml1234' },
  { username: 'zkb', password: 'ZKB@passwort98' },
];

function page() {
  const { language, changeLanguage } = useLanguage();
  const t = translationsMap[language];

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const gradesheetURL = 'https://yourdomain.com/files/gradesheet.pdf';
  const vocDocsURLs = [
    'https://yourdomain.com/files/voc1.pdf',
    'https://yourdomain.com/files/voc2.pdf',
  ];

  // nur in Enlish !!!
  const handleLogin = () => { 
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      setError('');
    } else {
    setError('Invalid Username or Password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="column" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {!isAuthenticated ? (
        <div style={{ maxWidth: '300px', margin: '0 auto', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ textAlign: 'center' }}>{t.prLoI}</h2>
          <div style={{ marginBottom: '10px' }}>
            <label>
              {t.prNa}
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: '8px', marginTop: '4px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              {t.prPa}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '8px', marginTop: '4px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
            </label>
          </div>
          <button onClick={handleLogin}>{t.prLoI}</button>
          {error && <p style={{ color: 'darkred', marginTop: '10px' }}>{error}</p>}
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h2>{t.prText}</h2>
            <h4>{t.prTextpr}</h4>
            <button onClick={handleLogout}>{t.prLoU}</button>
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
      )}
    </div>
  );
}

export default page;