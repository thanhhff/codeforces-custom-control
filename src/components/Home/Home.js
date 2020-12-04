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
            <h1 style={{ fontSize: 'xxx-large' }}> Contestmania </h1>
            <div className="home-text d-inline-block" style={{ maxWidth: '700px', fontSize: '1.2rem' }}>
              It is a platform to practice questions on different competetive wesites with lot of features like category
              wise questions on Codforces. You can also find company wise problems on Company page.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
