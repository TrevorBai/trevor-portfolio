import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import luLegalServices from '../../assets/images/luLegalServices/lu-legal-services.gif';
import burgerBuilder from '../../assets/images/burgerBuilder/burger-builder.gif';
import spacex from '../../assets/images/spacex/spacex.gif';
import budgetApp from '../../assets/images/budget/budget-app.gif';
import pathFinder from '../../assets/images/pathFinder/path-finder.gif';
import Website from '../../components/Website';
import { WebsiteProps } from '../../components/Website';
import { emojiIndent } from '../GamesPage';

const WebsitesPage: FC<RouteComponentProps> = () => {
  const websitePool: WebsiteProps[] = [
    {
      websiteName: 'Path Finder',
      imageSrc: pathFinder,
      imageAltName: 'Path-Finder',
      githubUrl: 'https://github.com/TrevorBai/path-finding-visualizer',
      features: `🚩 It allows users to visulize classic Dijkstra's ${emojiIndent}algorithm in real time. 
      🚩 Users could add walls in the grid, the algorithm still ${emojiIndent}finds the shortest path between the starting node ${emojiIndent}and finishing node by avoiding colliding with walls.`,
      deployed: false,
    },
    {
      websiteName: 'Lu Legal Services',
      imageSrc: luLegalServices,
      imageAltName: 'Lu-Legal-Services',
      url: 'https://lu-legal-services.herokuapp.com/',
      githubUrl: 'https://github.com/TrevorBai/lu-legal-services-2.0',
      features: `Registered users will have the ability to:
      🚩 book an appointment online without calling us.
      🚩 reschedule or cancel booked appointments online.`,
      deployed: true,
    },
    {
      websiteName: 'Burger Builder',
      imageSrc: burgerBuilder,
      imageAltName: 'Burger-Builder',
      url: 'https://react-my-burger-9a4c1.firebaseapp.com/',
      githubUrl: 'https://github.com/TrevorBai/burger-builder-react',
      features: `Registered users will have the ability to:
      🚩 build a burger with predefined ingrediants.
      🚩 order it to be delivered.`,
      deployed: true,
    },
    {
      websiteName: 'SpaceX Launches',
      imageSrc: spacex,
      imageAltName: 'SpaceX-Launches',
      url: 'https://spacex-launch-stats-trevor.herokuapp.com/',
      githubUrl: 'https://github.com/TrevorBai/React-Apollo-GraphQL',
      features: `🚩 GraphQL server integrates with public SpaceX API.
      🚩 It contains all SpaceX launches and details.`,
      deployed: true,
    },
    {
      websiteName: 'Budget App',
      imageSrc: budgetApp,
      imageAltName: 'Budget-App',
      githubUrl: 'https://github.com/TrevorBai/budget-app',
      features: `🚩 A budget calculator keeping track of income and ${emojiIndent}expenses in a month.`,
      deployed: false,
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
              githubUrl={website.githubUrl}
              features={website.features}
              deployed={website.deployed}
            />
          )
        )}
      </div>
    </div>
  );
};

export default WebsitesPage;
