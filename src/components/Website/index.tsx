import React, { FC } from 'react';

export interface WebsiteProps {
  websiteName: string;
  imageSrc: string;
  imageAltName: string;
  url: string;
  features: string;
}

const Website: FC<WebsiteProps> = ({
  websiteName,
  imageSrc,
  imageAltName,
  url,
  features,
}) => {
  return (
    <div className="website-container">
      <h2>{websiteName}</h2>
      <img src={imageSrc} alt={imageAltName} />
      <p className="lead">
        <a
          className="website-link"
          target="_blank"
          rel="noopener noreferrer"
          href={url}
        >
          Click here
        </a>{' '}
        to view the full website.
        <br />
        <br />
        Highlighted features: <br />
        <br />
        {features}
      </p>
    </div>
  );
};

export default Website;
