import React, { FC } from 'react';

interface OverlayProps {
  clicked: () => void;
}

const Overlay: FC<OverlayProps> = ({ clicked }) => {
  return <div className="overlay" onClick={clicked}></div>;
};

export default Overlay;
