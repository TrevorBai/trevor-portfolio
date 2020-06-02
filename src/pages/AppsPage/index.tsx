import React, { useState, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import downloadGoogleStore from '../../assets/images/downloadIcons/download-app-android.png';
import downloadAppStore from '../../assets/images/downloadIcons/download-app-apple.svg';
import iphoneSnapshotOne from '../../assets/images/iphoneSnapshots/iphone1.png';
import iphoneSnapshotTwo from '../../assets/images/iphoneSnapshots/iphone2.png';
import iphoneSnapshotThree from '../../assets/images/iphoneSnapshots/iphone3.png';
import iphoneSnapshotFour from '../../assets/images/iphoneSnapshots/iphone4.png';
import iphoneSnapshotFive from '../../assets/images/iphoneSnapshots/iphone5.png';
import { ImageClass, IphoneSnapshotImage } from '../../utilities';
import AppsModal from '../../components/AppsModal';

export interface ClickableImage {
  className: string;
  src: string;
  altName: string;
  click: () => void;
}

const AppsPage: FC<RouteComponentProps> = () => {
  const [show, setShow] = useState(false); // signal transition wrapper in Modal component
  const [image, setImage] = useState<IphoneSnapshotImage>(
    IphoneSnapshotImage.Nothing
  );
  const toggleModal = (image: IphoneSnapshotImage) => {
    if (image !== IphoneSnapshotImage.Nothing) {
      setImage(image);
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const imgSrc = new Map();
  imgSrc.set(IphoneSnapshotImage.IphoneSnapshotOne, iphoneSnapshotOne);
  imgSrc.set(IphoneSnapshotImage.IphoneSnapshotTwo, iphoneSnapshotTwo);
  imgSrc.set(IphoneSnapshotImage.IphoneSnapshotThree, iphoneSnapshotThree);
  imgSrc.set(IphoneSnapshotImage.IphoneSnapshotFour, iphoneSnapshotFour);
  imgSrc.set(IphoneSnapshotImage.IphoneSnapshotFive, iphoneSnapshotFive);

  const imageArr: ClickableImage[] = [
    {
      className: 'app-img',
      src: iphoneSnapshotOne,
      altName: 'App-Iphone-Img-One',
      click: () => toggleModal(IphoneSnapshotImage.IphoneSnapshotOne),
    },
    {
      className: 'app-img',
      src: iphoneSnapshotTwo,
      altName: 'App-Iphone-Img-Two',
      click: () => toggleModal(IphoneSnapshotImage.IphoneSnapshotTwo),
    },
    {
      className: 'app-img',
      src: iphoneSnapshotThree,
      altName: 'App-Iphone-Img-Three',
      click: () => toggleModal(IphoneSnapshotImage.IphoneSnapshotThree),
    },
    {
      className: 'app-img',
      src: iphoneSnapshotFour,
      altName: 'App-Iphone-Img-Four',
      click: () => toggleModal(IphoneSnapshotImage.IphoneSnapshotFour),
    },
    {
      className: 'app-img',
      src: iphoneSnapshotFive,
      altName: 'App-Iphone-Img-Five',
      click: () => toggleModal(IphoneSnapshotImage.IphoneSnapshotFive),
    },
  ];

  const renderNextImg = () => {
    setImage(image + 1);
  };

  const renderPrevImg = () => {
    setImage(image - 1);
  };

  return (
    <div className="apps-container">
      <AppsModal
        clicked={() => toggleModal(IphoneSnapshotImage.Nothing)}
        imageEnum={image}
        show={show}
        imgClassName={ImageClass.App}
        imgSrc={imgSrc}
        browseNext={renderNextImg}
        browsePrev={renderPrevImg}
      />
      <h1>My App</h1>
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
          This mobile application is designed and developed for the 1483 Local
          of the Canadian Union of Public Employees.
        </p>
        <hr />
        <div className="app-snapshots">
          {imageArr.map(
            (image: ClickableImage): JSX.Element => (
              <img
                key={image.src}
                className={image.className}
                src={image.src}
                alt={image.altName}
                onClick={image.click}
              />
            )
          )}
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
