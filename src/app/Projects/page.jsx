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
    { src: "/docs/Project Abstract VorsWebsite.pdf", desc: t.vow, resc: t.grade + 6 + t.av  , preview: "/docs/ap-web.png" },
    { src: "/docs/Project Abstract meWeb.pdf",       desc: t.mew, resc: t.grade + 5.5       , preview: "/docs/ap-293.png" },
    { src: "/docs/Project Abstract BeweWebsite.pdf", desc: t.bew, resc: t.ab                , preview: "/docs/ap-bweb.png" },

    { src: "/docs/Project Abstract Orellfüssli.pdf", desc: t.off, resc: t.grade + 5.5       , preview: "/docs/ap-of.png" },
    { src: "/docs/Project Abstract LARRY.pdf",       desc: t.lrr, resc: t.grade + 6 + t.ar  , preview: "/docs/ap-larry.png" },
    { src: "/docs/Project Abstract Lama Race.pdf",   desc: t.lam, resc: t.aa                , preview: "/docs/ap-lm.jpg" },

    { src: "/docs/Project Abstract neo4j.pdf",       desc: t.nsq, resc: t.grade + 5.5       , preview: "/docs/ap-neo.png" },
    { src: "/docs/Project Abstract ANAE.pdf",        desc: t.ana, resc: t.grade + 6         , preview: "/docs/ap-anae.png" },
    { src: "/docs/Project Abstract notora.pdf",      desc: t.not, resc: t.grade + 5.5 + t.an, preview: "/docs/ap-notora.jpg" },

    { src: "/docs/Project Abstract MarsRover.pdf",   desc: t.mrp, resc: t.grade + 6         , preview: "/docs/ap-mr.jpg" },
    { src: "/docs/Project Abstract BlackbrPi.pdf",   desc: t.tub, resc: t.ab                , preview: "/docs/ap-blackberrypi.jpg" },
    { src: "/docs/Project Abstract TTGO.pdf",        desc: t.ttg, resc: t.ab                , preview: "/docs/ap-tt.jpg" },
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
                dow= {t.dau}
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
          <SkillProgress level={35} name=".NET Maui" />
          <SkillProgress level={80} name="CSS" />
          <SkillProgress level={45} name="C#" />
          <SkillProgress level={50} name="Docker" />
          <SkillProgress level={25} name="Haskell" />
          <SkillProgress level={85} name="HTML" />
          <SkillProgress level={65} name="Java" />
          <SkillProgress level={55} name="JavaScript" />
          <SkillProgress level={40} name="Kubernetes" />
          <SkillProgress level={45} name="Neo4j" />
          <SkillProgress level={55} name="NoSQL" />
          <SkillProgress level={35} name="php" />
          <SkillProgress level={25} name="python" />
          <SkillProgress level={55} name="React" />
          <SkillProgress level={60} name="Shell script" />
          <SkillProgress level={70} name="SQL" />
          <SkillProgress level={40} name="SQLite" />
          <h3 className='skP'>{t.lan}</h3>
          <SkillProgress level={30} name="Eclips" />
          <SkillProgress level={45} name="Figma" />
          <SkillProgress level={72} name="Git" />
          <SkillProgress level={69} name="GitHub" />
          <SkillProgress level={58} name="GitLab" />
          <SkillProgress level={40} name="Raspberry Pi" />
          <SkillProgress level={55} name="SQLWorkbench" />
          <SkillProgress level={50} name="Terminal (CMD)" />
          <SkillProgress level={50} name="Visual Studio" />          
          <SkillProgress level={70} name="Visual Studio Code" />
          <h3 className='skP'>{t.lac}</h3>
          <SkillProgress level={70} name={t.s1} />
          <SkillProgress level={80} name={t.s2} />
          <SkillProgress level={75} name={t.s3} />
          <SkillProgress level={85} name={t.s4} />
          <SkillProgress level={65} name={t.s5} />
          <SkillProgress level={79} name={t.s6} />          
          <SkillProgress level={95} name={t.s7} />     
          <SkillProgress level={87} name={t.s8} />
        </div>
      </section>
    </div>
  )
}

export default page
