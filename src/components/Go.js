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
        <div className="goCont">
          <Image className="go" src="/icons/v1.svg" alt={t.logo} width={650} height={600} />
          <h1 id='welc'>{t.welc}</h1>
        </div>
      </div>
    </>
  )
}

export default Go