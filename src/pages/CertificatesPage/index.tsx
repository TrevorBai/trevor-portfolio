import React, { useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import certDataStructures from '../../assets/images/certificates/cert-data-structures-and-algorithms.jpg';
import certTypeScript from '../../assets/images/certificates/cert-typescript.jpg';
import certHTMLCSS from '../../assets/images/certificates/cert-html-css.jpg';
import { Image, ImageClass } from '../../utilities';
import { ClickableImage } from '../AppsPage';
import CertificatesModal from '../../components/CertificatesModal';
import { ImageEnumToString } from '../../components/UI/Modal';

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
  const imgSrc = new Map();
  imgSrc.set(Image.DataStructure, certDataStructures);
  imgSrc.set(Image.Typescript, certTypeScript);
  imgSrc.set(Image.HtmlCss, certHTMLCSS);
  
  const imgClassName: ImageEnumToString = {
    [Image.DataStructure]: ImageClass.Certificate,
    [Image.HtmlCss]: ImageClass.Certificate,
    [Image.Typescript]: ImageClass.Certificate
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
      <CertificatesModal
        clicked={() => toggleModal(Image.Nothing)}
        imageEnum={image}
        show={show}
        imgClassName={imgClassName}
        imgSrc={imgSrc}
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
