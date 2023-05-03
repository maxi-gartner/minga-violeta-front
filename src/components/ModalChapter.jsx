import React from 'react';

const ModalChapter = ({ onClose, children }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

      }}
    >
      <div
        style={{
          backgroundColor: '#F2F2F7',
          padding: '1rem',
          borderRadius: '14px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
          width: '250px'
        }}
      >
        {children}
        <div className='divide-y-reverse divide-gray-400'>
          <button className="text-[#0A7AFF]" onClick={onClose}>Close</button>
        </div>
        
      </div>
    </div>
  );
};

export default ModalChapter;