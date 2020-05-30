import React, { FC } from 'react';

interface CloseIconProps {
  clicked: () => void;
}

const CloseIcon: FC<CloseIconProps> = ({ clicked }) => {
  return (
    <div className="close-icon" onClick={clicked}>
      x
    </div>
  );
};

export default CloseIcon;
