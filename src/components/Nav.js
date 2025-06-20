'use client'

import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { House, Menu } from 'lucide-react';
import { useLanguage } from '@/[language]/LanguageContext';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

function Nav() {
   const { language, changeLanguage } = useLanguage();
    const t = translationsMap[language];

  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const menuRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => {
    if (isMobile) {
      setOpen(prev => !prev);
    }
  };

  const handleNavigation = (path) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <nav>
        <div className="logo">
        </div>
       <button id="menuButton" className="menu-button" onClick={handleMenuToggle} style={{ marginLeft: "2%"}}><Menu className='icon' /></button>
        <div className={`${open ? "show" : "menu"}`} ref={menuRef}>
              <a onClick={() => handleNavigation('/tabs/Home')}>{t.home}</a>
              <a onClick={() => handleNavigation('/tabs/CV')}>{t.cv}</a>
              <a onClick={() => handleNavigation('/tabs/Certificates')}>{t.certi}</a>
              <a onClick={() => handleNavigation('/tabs/Private')}>{t.priv}</a>
              <a onClick={() => handleNavigation('/tabs/Contact')}>{t.cont}</a>
              <LanguageSwitcher /> 
        </div>
    </nav>
  );
}

export default Nav;

{/*<nav>
  <h1>{t.welc}</h1>
  <button id="menuButton" className="menu-button" onClick={handleMenuToggle} style={{ marginLeft: "2%"}}><Menu className='icon' /></button>
  <div className={`${open ? "show" : "menu"}`} ref={menuRef} style={{ marginLeft: '4%', marginRight: '31%'}}> 
    <ul className='mul'>
    </ul>
  </div>
  <button onClick={handleHomeToggle}><House className='icon'/></button>
  <LanguageSwitcher />

  const handleHomeToggle = () => {
    setOpen(false);
    window.location.href = 'https://www.family.baechler.name/';
  }; 
</nav> */}