import React from 'react';

const SkillProgress = ({ name, level }) => {
  const width = Math.min(Math.max(level, 0), 100);

  return (
    <div className="skill-progress-container" style={{ marginBottom: '16px' }}>
      <div className="skill-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span style={{ fontWeight: '600' }}>{name}</span>
        <span style={{ fontSize: '0.9em' }}>{width}%</span>
      </div>
      <div style={{
        width: '100%',
        height: '16px',
        backgroundColor: '#9cb5db',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <div
          className="proFi"
          style={{
            height: '100%',
            width: `${width}%`
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;