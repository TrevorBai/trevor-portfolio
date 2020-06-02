import React from 'react';
import avatarLarge from '../../assets/images/avatar/avatar-large.jpg';

const MainPage = () => {
  return (
    <div className="biography-container" >
      <img className="round-img" src={avatarLarge} alt="Avatar-Large" />
      <hr />
      <h1><i>biography</i></h1>
      <p>I possess a <b>Master of Applied Science</b> degree from University of Ottawa, during school time, I designed and developed <b>ROBOT CONTROLLER</b> software. After graduation, I have worked at a robot programming software company ( OCTOPUZ Inc. ) for 2 years as a <b>ROBOTICS APPLICATIONS DEVELOPER</b> where I developed custom robot kinematics and post processors. After that, I have worked on certain contract works including mobile application development and web development. I have a huge passion keeping track of lastest technologies and challenge myself.</p>
    </div>
  );
};

export default MainPage;
