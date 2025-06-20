import React from 'react';
import { useLanguage } from '@/[language]/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className='ges-Button'>
      <a onClick={() => changeLanguage('en')}>English</a>
      <a onClick={() => changeLanguage('fr')}>Français</a>
      <a onClick={() => changeLanguage('de')}>Deutsch</a>
    </div>
  );
};

export default LanguageSwitcher;
