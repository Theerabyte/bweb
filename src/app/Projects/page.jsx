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
    { src: "/docs/Project Abstract VorsWebsite.pdf", desc: t.vow, resc: 6 + t.av  , preview: "/docs/ap-web.png" },
    { src: "/docs/Project Abstract meWeb.pdf",       desc: t.mew, resc: 5.5       , preview: "/docs/ap-293.png" },
    { src: "/docs/Project Abstract BeweWebsite.pdf", desc: t.bew, resc: t.ab      , preview: "/docs/ap-bweb.png" },

    { src: "/docs/Project Abstract Orellfüssli.pdf", desc: t.off, resc: 5.5       , preview: "/docs/ap-of.png" },
    { src: "/docs/Project Abstract LARRY.pdf",       desc: t.lrr, resc: 6 + t.ar  , preview: "/docs/ap-larry.png" },
    { src: "/docs/Project Abstract Lama Race.pdf",   desc: t.lam, resc: t.aa      , preview: "/docs/ap-lm.png" },

    { src: "/docs/Project Abstract neo4j.pdf",       desc: t.nsq, resc: 5.5       , preview: "/docs/ap-neo.png" },
    { src: "/docs/Project Abstract ANAE.pdf",        desc: t.ana, resc: 6         , preview: "/docs/ap-anae.png" },
    { src: "/docs/Project Abstract notora.pdf",      desc: t.not, resc: 5.5 + t.an, preview: "/docs/ap-notora.jpg" },

    { src: "/docs/Project Abstract MarsRover.pdf",   desc: t.mrp, resc: 6         , preview: "/docs/ap-mr.jpg" },
    { src: "/docs/Project Abstract BlackbrPi.pdf",   desc: t.tub, resc: t.ab      , preview: "/docs/ap-blackberrypi.jpg" },
    { src: "/docs/Project Abstract TTGO.pdf",        desc: t.ttg, resc: t.ab      , preview: "/docs/ap-tt.jpg" },
  ];

  const handleDowAll = () => {
    window.location.href = '/docs/naomi-baechler-project-abstracts.zip';
  };

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
                desc={item.resc}
                isPDF={item.src.endsWith('.pdf')}
                preview={item.preview}
              />
            ))}
          </div>
          <br />
          <button className="Dow" onClick={handleDowAll}>{t.proDow}</button>
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
