'use client'

import React from 'react'
import { School, Cake, Users, BookMarked, Origami } from 'lucide-react';
import { useLanguage } from '@/[language]/LanguageContext';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

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
          <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: 'rgb(12, 86, 63)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(12, 86, 63)' }} date="2023 - present" iconStyle={{ background: 'rgb(12, 86, 63)', color: '#fff' }} icon={<School />}>
            <h3 className="vertical-timeline-element-title" style={{color: 'rgb(0, 255, 174)'}}>{t.cvAdam1}</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: '#fff'}}>{t.cvAdam2}</h4>
            <p>{t.cvAdam3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--work" date="2014 - 2023" iconStyle={{ background: 'rgb(20, 99, 83)', color: '#fff' }} icon={<School />}>
            <h3 className="vertical-timeline-element-title" style={{color: 'rgb(20, 99, 83)'}}>{t.cvBravo1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvBravo2}</h4>
            <p>{t.cvBravo3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--work" date="2025 - ?" iconStyle={{ background: 'rgb(33, 130, 100)', color: '#fff' }} icon={<Users />}>
            <h3 className="vertical-timeline-element-title" style={{color: 'rgb(33, 130, 100)'}}>{t.cvCharlie1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvHarley2}</h4>
            <p>{t.cvHarley3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--work" date="2013 - 2023" iconStyle={{ background: 'rgb(55, 158, 126)', color: '#fff' }} icon={<Users />}>
            <h3 className="vertical-timeline-element-title" style={{color: 'rgb(55, 158, 126)'}}>{t.cvCharlie1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvCharlie2}</h4>
            <p>{t.cvCharlie3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--work" date="2014 - 2015" iconStyle={{ background: 'rgb(76, 188, 143)', color: '#fff' }} icon={<Origami/>}>
            <h3 className="vertical-timeline-element-title" style={{color: 'rgb(76, 188, 143)'}}>{t.cvDelta1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvDelta2}</h4>
            <p>{t.cvDelta3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--education" date="2022 - ?" iconStyle={{ background: 'rgb(129, 205, 119)', color: '#fff' }} icon={<Origami />}>
            <h3 className="vertical-timeline-element-title" style={{color: 'rgb(129, 205, 119)'}}>{t.cvEdward1}</h3>
            <h4 className="vertical-timeline-element-subtitle">EC Münchenbuchsee</h4>
            <p>{t.cvFrank1}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--education" date="2015 - 2017" iconStyle={{ background: 'rgb(224, 221, 123)', color: '#fff' }} icon={<Origami />}>
            <h3 className="vertical-timeline-element-title" style={{color: 'rgb(224, 221, 123)'}}>{t.cvEdward1}</h3>
            <h4 className="vertical-timeline-element-subtitle">EC Burgdorf</h4>
            <p>{t.cvEdward3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--education" date="2015 - ?" iconStyle={{ background: 'rgb(246, 229, 72)', color: '#fff' }} icon={<BookMarked />}>
            <h3 className="vertical-timeline-element-title" style={{color: 'rgb(246, 229, 72)'}}>{t.cvGeorge1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvGeorge2}</h4>
            <p>{t.cvGeorge3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement date='January 2008' iconStyle={{ background: 'rgb(255, 225, 0)', color: '#fff' }}  icon={<Cake />} />
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