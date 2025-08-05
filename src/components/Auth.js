'use client'

import React, {useState} from 'react'
import { useLanguage } from '@/[language]/LanguageContext';

import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

const users = [
  { username: 'admin', password: 'sml1234' },
  { username: 'zkb', password: 'ZKB@passwort98' },
];

function Auth() {
  const { language, changeLanguage } = useLanguage();
  const t = translationsMap[language];

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => { 
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      setError('');
    } else {
    setError(! + 'Invalid Username or Password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="column">
    </div>
  );
}

export default Auth;