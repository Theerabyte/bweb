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
    <div className="content">
      <h2>{t.moin}</h2>
      <h4>{t.projText}</h4>
      <br />
        
    </div>
  )
}

export default page