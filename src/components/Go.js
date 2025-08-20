'use client'

import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/[language]/LanguageContext';

import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

function Go() {
  const { language, changeLanguage } = useLanguage();
  const t = translationsMap[language];

  return (
    <>
      <div className="welcCont">
        <div className="goCont" id='goCo'>
          <h1 id='welcCo'>{t.welc}</h1>
          <h2>{t.wel}</h2>
        </div>
      </div>
    </>
  )
}

export default Go