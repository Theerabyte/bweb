import React, { useState } from 'react'
import { Languages, SpellCheck } from 'lucide-react'
import { DE, GB, FR } from 'country-flag-icons/react/3x2'
import { useLanguage } from '@/[language]/LanguageContext'

const LanguageSwitcher = () => {
  const { changeLanguage } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    if (ontoggle) {
      onToggle(newExpanded);
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', margin: 'auto' }}>
      <div style={{ cursor: 'pointer', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#07036f !important' }}
        onClick={toggleExpand}
      >
        {isExpanded ? <SpellCheck size={28} /> : <Languages size={28} />}
      </div>
      {isExpanded && (
        <div className='langBox'>
          <a className='langA'
            onClick={() => {
              changeLanguage('en');
              setIsExpanded(false);
            }}
          >
            <GB title="English" className="flag" />
          </a>
          <a className='langA'
            onClick={() => {
              changeLanguage('fr');
              setIsExpanded(false);
            }}
          >
            <FR title="Français" className="flag" />
          </a>
          <a className='langA'
            onClick={() => {
              changeLanguage('de');
              setIsExpanded(false);
            }}
          >
            <DE title="Deutsch" className="flag" />
          </a>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;