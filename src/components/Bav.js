'use client'

import React, {useEffect} from 'react'
import { useLanguage } from '@/[language]/LanguageContext';

import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

function Bav() {
   const { language, changeLanguage } = useLanguage();
    const t = translationsMap[language];

    const handleImpressumClick = () => {
        document.getElementById("impressumModal").style.display = "block";
    };
    
    const handleCloseModal = () => {
        document.getElementById("impressumModal").style.display = "none";
    };
    
    const handleModalClick = (event) => {
        const modal = document.getElementById("impressumModal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    useEffect(() => {
        window.onclick = handleModalClick;
        return () => {
            window.onclick = null;
        };
    }, []);

  return (
    <>
        <div id="impressumModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <div className="bgc" style={{ whiteSpace: "pre-line"}}>
                    <h2>{t.impressum}</h2>
                    <br />
                    <h3>{t.contact}</h3>
                    <p>{t.email}<br />{t.phone}</p>
                    <br />
                    <h3>{t.contentResponsibility}</h3>
                    <p>{t.contentDetails}</p>
                    <br />
                    <h3>{t.liability}</h3>
                    <p>{t.liabilityText}</p>
                    <br />
                    <h3>{t.copyright}</h3>
                    <p>{t.copyrightText}</p>
                </div>
            </div>
        </div>
        <footer className="y">
            <p>HS 2024 Gibb | N.Bächler
                <button id="impressumButton" style={{ marginLeft: "20%" }} onClick={handleImpressumClick}>{t.impressumButton}</button>
            </p>
        </footer>
    </>
  )
}

export default Bav