import React, { FC } from 'react';
import Overlay from '../Overlay';
import {
  CertificateImage,
  FontIcon,
  IphoneSnapshotImage,
} from '../../../utilities';
import { TransitionWrapper } from '../../TransitionWrapper';
import CloseIcon from '../CloseIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ModalProps {
  clicked: () => void;
  imageEnum: CertificateImage | IphoneSnapshotImage;
  show: boolean;
  imgSrc: Map<CertificateImage | IphoneSnapshotImage, string>; // take advantage of ordered map and its size method
  imgClassName: string;
  browseNext: () => void;
  browsePrev: () => void;
}

const Modal: FC<ModalProps> = ({
  clicked,
  imageEnum,
  show,
  imgClassName,
  imgSrc,
  browseNext,
  browsePrev
}) => {

  return (
    <TransitionWrapper show={show} name="modalZoom" unmountOnExit={true}>
      <div className="modal">
        <Overlay clicked={clicked} />
        <div
          className={'modal-img'.concat('-', imgClassName)}
        >
          <img
            className={imgClassName}
            src={imgSrc.get(imageEnum)}
            alt="Certificate"
          />
          <CloseIcon clicked={clicked} />
        </div>
        {imageEnum > 1 && (
          <FontAwesomeIcon
            icon={FontIcon.DoubleArrowLeft}
            size="4x"
            className="prev-modal"
            onClick={browsePrev}
          />
        )}
        {imageEnum < imgSrc.size && (
          <FontAwesomeIcon
            icon={FontIcon.DoubleArrowRight}
            size="4x"
            className="next-modal"
            onClick={browseNext}
          />
        )}
      </div>
    </TransitionWrapper>
  );
};

export default Modal;
