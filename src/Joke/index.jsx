import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [like, setLike] = useState(likes);
  const [unlike, setUnlike] = useState(dislikes);
  return (
    <>
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={userAvatar} />
            <p className="user-name">{userName}</p>
          </div>

          <p className="joke__text">{text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => setLike(like + 1)}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {like}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => setUnlike(unlike + 1)}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {unlike}
          </span>
        </div>
      </div>
    </>
  );
};

export default Joke;
