import React from 'react';
import Overlay from '../Overlay';
import { Image } from '../../../utilities';
import certDataStructures from '../../../assets/images/cert-data-structures-and-algorithms.jpg';
import certTypeScript from '../../../assets/images/cert-typescript.jpg';
import certHTMLCSS from '../../../assets/images/cert-html-css.jpg';

interface ModalProps {
  clicked: () => void;
  imageEnum: Image;
}

type ImageEnumToBinary = {
  [key in Image]?: string;
};

const Modal: React.FC<ModalProps> = ({ clicked, imageEnum }) => {
  const imgSrc: ImageEnumToBinary = {
    [Image.DataStructure]: certDataStructures,
    [Image.HtmlCss]: certHTMLCSS,
    [Image.Typescript]: certTypeScript,
  };

  return (
    <div className={imageEnum === Image.Nothing ? '' : 'modal'} >
      <Overlay clicked={clicked} imageEnum={imageEnum} />
      {imageEnum === Image.Nothing ? null : (
        <div className="modal-img">
          <img
            className="cert-img-big"
            src={imgSrc[imageEnum]}
            alt="Certificate"
          />
          <div className="image-close" onClick={clicked}>x</div>
        </div>
      )}
    </div>
  );
};

export default Modal;
