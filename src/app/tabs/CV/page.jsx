'use client'

import React from 'react'
import { School, MoonStar, Users, BookMarked, Origami } from 'lucide-react';
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
        <div class="text-grid">
            <p>{t.school}</p>
            <p>{t.private}</p>
            <br />
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: 'rgb(33, 130, 100)', color: '#fff' }} contentArrowStyle={{ borderRight: '7px solid  rgb(33, 130, 100)' }} date="2023 - present" iconStyle={{ background: 'rgb(33, 130, 100)', color: '#fff' }} icon={<School />}>
            <h3 className="vertical-timeline-element-title">{t.cvAdam1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvAdam2}</h4>
            <p>{t.cvAdam3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--work" date="2014 - 2023" iconStyle={{ background: 'rgb(40, 30, 245)', color: '#fff' }} icon={<School />}>
            <h3 className="vertical-timeline-element-title">{t.cvBravo1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvBravo2}</h4>
            <p>{t.cvBravo3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--work" date="2013 - 2023" iconStyle={{ background: 'rgb(40, 30, 245)', color: '#fff' }} icon={<Users />}>
            <h3 className="vertical-timeline-element-title">{t.cvCharlie1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvCharlie2}</h4>
            <p>{t.cvCharlie3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--work" date="2014 - 2015" iconStyle={{ background: 'rgb(150, 15, 120)', color: '#fff' }} icon={<Origami/>}>
            <h3 className="vertical-timeline-element-title">{t.cvDelta1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvDelta2}</h4>
            <p>{t.cvDelta3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--education" date="2015 - 2017" iconStyle={{ background: 'rgb(200, 15, 60)', color: '#fff' }} icon={<Origami />}>
            <h3 className="vertical-timeline-element-title">{t.cvEdward1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvEdward2}</h4>
            <p>{t.cvEdward3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--education" date="2022 - Present" iconStyle={{ background: 'rgb(200, 15, 60)', color: '#fff' }} icon={<Origami />}>
            <h3 className="vertical-timeline-element-title">{t.cvEdward1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvFrank1}</h4>
            <p>{t.cvFrank2}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className="vertical-timeline-element--education" date="2015 - Present" iconStyle={{ background: 'rgb(200, 15, 60)', color: '#fff' }} icon={<BookMarked />}>
            <h3 className="vertical-timeline-element-title">{t.cvGeorge1}</h3>
            <h4 className="vertical-timeline-element-subtitle">{t.cvGeorge2}</h4>
            <p>{t.cvGeorge3}</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement iconStyle={{ background: 'rgb(15, 15, 100)', color: '#fff' }}  icon={<MoonStar />} />
        </VerticalTimeline>
    </div>
  )
}

export default page