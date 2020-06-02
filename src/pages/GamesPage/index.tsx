import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import pigDiceGame from '../../assets/images/pigDiceGame/pig-dice-game.gif';
import Website from '../../components/Website';

export const emojiIndent = `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`;

const GamesPage: FC<RouteComponentProps> = () => {
  return (
    <div className="games-container">
      <h1>My Games</h1>
      <div className="grid-container">
        <Website
          websiteName="Pig Dice Game"
          imageSrc={pigDiceGame}
          imageAltName="Pig-Dice-Game"
          url=""
          githubUrl=""
          features={`🚩 two players roll dice successively.
          🚩 click on HOLD to add round score to the total ${emojiIndent}score.
          🚩 player looses round score when one of the dices is ${emojiIndent}one.
          🚩 first player scores 100 wins.`}
          deployed={false}
        />
      </div>
    </div>
  );
};

export default GamesPage;
