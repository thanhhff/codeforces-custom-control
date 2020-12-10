import React from 'react';

function Home() {
  return (
    <div id="home">
      <div
        className="head bg-info"
        style={{
          backgroundImage: `url("${process.env.PUBLIC_URL}/images/home-bg.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}
      >
        <div className="home-content text-white">
          <div className="home-shadow-box px-3 py-4">
            <h1 style={{ fontSize: 'xxx-large' }}> Codeforces Contests </h1>
            <div className="home-text d-inline-block" style={{ maxWidth: '700px', fontSize: '1.2rem' }}>
              Represents a contest on Codeforces.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
