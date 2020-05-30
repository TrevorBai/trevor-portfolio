import React, { FC } from 'react';
import Overlay from '../Overlay';
import { Image } from '../../../utilities';
import { TransitionWrapper } from '../../TransitionWrapper';
import CloseIcon from '../CloseIcon';

export interface ModalProps {
  clicked: () => void;
  imageEnum: Image;
  show: boolean;
  imgSrc: Map<Image, string>;  // take advantage of ordered map and its size method
  imgClassName: ImageEnumToString;
}

// Regular object
export type ImageEnumToString = {
  [key in Image]?: string;
};

const Modal: FC<ModalProps> = ({
  clicked,
  imageEnum,
  show,
  imgClassName,
  imgSrc,
}) => {
  console.log('imageEnum :>> ', imageEnum);
  console.log('imgSrc :>> ', imgSrc);
  for (let key of imgSrc) {
    console.log('key :>> ', key);
  }

  return (
    <TransitionWrapper show={show} name="modalZoom" unmountOnExit={true}>
      <div className="modal">
        <Overlay clicked={clicked} />
        <div
          className={'modal-img'.concat('-', imgClassName[imageEnum] as string)}
        >
          <img
            className={imgClassName[imageEnum]}
            src={imgSrc.get(imageEnum)}
            alt="Certificate"
          />
          <CloseIcon clicked={clicked} />
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default Modal;
