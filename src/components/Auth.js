'use client'

import React, { useState } from 'react'
import { useLanguage } from '@/[language]/LanguageContext';

const users = [
  { username: 'admin', password: 'sml1234' },
  { username: 'zkb', password: 'ZKB@passwort98' },
];

function Auth({ onLoginSuccess }) {
  const { language } = useLanguage();
  const t = { en: { login: 'Login', username: 'Username', password: 'Password', error: 'Invalid Username or Password.' }, de: { login: 'Anmelden', username: 'Benutzername', password: 'Passwort', error: 'Ungültiger Benutzername oder Passwort.' }, fr: { login: 'Connexion', username: 'Nom d\'utilisateur', password: 'Mot de passe', error: 'Nom d\'utilisateur ou mot de passe invalide.' } }[language];

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
        <label>{t.username}:</label>
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