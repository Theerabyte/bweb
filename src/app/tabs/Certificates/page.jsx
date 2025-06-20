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
      <h4>{t.certiText}</h4>
      <br />
        <table>
            <thead>
                <tr>
                    <th>{t.ceName}</th>
                    <th>{t.ceDesc}</th>
                    <th>{t.ceDate}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{t.ceN1}</td>
                    <td>{t.ceD1}</td>
                    <td>25.01.2025</td>
                </tr>
                <tr>
                    <td>{t.ceN2}</td>
                    <td>{t.ceD2}</td>
                    <td>27.01.2024</td>
                </tr>
                <tr>
                    <td>{t.ceN3}</td>
                    <td>{t.ceD3}</td>
                    <td>14.02.2023</td>
                </tr>
                <tr>
                    <td>{t.ceN4}</td>
                    <td>{t.ceD4}</td>
                    <td>?</td>
                </tr>
                <tr>
                    <td>{t.ceN5}</td>
                    <td>{t.ceD5}</td>
                    <td>15.02.2018</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default page