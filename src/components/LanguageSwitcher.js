import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { DE, GB, FR } from 'country-flag-icons/react/3x2'
import { useLanguage } from '@/[language]/LanguageContext';

const LanguageSwitcher = () => {
  const { changeLanguage } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    if (onToggle) {
      onToggle(newExpanded);
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ cursor: 'pointer', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onClick={toggleExpand}
      >
        {isExpanded ? <X size={24} /> : <Plus size={24} />}
      </div>
      {isExpanded && (
        <div className='langBox'
          style={{
            position: 'absolute',
            left: 0,
            border: '1px solid #ccc',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          <a className='langA'
            onClick={() => {
              changeLanguage('en');
              setIsExpanded(false);
            }}
          >
            <GB title="Great Britain" className="flag" />
          </a>
          <a className='langA'
            onClick={() => {
              changeLanguage('fr');
              setIsExpanded(false);
            }}
          >
            <FR title="France" className="flag" />
          </a>
          <a className='langA'
            onClick={() => {
              changeLanguage('de');
              setIsExpanded(false);
            }}
          >
            <DE title="Germany" className="flag" />
          </a>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;