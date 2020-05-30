import React, { useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import downloadGoogleStore from '../../assets/images/downloadIcons/download-app-android.png';
import downloadAppStore from '../../assets/images/downloadIcons/download-app-apple.svg';
import iphoneSnapshotOne from '../../assets/images/iphoneSnapshots/iphone1.png';
import iphoneSnapshotTwo from '../../assets/images/iphoneSnapshots/iphone2.png';
import iphoneSnapshotThree from '../../assets/images/iphoneSnapshots/iphone3.png';
import iphoneSnapshotFour from '../../assets/images/iphoneSnapshots/iphone4.png';
import iphoneSnapshotFive from '../../assets/images/iphoneSnapshots/iphone5.png';
import { Image, ImageClass } from '../../utilities';
import AppsModal from '../../components/AppsModal';
import { ImageEnumToString } from '../../components/UI/Modal';

export interface ClickableImage {
  className: string;
  src: string;
  altName: string;
  click: () => void;
}

const AppsPage: FC<RouteComponentProps> = () => {
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
  imgSrc.set(Image.IphoneSnapshotOne, iphoneSnapshotOne);
  imgSrc.set(Image.IphoneSnapshotTwo, iphoneSnapshotTwo);
  imgSrc.set(Image.IphoneSnapshotThree, iphoneSnapshotThree);
  imgSrc.set(Image.IphoneSnapshotFour, iphoneSnapshotFour);
  imgSrc.set(Image.IphoneSnapshotFive, iphoneSnapshotFive);

  const imgClassName: ImageEnumToString = {
    [Image.IphoneSnapshotOne]: ImageClass.App,
    [Image.IphoneSnapshotTwo]: ImageClass.App,
    [Image.IphoneSnapshotThree]: ImageClass.App,
    [Image.IphoneSnapshotFour]: ImageClass.App,
    [Image.IphoneSnapshotFive]: ImageClass.App,
  };

  const imageArr: ClickableImage[] = [
    {
      className: 'app-img',
      src: iphoneSnapshotOne,
      altName: 'App-Iphone-Img-One',
      click: () => toggleModal(Image.IphoneSnapshotOne),
    },
    {
      className: 'app-img',
      src: iphoneSnapshotTwo,
      altName: 'App-Iphone-Img-Two',
      click: () => toggleModal(Image.IphoneSnapshotTwo),
    },
    {
      className: 'app-img',
      src: iphoneSnapshotThree,
      altName: 'App-Iphone-Img-Three',
      click: () => toggleModal(Image.IphoneSnapshotThree),
    },
    {
      className: 'app-img',
      src: iphoneSnapshotFour,
      altName: 'App-Iphone-Img-Four',
      click: () => toggleModal(Image.IphoneSnapshotFour),
    },
    {
      className: 'app-img',
      src: iphoneSnapshotFive,
      altName: 'App-Iphone-Img-Five',
      click: () => toggleModal(Image.IphoneSnapshotFive),
    },
  ];

  return (
    <div className="apps-container">
      <AppsModal
        clicked={() => toggleModal(Image.Nothing)}
        imageEnum={image}
        show={show}
        imgClassName={imgClassName}
        imgSrc={imgSrc}
      />
      <h1>My Apps</h1>
      <br />
      <div className="app-container">
        <h2>CUPE-1483</h2>
        <a
          className="download-google-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://play.google.com/store/apps/details?id=com.usi.cupe1483&hl=en"
        >
          <img src={downloadGoogleStore} alt="download-google-play-store" />
        </a>
        <a
          className="download-apple-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://apps.apple.com/ca/app/cupe-1483/id1500306186"
        >
          <img src={downloadAppStore} alt="download-apple-app-store" />
        </a>
        <p className="lead">
          This mobile application is designed and developed for the 1483 Local of the Canadian
          Union of Public Employees.
        </p>
        <hr />
        <div className="app-snapshots">
          {imageArr.map((image: ClickableImage): JSX.Element => (
            <img
              key={image.src}
              className={image.className}
              src={image.src}
              alt={image.altName}
              onClick={image.click}
            />
          ))}
        </div>
        <hr />
        <p className="lead">
          Within the app, registered members will have the ability to: <br />
          🚩 receive push notifications sent by administrators about important
          updates. <br />
          🚩 view the latest news from the union. <br />
          🚩 submit feedback to union administrators through a contact form.{' '}
          <br />
          🚩 gain quick access to union members contact information. <br />
        </p>
      </div>
    </div>
  );
};

export default AppsPage;
