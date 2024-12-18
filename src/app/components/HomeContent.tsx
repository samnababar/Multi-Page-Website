import React from 'react';

const HomeContent: React.FC = () => {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: "url('images (1).jpeg')" }}>
        <div className="content">
          <h1 className="fade-in">Welcome To Wall Clock Wonders</h1>
          <p>Your one stop shop for the best watches</p>
          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
