import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const ConnectingDots: FC<RouteComponentProps> = () => {
  return (
    <div className="connecting-dots-container">
      <h1>Connecting Dots</h1>
      <div className="connections lead">
        <p>
          MIT OpenCourseWare provides very high quality courses helping me{' '}
          <b>CONNECT each technology I have learnt TOGETHER</b>. A list of MIT
          courses I have taken including:
        </p>
        <br />
        <p className="courses">
          <i>
            ✔ &nbsp;&nbsp; MIT 6.01SC Introduction to Electrical Engineering and
            Computer Science |
          </i>
        </p>
        <p className="courses">
          <i>✔ &nbsp;&nbsp; MIT 6.042J Mathematics for Computer Science</i>
        </p>
        <p className="courses">
          <i>✔ &nbsp;&nbsp; MIT 15.S12 Blockchain and Money</i>
        </p>
        <br />
        <hr />
        <br />
        <p>
          Stanford center for professional development also offers very high
          quality courses helping me{' '}
          <b>CONNECT each technology I have learnt TOGETHER</b>. A list of
          Stanford engineering courses I have taken including:
        </p>
        <br />
        <p className="courses">
          <i>✔ &nbsp;&nbsp; CS106A Programming Methodology</i>
        </p>
      </div>
    </div>
  );
};

export default ConnectingDots;
