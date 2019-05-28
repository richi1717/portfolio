import React, { useState } from 'react';

const Music = () => {
  const [selected, setSelected] = useState('');

  const renderSelectedAudio = () => (
    <div className="audio-container">
      {musicSelection.find(music => music.src === selected).name}
      <audio src={selected} controls autoPlay>
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );

  const musicSelection = [
    {
      name: 'Britty - Incomplete',
      src: '/brittyIncomplete.mp3',
      original: true
    },
    { name: 'E-Intro', src: '/eIntro.mp3', original: true },
    {
      name: 'The First song I ever wrote digitally',
      src: '/richiFirst.mp3',
      original: true
    },
    { name: 'Song of Storms', src: '/songOfStorms.mp3', original: false },
    {
      name: 'Legend of Zelda - Dungeon',
      src: '/zeldaDungeon.mp3',
      original: false
    },
    {
      name: 'Final Fantasy VII - Still More Fighting',
      src: '/ffviiStillMoreFighting.mp3',
      original: false
    },
    {
      name: 'Megalomania work in progress',
      src: '/megalomaniaWIP.mp3',
      original: false
    },
    {
      name: 'Pokémon work in progress',
      src: '/pokemonBackgroundWIP.mp3',
      original: false
    },
    { name: 'Final Fantasy VII - Jenova', src: '/jenova.mp3', original: false },
    {
      name: 'Sonic - Green Hill Zone',
      src: '/greenhillZoneSonic.mp3',
      original: false
    }
  ];

  const originalMusic = musicSelection.filter(music => music.original);
  const notOriginalMusic = musicSelection.filter(music => !music.original);

  return (
    <div className="music-page-container">
      <p>
        I enjoy writing music in my free time, here are some of the songs I've
        written. Keep in mind some of these are very much a work in progress.
        The first few are ones I wrote, the second section are from video games
        that I thought would be fun to make as well.
      </p>
      <div className="music-container">
        <div className="music-button-wrapper">
          I wrote these:
          {originalMusic.map(music => (
            <span className="music-btn-container" key={music.name}>
              <button
                className="music-btn"
                type="button"
                onClick={() => {
                  setSelected(music.src);
                }}
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
                onClick={() => {
                  setSelected(music.src);
                }}
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
