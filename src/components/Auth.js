'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/[language]/LanguageContext';

import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

const users = [
  { username: process.env.REACT_APP_USER1_USERNAME, password: process.env.REACT_APP_USER1_PASSWORD },
  { username: process.env.REACT_APP_USER2_USERNAME, password: process.env.REACT_APP_USER2_PASSWORD },
];

function Auth({ onLoginSuccess }) {
  const { language, changeLanguage } = useLanguage();
  const t = translationsMap[language];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setError('');
      onLoginSuccess();
    } else {
      setError(t.error);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 20, maxWidth: 300 }}>
      <h3>{t.login}</h3>
      <div>
        <label>{t.prNa}:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>{t.password}:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      <button onClick={handleLogin} style={{ marginTop: 10 }}>
        {t.login}
      </button>
    </div>
  );
}

export default Auth;