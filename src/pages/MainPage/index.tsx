import React from 'react';
import avatarLarge from '../../assets/images/avatar_large.jpg';

const MainPage = () => {
  return (
    <div className="biography-container" >
      <img className="round-img" src={avatarLarge} alt="Avatar-Large" />
      <hr />
      <h1>biography</h1>
    </div>
  );
};

export default MainPage;
