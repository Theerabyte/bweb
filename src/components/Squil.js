import React from 'react';

const SkillProgress = ({ name, level }) => {
  const width = Math.min(Math.max(level, 0), 100);

  return (
    <div className="skill-progress-container" style={{ marginBottom: '16px' }}>
      <div className="skill-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span style={{ fontWeight: '600' }}>{name}</span>
        <span style={{ fontSize: '0.9em' }}>{width}%</span>
      </div>
      <div className="progress-bar-background" style={{
        width: '100%',
        height: '16px',
        backgroundColor: '#f5f5f5ff',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <div
          className="progress-bar-fill"
          style={{
            height: '100%',
            width: `${width}%`,
            backgroundColor: '#2658a8ff',
            borderRadius: '8px 0 0 8px',
            transition: 'width 0.5s ease-in-out'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;