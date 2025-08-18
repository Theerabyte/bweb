'use client'

import React from 'react'
import { useLanguage } from '@/[language]/LanguageContext';

import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

import Noten from '@/components/Noten';
import SkillProgress from '@/components/Squil';

function page() {
  const { language, changeLanguage } = useLanguage();
  const t = translationsMap[language];

  const noteURL = [
    { src: "/docs/Project Abstract LARRY.pdf", desc: t.lar, preview: "/docs/ap-larry.png" },
    { src: "/docs/Project Abstract VorstellungsWebsite.pdf", desc: t.vow, preview: "/docs/ap-web.png" },
    { src: "/docs/Project Abstract BewerbungsWebsite.pdf", desc: t.bew, preview: "/docs/ap-bweb.png" },

    { src: "/docs/Project Abstract Marsrover.pdf", desc: t.mr, preview: "/docs/oo.png" },
    { src: "/docs/Project Abstract Orellfüssli.pdf", desc: t.of, preview: "/docs/oo.png" },
    { src: "/docs/Project Abstract meWeb.pdf", desc: t.mew, preview: "/docs/oo.png" },
    { src: "/docs/Project Abstract llama reace.pdf", desc: t.lr, preview: "/docs/oo.png" },

    { src: "/docs/Project Abstract .pdf", desc: t.a, preview: "/docs/oo.png" },
    { src: "/docs/Project Abstract .pdf", desc: t.a, preview: "/docs/oo.png" }
  ];

  return (
    <div className="content">
      <h2>{t.moin}</h2>
      <h4>{t.projText}</h4>
      <br />
      <section style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ flex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            {noteURL.map((item, index) => (
              <Noten
                key={index}
                src={item.src}
                title={item.desc}
                isPDF={item.src.endsWith('.pdf')}
                preview={item.preview}
              />
            ))}
          </div>
        </div>
        <div style={{ padding: '20px' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Skills</h1>
          <SkillProgress name="JavaScript" level={65} />
          <SkillProgress name="React" level={75} />
          <SkillProgress name="CSS" level={75} />
          <SkillProgress name="SQL" level={70} />
          <SkillProgress name="Java" level={75} />
          <SkillProgress name="C#" level={75} />
          <SkillProgress name="HTML" level={70} />

        </div>
      </section>
    </div>
  )
}

export default page
