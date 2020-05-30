import React, { FC } from 'react';
import Modal from '../UI/Modal';
import { ModalProps } from '../UI/Modal';

const AppsModal: FC<ModalProps> = ({
  clicked,
  imageEnum,
  show,
  imgSrc,
  imgClassName,
}) => {
  return (
    <Modal
      clicked={clicked}
      imageEnum={imageEnum}
      show={show}
      imgSrc={imgSrc}
      imgClassName={imgClassName}
    />
  );
};

export default AppsModal;
