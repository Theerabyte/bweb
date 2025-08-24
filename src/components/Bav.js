'use client'

import React, { useEffect } from 'react'
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
                    <div className="bgc" style={{ whiteSpace: "pre-line" }}>
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
                <div>
                    <a style={{ padding: "0 0.25rem" }} href="mailto:naomi.baechler@protonmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d1d80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                    </a>
                    <a style={{ padding: "0 0.25rem" }} href='https://github.com/Theerabyte' target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#275fb1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                    <a style={{ padding: "0 0.25rem" }} href='https://www.linkedin.com/in/naomi-b%C3%A4chler/' target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C0811E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a style={{ padding: "0 0.25rem" }} href='https://www.family.baechler.name/' target='_blank' rel='noreferrer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E5B90C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-egg-icon lucide-egg"><path d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" /></svg>
                    </a>
                    <button id="impressumButton" style={{ marginLeft: "20%" }} onClick={handleImpressumClick}>{t.impressumButton}</button>
                </div>

            </footer>
        </>
    )
}

export default Bav