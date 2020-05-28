import React, { useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import certDataStructures from '../../assets/images/certificates/cert-data-structures-and-algorithms.jpg';
import certTypeScript from '../../assets/images/certificates/cert-typescript.jpg';
import certHTMLCSS from '../../assets/images/certificates/cert-html-css.jpg';
import Modal from '../../components/UI/Modal';
import { Image } from '../../utilities';

const CertificatesPage: FC<RouteComponentProps> = () => {
  const [show, setShow] = useState(false);  // signal transition wrapper in Modal component
  const [image, setImage] = useState<Image>(Image.Nothing);
  const toggleModal = (image: Image) => {
    if (image !== Image.Nothing) {
      setImage(image);
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="certificates-container">
      <Modal
        clicked={() => toggleModal(Image.Nothing)}
        imageEnum={image}
        show={show}
      />
      <h1>Achievements</h1>
      <div className="certificates">
        <img
          className="cert-img"
          src={certDataStructures}
          alt="Certificate-Data-Structure-And-Algorithms"
          onClick={() => toggleModal(Image.DataStructure)}
        />
        <img
          className="cert-img"
          src={certTypeScript}
          alt="Certificate-Typescript"
          onClick={() => toggleModal(Image.Typescript)}
        />
        <img
          className="cert-img"
          src={certHTMLCSS}
          alt="Certificate-Html-Css"
          onClick={() => toggleModal(Image.HtmlCss)}
        />
      </div>
    </div>
  );
};

export default CertificatesPage;
