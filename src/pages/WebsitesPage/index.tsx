import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import luLegalServices from '../../assets/images/luLegalServices/lu-legal-services.png';
import burgerBuilder from '../../assets/images/BurgerBuilder/burger-builder.png';
import spacex from '../../assets/images/spacex/spacex.png';
import Website from '../../components/Website';
import { WebsiteProps } from '../../components/Website';

const WebsitesPage: FC<RouteComponentProps> = () => {
  const websitePool: WebsiteProps[] = [
    {
      websiteName: 'Lu Legal Services',
      imageSrc: luLegalServices,
      imageAltName: 'Lu-Legal-Services',
      url: 'https://lu-legal-services.herokuapp.com/',
      features: `Registered users will have the ability to:
      🚩 book an appointment online without calling us.
      🚩 reschedule or cancel booked appointments online.`,
    },
    {
      websiteName: 'Burger Builder',
      imageSrc: burgerBuilder,
      imageAltName: 'Burger-Builder',
      url: 'https://react-my-burger-9a4c1.firebaseapp.com/',
      features: `Registered users will have the ability to:
      🚩 build a burger with predefined ingrediants.
      🚩 order it to be delivered.`,
    },
    {
      websiteName: 'SpaceX Launches',
      imageSrc: spacex,
      imageAltName: 'SpaceX-Launches',
      url: 'https://spacex-launch-stats-trevor.herokuapp.com/',
      features: `🚩 It contains all SpaceX launches and details.
      🚩 GraphQL server integrates with public SpaceX API.`,
    },
  ];

  return (
    <div className="websites-container">
      <h1>My Websites</h1>
      <div className="grid-container">
        {websitePool.map(
          (website: WebsiteProps): JSX.Element => (
            <Website
              key={website.imageSrc}
              websiteName={website.websiteName}
              imageSrc={website.imageSrc}
              imageAltName={website.imageAltName}
              url={website.url}
              features={website.features}
            />
          )
        )}
      </div>
    </div>
  );
};

export default WebsitesPage;
