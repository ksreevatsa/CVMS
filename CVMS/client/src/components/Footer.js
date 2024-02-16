import React from 'react';

const Footer = () => {
  const currentDate = new Date().toLocaleDateString();

  const styles = 
  {
    container: {
      position: 'fixed',
      bottom: '0',
      width: '100%',
      backgroundColor: '#AA0000',
      textAlign: 'center',
      padding: '-10px', 
      borderTop: '1px solid #ccc',
    },
  };
  

  return (
    <div style={styles.container}>
      <p style={{ color: 'white' }}>Current Date: {currentDate}</p>
      <h5 style={{ color: 'white' }}>CopyRights Reserved for KLEF</h5>
    </div>
  );
};

export default Footer;
