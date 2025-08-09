'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useLanguage } from '@/[language]/LanguageContext';

import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

function page() {
  const { language, changeLanguage } = useLanguage();
  const t = translationsMap[language];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const [expandedHobby, setExpandedHobby] = useState(null);

  const handleToggle = (alt) => {
    setExpandedHobby(prev => (prev === alt ? null : alt));
  };
  
  const hobbies = [
    { src: "/hob/ba.jpg", alt: t.ba, desc: t.ba, resc: t.bad },
    { src: "/hob/bu.jpg", alt: t.bu, desc: t.bu, resc: t.bud },
    { src: "/hob/da.jpg", alt: t.da, desc: t.da, resc: t.dad },
    { src: "/hob/ic.jpg", alt: t.ic, desc: t.ic, resc: t.icd },
    { src: "/hob/dn.jpg", alt: t.dn, desc: t.dn, resc: t.dnd },
    { src: "/hob/bu.jpg", alt: t.pc, desc: t.pc, resc: t.pcd },
    { src: "/hob/bw.jpg", alt: t.bw, desc: t.bw, resc: t.bwd },
    { src: "/hob/bu.jpg", alt: t.mu, desc: t.mu, resc: t.mud }
  ];

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])

  return (
    <div className="flex-container">
      <div className="abme">
        <h2>{t.hoMe}</h2>
        <div style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
          {t.hoTextMe}
          <div style={{ textAlign: "center" }}>
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide"><Image className="Me" src="/bravo.jpg" alt={t.bravo} width={700} height={550} /></div>
                <div className="embla__slide"><Image className='Me' src='/adam.jpg' alt={t.adam} width={700} height={550} /></div>
                <div className="embla__slide"><Image className="Me" src="/charlie.jpg" alt={t.charlie} width={700} height={550} /></div>
                <div className="embla__slide"><Image className="Me" src="/delta.jpg" alt={t.delta} width={700} height={550} /></div>
                <div className="embla__slide"><Image className="Me" src="/edward.jpg" alt={t.edward} width={700} height={550} /></div>
                <div className="embla__slide"><Image className="Me" src="/frank.jpg" alt={t.frank} width={700} height={550} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="HnI">
        <h2>{t.hoHo}</h2>
        <h4>{t.hoTextHo}</h4>
        <br />
        <div className="pics">
          {hobbies.map((hobby) => (
            <div className="responsive" key={hobby.alt} onClick={() => handleToggle(hobby.alt)} style={{ cursor: 'pointer' }}>
              <div className="gallery">
                {expandedHobby === hobby.alt ? (
                  <>
                    <a target="_blank" rel="noopener noreferrer" href={hobby.src}>
                      <Image
                        src={hobby.src}
                        alt={hobby.alt}
                        width={300}
                        height={200}
                        layout="responsive"
                        quality={75}
                      />
                    </a>
                    <div className="desc">{hobby.resc}</div>
                  </>
                ) : (
                  <div className="desc">{hobby.desc}</div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="clearfix"></div>
        <br />
        <div style={{ padding: "6px" }}>
          <p>{t.hoTextIn}</p>
        </div>
      </div>
    </div>
  )
}

export default page
