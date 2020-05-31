import React, { useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import certDataStructures from '../../assets/images/certificates/cert-data-structures-and-algorithms.jpg';
import certTypeScript from '../../assets/images/certificates/cert-typescript.jpg';
import certHTMLCSS from '../../assets/images/certificates/cert-html-css.jpg';
import { CertificateImage, ImageClass } from '../../utilities';
import { ClickableImage } from '../AppsPage';
import CertificatesModal from '../../components/CertificatesModal';

const CertificatesPage: FC<RouteComponentProps> = () => {
  const [show, setShow] = useState(false); // signal transition wrapper in Modal component
  const [image, setImage] = useState<CertificateImage>(
    CertificateImage.Nothing
  );
  const toggleModal = (image: CertificateImage) => {
    if (image !== CertificateImage.Nothing) {
      setImage(image);
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const imgSrc = new Map();
  imgSrc.set(CertificateImage.DataStructure, certDataStructures);
  imgSrc.set(CertificateImage.Typescript, certTypeScript);
  imgSrc.set(CertificateImage.HtmlCss, certHTMLCSS);

  const certImageArr: ClickableImage[] = [
    {
      className: 'cert-img',
      src: certDataStructures,
      altName: 'Certificate-Data-Structure-And-Algorithms',
      click: () => toggleModal(CertificateImage.DataStructure),
    },
    {
      className: 'cert-img',
      src: certTypeScript,
      altName: 'Certificate-Typescript',
      click: () => toggleModal(CertificateImage.Typescript),
    },
    {
      className: 'cert-img',
      src: certHTMLCSS,
      altName: 'Certificate-Html-Css',
      click: () => toggleModal(CertificateImage.HtmlCss),
    },
  ];

  const renderNextImg = () => {
    setImage(image + 1);
  };

  const renderPrevImg = () => {
    setImage(image - 1);
  };

  return (
    <div className="certificates-container">
      <CertificatesModal
        clicked={() => toggleModal(CertificateImage.Nothing)}
        imageEnum={image}
        show={show}
        imgClassName={ImageClass.Certificate}
        imgSrc={imgSrc}
        browseNext={renderNextImg}
        browsePrev={renderPrevImg}
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
