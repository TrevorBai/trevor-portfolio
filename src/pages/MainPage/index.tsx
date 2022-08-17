import React from 'react';
import avatarLarge from '../../assets/images/avatar/avatar-large.jpg';

const MainPage = () => {
  return (
    <div className="biography-container" >
      <img className="round-img" src={avatarLarge} alt="Avatar-Large" />
      <hr />
      <h1><i>biography</i></h1>
      <p>As a software developer, I have recently developed windows applications using <b>c#</b> and <b>dotnet</b> framework. The applications are
      regarding to computational geometry and 2D graphics and are solving/automating civil engineering design process.
      I am also good at building web and mobile apps using React/React Native and Typescript.</p>
    </div>
  );
};

export default MainPage;
