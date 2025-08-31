import React from 'react';
import { FileText, Download, GraduationCap } from 'lucide-react';
import { downloadFile } from './NotenDow';
import { useLanguage } from '@/[language]/LanguageContext';

import { en } from '@/[language]/en';
import { de } from '@/[language]/de';
import { fr } from '@/[language]/fr';

const translationsMap = { en, de, fr };

function Noten({ src, alt, title, desc, dow, isPDF, preview }) {
  const handleDownload = async () => {
    const filename = src.split('/').pop();
    await downloadFile(src, filename);
  };

  const { language, changeLanguage } = useLanguage();
  const t = translationsMap[language];

  return (
    <div className="proFo" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
      <div style={{ width: '100%', height: '200px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px', borderRadius: '0.5rem' }}>
        {preview ? (
          <img src={preview} alt={alt} style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }} />
        ) : (
          <span>Error 404</span>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileText size={20} />
          <span>{title}</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <GraduationCap size={20} />
          <span>{desc}</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleDownload}
            style={{ display: 'flex', alignItems: 'center', padding: '4px', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <Download size={20} />
            <span>{dow}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Noten;