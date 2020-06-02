import React, { FC } from 'react';

export interface WebsiteProps {
  websiteName: string;
  imageSrc: string;
  imageAltName: string;
  url?: string;
  githubUrl: string;
  features: string;
  deployed: boolean;
}

const Website: FC<WebsiteProps> = ({
  websiteName,
  imageSrc,
  imageAltName,
  url,
  githubUrl,
  features,
  deployed,
}) => {
  return (
    <div className="website-container">
      <h2>{websiteName}</h2>
      <img src={imageSrc} alt={imageAltName} />
      <div className="lead">
        {deployed && (
          <div>
            <a
              className="website-link"
              target="_blank"
              rel="noopener noreferrer"
              href={url}
            >
              Click here
            </a>{' '}
            to view the deployed website.
            <br />
          </div>
        )}
        <a
          className="website-link"
          target="_blank"
          rel="noopener noreferrer"
          href={githubUrl}
        >
          Click here
        </a>{' '}
        to view the github source code.
        <br />
        <br />
        Highlighted features: <br />
        <br />
        <p>{features}</p>
      </div>
    </div>
  );
};

export default Website;
