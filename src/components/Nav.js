'use client'

import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useLanguage } from '@/[language]/LanguageContext';
// import { window } from '@/';

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
  const [isLangExpanded, setIsLangExpanded] = useState(false);

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


  const handleLangToggle = (expanded) => {
    setIsLangExpanded(expanded);
  };

  return (
    <nav style={{ transition: 'transform 0.3s ease', transform: isLangExpanded ? 'translateX(-100px)' : 'translateX(0)' }} >
      <div className='logo'>
        <img className='icon' src='/icons/v3.png' />
      </div>
      <button id="menuButton" className="menu-button" onClick={handleMenuToggle} style={{ marginLeft: "2%" }}><Menu className='icon' /></button>
      <div className={`${open ? "show" : "menu"}`} ref={menuRef}>
        <a onClick={() => handleNavigation('/tabs/Home')}>{t.home}</a>
        <a onClick={() => handleNavigation('/tabs/CV')}>{t.cv}</a>
        <a onClick={() => handleNavigation('/tabs/Projects')}>{t.proj}</a>
        <a onClick={() => handleNavigation('/tabs/Vault')}>{t.priv}</a>
        <a onClick={() => handleNavigation('/tabs/Contact')}>{t.cont}</a>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Nav;