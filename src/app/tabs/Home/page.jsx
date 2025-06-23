'use client'

import Image from 'next/image';
import React, {useEffect} from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useLanguage } from '@/[language]/LanguageContext';

import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

const hobbies = [
  { src: "/da.jpg", alt: "Dancing", desc: "Dancing" },
  { src: "/bu.jpg", alt: "Reading", desc: "Reading" },
  { src: "/ba.jpg", alt: "Baking", desc: "Baking" },
  { src: "/bu.jpg", alt: "Reading", desc: "Reading" },
  { src: "/ic.jpg", alt: "Iceskating", desc:"Iceskating" },
  { src: "/bu.jpg", alt: "Reading", desc: "Reading" }
];

function page() {
    const { language, changeLanguage } = useLanguage();
    const t = translationsMap[language];

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

    useEffect(() => {
      if (emblaApi) {
        console.log(emblaApi.slideNodes())
      }
    }, [emblaApi])

  return (
    <div className="flex-container">
        <div className="abme">
            <h2>{t.hoMe}</h2>
            <div style={{ whiteSpace: "pre-line",  fontSize: "18px"}}>
                {t.hoTextMe}
                <div style={{ textAlign: "center" }}>
                    <div className="embla" ref={emblaRef}>      
                      <div className="embla__container">
                        <div className="embla__slide"><Image className="Me" src="/gp.jpg" alt={t.abravo} width={700} height={550}/>{t.bbravo}</div>
                        <div className="embla__slide"><Image className='Me' src='/mm.jpg' alt={t.aadam} width={700} height={550}/>{t.badam}</div>
                        <div className="embla__slide"><Image className="Me" src="/fm.jpg" alt= {t.acharlie} width={700} height={550}/>{t.bcharlie}</div>
                        <div className="embla__slide"><Image className="Me" src="/dd.jpg" alt= {t.adelta} width={700} height={550}/>{t.bdelta}</div>
                      </div>    
                    </div>
                </div>
            </div>
        </div>
        <div className="HnI">
            <h2>{t.hoHo}</h2>
            <h4>{t.hoTextHo}</h4>
            <div style={{ padding: "6px"}}>
                <p>{t.hoTextIn}</p>
            </div>
            <div className="pics">
              {hobbies.map((hobby) => (
                <div className="responsive" key={hobby.alt}>
                  <div className="gallery">
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
                    <div className="desc">{hobby.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
  )
}

export default page
