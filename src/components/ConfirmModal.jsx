const ConfirmModal = ({ onClose, handleClick, children }) => {
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
          className='divide-y-2'
          style={{
            backgroundColor: '#F2F2F7',
            borderRadius: '14px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            width: '250px'
          }}
        >
          {children}
          <div className="flex divide-x-2">
            <button className="text-[#ff0a0a] text-sm p-2 w-[50%]" onClick={handleClick}>Yes, im sure</button>
            <button className="text-[#0A7AFF] text-sm p-2 w-[50%]" onClick={onClose}>No</button>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default ConfirmModal;