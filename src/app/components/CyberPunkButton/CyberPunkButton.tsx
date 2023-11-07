import './CyberPunkButton.scss';

import React from 'react';

interface CyberPunkButtonInterface {
  type: 'primary' | 'secondary' | 'tertiary';
}

function CyberPunkButton({ type }: CyberPunkButtonInterface) {
  return <div className='cyberButton'>{type}</div>;
}

export default CyberPunkButton;
