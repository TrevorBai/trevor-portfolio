import React, { FC } from 'react';
import Overlay from '../Overlay';
import { Image, ImageClass } from '../../../utilities';
import certDataStructures from '../../../assets/images/certificates/cert-data-structures-and-algorithms.jpg';
import certTypeScript from '../../../assets/images/certificates/cert-typescript.jpg';
import certHTMLCSS from '../../../assets/images/certificates/cert-html-css.jpg';
import iphoneSnapshotOne from '../../../assets/images/iphoneSnapshots/iphone1.png';
import iphoneSnapshotTwo from '../../../assets/images/iphoneSnapshots/iphone2.png';
import iphoneSnapshotThree from '../../../assets/images/iphoneSnapshots/iphone3.png';
import iphoneSnapshotFour from '../../../assets/images/iphoneSnapshots/iphone4.png';
import iphoneSnapshotFive from '../../../assets/images/iphoneSnapshots/iphone5.png';
import { TransitionWrapper } from '../../TransitionWrapper';
import CloseIcon from '../CloseIcon';

interface ModalProps {
  clicked: () => void;
  imageEnum: Image;
  show: boolean;
}

type ImageEnumToString = {
  [key in Image]?: string;
};

const Modal: FC<ModalProps> = ({ clicked, imageEnum, show }) => {
  const imgSrc: ImageEnumToString = {
    [Image.DataStructure]: certDataStructures,
    [Image.HtmlCss]: certHTMLCSS,
    [Image.Typescript]: certTypeScript,
    [Image.IphoneSnapshotOne]: iphoneSnapshotOne,
    [Image.IphoneSnapshotTwo]: iphoneSnapshotTwo,
    [Image.IphoneSnapshotThree]: iphoneSnapshotThree,
    [Image.IphoneSnapshotFour]: iphoneSnapshotFour,
    [Image.IphoneSnapshotFive]: iphoneSnapshotFive,
  };

  const imgClassName: ImageEnumToString = {
    [Image.DataStructure]: ImageClass.Certificate,
    [Image.HtmlCss]: ImageClass.Certificate,
    [Image.Typescript]: ImageClass.Certificate,
    [Image.IphoneSnapshotOne]: ImageClass.App,
    [Image.IphoneSnapshotTwo]: ImageClass.App,
    [Image.IphoneSnapshotThree]: ImageClass.App,
    [Image.IphoneSnapshotFour]: ImageClass.App,
    [Image.IphoneSnapshotFive]: ImageClass.App,
  };

  return (
    <TransitionWrapper show={show} name="modalZoom" unmountOnExit={true}>
      <div className="modal">
        <Overlay clicked={clicked} />
        <div
          className={'modal-img'.concat('-', imgClassName[imageEnum] as string)}
        >
          <img
            className={imgClassName[imageEnum]}
            src={imgSrc[imageEnum]}
            alt="Certificate"
          />
          <CloseIcon clicked={clicked} />
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default Modal;
