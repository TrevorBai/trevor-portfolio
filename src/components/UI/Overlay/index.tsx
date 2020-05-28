import React from 'react';
import { Image } from '../../../utilities';

interface OverlayProps {
  clicked: () => void;
  imageEnum: Image;
}

const Overlay: React.FC<OverlayProps> = ({ imageEnum, clicked }) => {
  return imageEnum === Image.Nothing ? null : (
    <div className="overlay" onClick={clicked}></div>
  );
};

export default Overlay;
