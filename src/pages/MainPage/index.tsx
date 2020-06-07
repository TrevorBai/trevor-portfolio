import React from 'react';
import avatarLarge from '../../assets/images/avatar/avatar-large.jpg';

const MainPage = () => {
  return (
    <div className="biography-container" >
      <img className="round-img" src={avatarLarge} alt="Avatar-Large" />
      <hr />
      <h1><i>biography</i></h1>
      <p>As an independent contractor, I have designed and developed a couple of web and mobile applications which my clients are satisfied with. It all comes from my previous <b>Robotics Applications Developer</b> experience where I was obsessed in developing efficient software. I possess a <b>Master of Applied Science</b> degree from University of Ottawa which facilitates myself more rapid growth as a developer. I am also good at communicating with clients, providing technical trainings to clients and documenting tutorials.</p>
    </div>
  );
};

export default MainPage;
