'use client'

import React from 'react'
import { School, Cake, Users, BookMarked, Origami, Briefcase } from 'lucide-react';
import { useLanguage } from '@/[language]/LanguageContext';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

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
      <h4>{t.cvText}</h4>
      <div className="text-grid">
        <p>{t.school}</p>
        <p>{t.private}</p>
        <br />
      </div>
      
      <VerticalTimeline>
        <VerticalTimelineElement  contentStyle={{ background: '#b57123', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(181, 113, 35)' }} date="2023 - present" iconStyle={{ background: 'rgb(181, 113, 35)', color: '#000' }} icon={<School />}>
          <h3 style={{ color: '#eea' }}>{t.cvAdam1}</h3>
          <h4 style={{ color: '#fff' }}>{t.cvAdam2}</h4>
          <p>{t.cvAdam3}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement dateClassName='dat' date="2014 - 2023" iconStyle={{ background: '#C0811E', color: '#000' }} icon={<School />}>
          <h3 style={{ color: '#C0811E' }}>{t.cvBravo1}</h3>
          <h4 style={{ color: '#000' }}>{t.cvBravo2}</h4>
          <p style={{ color: '#000' }}>{t.cvBravo3}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement dateClassName='dat' date="2021" iconStyle={{ background: '#CA9119', color: '#000' }} icon={<Briefcase/>}>
          <h3 style={{ color: '#CA9119' }}>{t.cvIda1}</h3>
          <h4 style={{ color: '#000' }}>{t.cvIda2}</h4>
          <p style={{ color: '#000' }}>{t.cvIda3}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement dateClassName='dat' date="2025 - ?" iconStyle={{ background: '#D09A16', color: '#000' }} icon={<Users />}>
          <h3 style={{ color: '#D09A16' }}>{t.cvCharlie1}</h3>
          <h4 style={{ color: '#000' }}>{t.cvHarley2}</h4>
          <p style={{ color: '#000' }}>{t.cvHarley3}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement dateClassName='dat' date="2013 - 2023" iconStyle={{ background: '#D7A413', color: '#000' }} icon={<Users />}>
          <h3 style={{ color: '#D7A413' }}>{t.cvCharlie1}</h3>
          <h4 style={{ color: '#000' }}>{t.cvCharlie2}</h4>
          <p style={{ color: '#000' }}>{t.cvCharlie3}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement dateClassName='dat' date="2014 - 2015" iconStyle={{ background: '#DFB00F', color: '#000' }} icon={<Origami />}>
          <h3 style={{ color: '#DFB00F' }}>{t.cvDelta1}</h3>
          <h4 style={{ color: '#000' }}>{t.cvDelta2}</h4>
          <p style={{ color: '#000' }}>{t.cvDelta3}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement dateClassName='dat' date="2022 - ?" iconStyle={{ background: '#E5B90C', color: '#000' }} icon={<Origami />}>
          <h3 style={{ color: '#E5B90C' }}>{t.cvEdward1}</h3>
          <h4 style={{ color: '#000' }}>EC Münchenbuchsee</h4>
          <p style={{ color: '#000' }}>{t.cvFrank1}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement dateClassName='dat' date="2015 - 2017" iconStyle={{ background: '#EFC907', color: '#000' }} icon={<Origami />}>
          <h3 style={{ color: '#EFC907' }}>{t.cvEdward1}</h3>
          <h4 style={{ color: '#000' }}>EC Burgdorf</h4>
          <p style={{ color: '#000' }}>{t.cvEdward3}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement dateClassName='dat' date="2015 - ?" iconStyle={{ background: '#F9D803', color: '#000' }} icon={<BookMarked />}>
          <h3 style={{ color: '#F9D803' }}>{t.cvGeorge1}</h3>
          <h4 style={{ color: '#000' }}>{t.cvGeorge2}</h4>
          <p style={{ color: '#000' }}>{t.cvGeorge3}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement date='01. 2008' iconStyle={{ background: '#ffe100', color: '#000' }} icon={<Cake />} />
      </VerticalTimeline>

      <div className="content">
        <h4>{t.certText}</h4>
        <table>
          <thead>
            <tr>
              <th>{t.crName}</th>
              <th>{t.crDesc}</th>
              <th>{t.crDate}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t.crN1}</td>
              <td>{t.crD1}</td>
              <td>25.01.2025</td>
            </tr>
            <tr>
              <td>{t.crN1}</td>
              <td>{t.crD2}</td>
              <td>27.01.2024</td>
            </tr>
            <tr>
              <td>{t.crN3}</td>
              <td>{t.crD3}</td>
              <td>14.02.2023</td>
            </tr>
            <tr>
              <td>{t.crN4}</td>
              <td>{t.crD4}</td>
              <td>26.05.2018</td>
            </tr>
            <tr>
              <td>{t.crN5}</td>
              <td>{t.crD5}</td>
              <td>15.02.2018</td>
            </tr>
            <tr>
              <td>{t.crN1}</td>
              <td>{t.crD6}</td>
              <td>12.12.2016</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page