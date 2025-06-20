'use client'

import React from 'react'
import { useLanguage } from '@/[language]/LanguageContext';

import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

function page() {
    const { language, changeLanguage } = useLanguage();
    const t = translationsMap[language];
    
  return (
    <div className="column">
      <h2>{t.moin}</h2>
        <p>{t.contText}</p>
      <span style={{ marginRight: '5px' }}>{t.contSp1}</span> 
        <a href="mailto:naomi.baechler@protonmail.com">{t.contSp2}</a>
      <span style={{ marginRight: '5px' }}>{t.contSp3}</span>
    </div>
  )
}

export default page