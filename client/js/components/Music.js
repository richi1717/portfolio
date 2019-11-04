import React, { useState } from 'react';
import mobileCheck from '../helpers/mobileCheck';
import musicList from '../constants/musicList';

const Music = () => {
  const [selected, setSelected] = useState('');

  const renderSelectedAudio = () => (
    <div className="audio-container">
      {musicList.find(music => music.src === selected).name}
      <audio src={selected} controls autoPlay>
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );

  const originalMusic = musicList.filter(music => music.original);
  const notOriginalMusic = musicList.filter(music => !music.original);

  const handleClick = src => () => {
    setSelected(src);
    if (mobileCheck()) {
      window.scrollTo(0, window.innerHeight);
    }
  };

  return (
    <div className="music-page-container">
      <p>
        I enjoy writing music in my free time. Here are some of the songs I've
        written. Keep in mind some of these are very much a work in progress.
        The first section are ones that I wrote, the second section are from
        video games that I thought would be fun to make as well.
      </p>
      <div className="music-container">
        <div className="music-button-wrapper">
          I wrote these:
          {originalMusic.map(music => (
            <span className="music-btn-container" key={music.name}>
              <button
                className="music-btn"
                type="button"
                onClick={handleClick(music.src)}
              >
                {music.name}
              </button>
            </span>
          ))}
          Someone else wrote originally but I liked it so I made my own version:
          {notOriginalMusic.map(music => (
            <span className="music-btn-container" key={music.name}>
              <button
                className="music-btn"
                key={music.name}
                type="button"
                onClick={handleClick(music.src)}
              >
                {music.name}
              </button>
            </span>
          ))}
        </div>
        {selected ? (
          renderSelectedAudio('/britty-incomplete.mp3')
        ) : (
          <div className="audio-container" />
        )}
      </div>
    </div>
  );
};

export default Music;
