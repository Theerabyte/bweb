'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/[language]/LanguageContext';

import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

function Auth({ onLoginSuccess }) {
  const { language, changeLanguage } = useLanguage();
  const t = translationsMap[language];

  const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'guest', password: 'guest123' }
  ];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log("users", process.env.NEXT_PUBLIC_REACT_APP_USER1_USERNAME, process.env.NEXT_PUBLIC_REACT_APP_USER1_PASSWORD)
    const user = users.find(
      (u) => {
        console.log("user", u, username, password);
        return u.username === username && u.password === password;
      }
    );

    if (user) {
      setError('');
      onLoginSuccess();
    } else {
      setError(t.error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", paddingBottom: "1rem" }}>{t.prLoI}</h2>
      <div>
        <label style={{ paddingRight: "1rem" }}>{t.prNa} </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={{ paddingBottom: "1rem" }}>
        <label style={{ paddingRight: "1rem" }}>{t.prPa} </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      <button onClick={handleLogin} style={{ margin: 10 }}>
        {t.prLoI}
      </button>
    </div>
  );
}

export default Auth;