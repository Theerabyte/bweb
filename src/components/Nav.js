'use client'

import { useRef, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Earth, FileUser, FolderGit2, Menu, Lock, Phone } from 'lucide-react';
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
  const [isMobile, setIsMobile] = useState(false);
  const [isLangExpanded, setIsLangExpanded] = useState(false);

  const menuRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();
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

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav style={{ transition: 'transform 0.3s ease', transform: isLangExpanded ? 'translateX(-100px)' : 'translateX(0)' }} >
      <div className='logo'>
        <img className='icon' src='/icons/v3.png' />
      </div>
      <button id="menuButton" className="menu-button" onClick={handleMenuToggle} style={{ marginLeft: "2%" }}><Menu className='icon' /></button>
      <div className={`${open ? "show" : "menu"}`} ref={menuRef}>
        <a onClick={() => handleNavigation('/Home')} className={isActive('/Home') ? 'active-link' : 'nava'}><Earth className='ico'/> {!isMobile && t.home}</a>
        <a onClick={() => handleNavigation('/CV')} className={isActive('/CV') ? 'active-link' : 'nava'}><FileUser className='ico' /> {!isMobile && t.cv}</a>
        <a onClick={() => handleNavigation('/Projects')} className={isActive('/Projects') ? 'active-link' : 'nava'}><FolderGit2 className='ico' /> {!isMobile && t.proj}</a>
        <a onClick={() => handleNavigation('/Vault')} className={isActive('/Vault') ? 'active-link' : 'nava'}><Lock className='ico' /> {!isMobile && t.priv}</a>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Nav;