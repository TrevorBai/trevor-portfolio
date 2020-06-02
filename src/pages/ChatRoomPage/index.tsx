import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Website from '../../components/Website';
import chatRoom from '../../assets/images/chat/chat-app.gif';

const ChatRoomPage: FC<RouteComponentProps> = () => {
  return (
    <div className="chat-room-container">
      <Website
        websiteName="Chat Room"
        imageSrc={chatRoom}
        imageAltName="Pig-Dice-Game"
        url="https://chat-app-trev.herokuapp.com/"
        githubUrl="https://github.com/TrevorBai/chat-app"
        features={`🚩 user could type a room to join in.
          🚩 users in the same chat room would be able to chat and share their locations.
          🚩 it utilizes Socket.io and nodejs.`}
        deployed={true}
      />
    </div>
  );
};

export default ChatRoomPage;
