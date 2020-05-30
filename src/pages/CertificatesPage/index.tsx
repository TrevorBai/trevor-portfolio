import React, { useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import certDataStructures from '../../assets/images/certificates/cert-data-structures-and-algorithms.jpg';
import certTypeScript from '../../assets/images/certificates/cert-typescript.jpg';
import certHTMLCSS from '../../assets/images/certificates/cert-html-css.jpg';
import Modal from '../../components/UI/Modal';
import { Image } from '../../utilities';
import { ClickableImage } from '../AppsPage';

const CertificatesPage: FC<RouteComponentProps> = () => {
  const [show, setShow] = useState(false); // signal transition wrapper in Modal component
  const [image, setImage] = useState<Image>(Image.Nothing);
  const toggleModal = (image: Image) => {
    if (image !== Image.Nothing) {
      setImage(image);
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const certImageArr: ClickableImage[] = [
    {
      className: 'cert-img',
      src: certDataStructures,
      altName: 'Certificate-Data-Structure-And-Algorithms',
      click: () => toggleModal(Image.DataStructure),
    },
    {
      className: 'cert-img',
      src: certTypeScript,
      altName: 'Certificate-Typescript',
      click: () => toggleModal(Image.Typescript),
    },
    {
      className: 'cert-img',
      src: certHTMLCSS,
      altName: 'Certificate-Html-Css',
      click: () => toggleModal(Image.HtmlCss),
    },
  ];

  return (
    <div className="certificates-container">
      <Modal
        clicked={() => toggleModal(Image.Nothing)}
        imageEnum={image}
        show={show}
      />
      <h1>Achievements</h1>
      <div className="certificates">
        {certImageArr.map(
          (certImage: ClickableImage): JSX.Element => (
            <img
              key={certImage.src}
              className={certImage.className}
              src={certImage.src}
              alt={certImage.altName}
              onClick={certImage.click}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CertificatesPage;
