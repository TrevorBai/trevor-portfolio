import React, { FC } from 'react';
import Overlay from '../Overlay';
import { Image } from '../../../utilities';
import certDataStructures from '../../../assets/images/certificates/cert-data-structures-and-algorithms.jpg';
import certTypeScript from '../../../assets/images/certificates/cert-typescript.jpg';
import certHTMLCSS from '../../../assets/images/certificates/cert-html-css.jpg';
import { TransitionWrapper } from '../../TransitionWrapper';

interface ModalProps {
  clicked: () => void;
  imageEnum: Image;
  show: boolean;
}

type ImageEnumToBinary = {
  [key in Image]?: string;
};

const Modal: FC<ModalProps> = ({ clicked, imageEnum, show }) => {
  console.log('show :>> ', show);
  const imgSrc: ImageEnumToBinary = {
    [Image.DataStructure]: certDataStructures,
    [Image.HtmlCss]: certHTMLCSS,
    [Image.Typescript]: certTypeScript,
  };

  return (
    <TransitionWrapper show={show} name="modalZoom" unmountOnExit={true}>
      <div className='modal'>
        <Overlay clicked={clicked} />
        <div className="modal-img">
          <img
            className="cert-img-big"
            src={imgSrc[imageEnum]}
            alt="Certificate"
          />
          <div className="image-close" onClick={clicked}>
            x
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default Modal;
