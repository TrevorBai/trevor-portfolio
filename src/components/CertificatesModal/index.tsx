import React, { FC } from 'react';
import Modal from '../UI/Modal';
import { ModalProps } from '../UI/Modal';

const CertificatesModal: FC<ModalProps> = ({
  clicked,
  imageEnum,
  show,
  imgSrc,
  imgClassName,
  browseNext,
  browsePrev
}) => {
  return (
    <Modal
      clicked={clicked}
      imageEnum={imageEnum}
      show={show}
      imgSrc={imgSrc}
      imgClassName={imgClassName}
      browseNext={browseNext}
      browsePrev={browsePrev}
    />
  );
};

export default CertificatesModal;
