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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        onLoginSuccess();
      } else {
        setError(t.error);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(t.error);
    } finally {
      setLoading(false);
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
          required
        />
      </div>
      <div style={{ paddingBottom: "1rem" }}>
        <label style={{ paddingRight: "1rem" }}>{t.prPa} </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
      <button onClick={handleLogin} style={{ margin: 10 }} disabled={loading}>
        {loading ? t.prLod : t.prLoI}
      </button>
    </div>
  );
}

export default Auth;