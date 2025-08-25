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
    { src: "/docs/Project Abstract VorstellungsWebsite.pdf", desc: t.vow, preview: "/docs/ap-web.png" },
    { src: "/docs/Project Abstract meWeb.pdf", desc: t.mew, preview: "/docs/ap-293.png" },
    { src: "/docs/Project Abstract BewerbungsWebsite.pdf", desc: t.bew, preview: "/docs/ap-bweb.png" },

    { src: "/docs/Project Abstract Orellfüssli.pdf", desc: t.of, preview: "/docs/ap-of.png" },
    { src: "/docs/Project Abstract LARRY.pdf", desc: t.lar, preview: "/docs/ap-larry.png" },
    { src: "/docs/Project Abstract Llama Race.pdf", desc: t.lr, preview: "/docs/ap-err.png" },

    { src: "/docs/Project Abstract neo4j.pdf", desc: t.nsq, preview: "/docs/ap-neo.png" },
    { src: "/docs/Project Abstract ANAE.pdf", desc: t.anae, preview: "/docs/ap-anae.png" },
    { src: "/docs/Project Abstract notora.pdf", desc: t.no, preview: "/docs/ap-notora.jpg" },

    { src: "/docs/Project Abstract MarsRover.pdf", desc: t.mr, preview: "/docs/ap-mr.jpg" },
    { src: "/docs/Project Abstract Blackberry Pi.pdf", desc: t.tub, preview: "/docs/ap-blackberrypi.jpg" },
    { src: "/docs/Project Abstract TTGO.pdf", desc: t.tt, preview: "/docs/ap-tt.jpg" },
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
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>Skills</h2>
          <h3 className='skP'>{t.lang}</h3>
          <SkillProgress name="HTML" level={85} />
          <SkillProgress name="CSS" level={80} />
          <SkillProgress name="SQL" level={70} />
          <SkillProgress name="Java" level={65} />
          <SkillProgress name="JavaScript" level={55} />
          <SkillProgress name="React" level={50} />
          <SkillProgress name="C#" level={45} />
          <SkillProgress name="php" level={35} />
          <SkillProgress name=".NET Maui" level={30} />
          <SkillProgress name="python" level={25} />
          <SkillProgress name="Haskell" level={10} />
          <h3 className='skP'>{t.lan}</h3>
          <SkillProgress name="MySQL" level={50} />
          <SkillProgress name="Noe4j" level={45} />
          <SkillProgress name="mongoDB" level={40} />
          <SkillProgress name="Raspberry Pi/ Rasperean" level={40} />
          <SkillProgress name="SQLite" level={40} />

          {/* <SkillProgress name="" level={} /> */}
        </div>
      </section>
    </div>
  )
}

export default page
